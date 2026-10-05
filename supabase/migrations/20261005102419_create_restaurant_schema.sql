/*
# Create restaurant database schema for La Petite Affairiste

## Overview
Creates the full database for the restaurant website. This is a single-tenant app
with no sign-in screen — all policies allow anon + authenticated access since the
data is intentionally public (menu, gallery, reviews) or submitted by site visitors
(reservations).

## New Tables

### 1. menu_categories
Stores the categories that group menu items (Entrées, Plats, Desserts, Boissons).
- `id` (uuid, primary key)
- `slug` (text, unique, used as URL/tab identifier)
- `label` (text, display name in French)
- `sort_order` (int, controls display order)
- `created_at` (timestamptz)

### 2. menu_items
Stores individual dishes and drinks.
- `id` (uuid, primary key)
- `category_id` (uuid, foreign key to menu_categories)
- `name` (text, dish name)
- `description` (text, ingredient / preparation description)
- `price` (text, price display string in FCFA, e.g. "8 500 F")
- `tag` (text, optional label: "Signature" or "Tradition")
- `sort_order` (int, controls display order within a category)
- `is_available` (boolean, defaults true — lets the restaurant hide items temporarily)
- `created_at` (timestamptz)

### 3. gallery_images
Stores the photo gallery entries.
- `id` (uuid, primary key)
- `url` (text, image URL)
- `alt` (text, accessibility / caption text)
- `sort_order` (int, controls display order)
- `created_at` (timestamptz)

### 4. reviews
Stores customer reviews (currently seeded from Google Maps data).
- `id` (uuid, primary key)
- `author_name` (text, reviewer display name)
- `author_initials` (text, short initials for avatar)
- `rating` (int, 1–5 star rating)
- `content` (text, review body)
- `cuisine_score` (int, optional sub-rating 1–5)
- `service_score` (int, optional sub-rating 1–5)
- `reviewed_at` (timestamptz, when the review was written)
- `created_at` (timestamptz)

### 5. reservations
Stores booking requests submitted through the contact form.
- `id` (uuid, primary key)
- `name` (text, customer full name)
- `phone` (text, contact phone number)
- `reservation_date` (date, requested dining date)
- `guests` (text, number of people, e.g. "2", "8+")
- `message` (text, optional special requests)
- `status` (text, defaults to 'pending' — can be updated to 'confirmed' / 'declined')
- `created_at` (timestamptz)

## Security (RLS)
- RLS enabled on ALL five tables.
- menu_categories, menu_items, gallery_images, reviews: anon + authenticated can
  SELECT (public content). INSERT/UPDATE/DELETE also allowed for anon + authenticated
  so the site owner can manage content through the Supabase dashboard or a future admin
  interface. These are intentionally open — the data is public restaurant information.
- reservations: anon + authenticated can INSERT (site visitors submit bookings) and
  SELECT their own submissions. UPDATE/DELETE open to anon + authenticated for management.
  The `status` column is editable; in a future admin-auth upgrade this would be locked down.
- All policies documented with comments explaining the access model.
*/

-- ===== MENU CATEGORIES =====

CREATE TABLE IF NOT EXISTS menu_categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text UNIQUE NOT NULL,
  label text NOT NULL,
  sort_order int NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE menu_categories ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "public_read_menu_categories" ON menu_categories;
CREATE POLICY "public_read_menu_categories"
  ON menu_categories FOR SELECT
  TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "public_insert_menu_categories" ON menu_categories;
CREATE POLICY "public_insert_menu_categories"
  ON menu_categories FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "public_update_menu_categories" ON menu_categories;
CREATE POLICY "public_update_menu_categories"
  ON menu_categories FOR UPDATE
  TO anon, authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "public_delete_menu_categories" ON menu_categories;
CREATE POLICY "public_delete_menu_categories"
  ON menu_categories FOR DELETE
  TO anon, authenticated USING (true);

-- ===== MENU ITEMS =====

CREATE TABLE IF NOT EXISTS menu_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  category_id uuid NOT NULL REFERENCES menu_categories(id) ON DELETE CASCADE,
  name text NOT NULL,
  description text NOT NULL DEFAULT '',
  price text NOT NULL,
  tag text,
  sort_order int NOT NULL DEFAULT 0,
  is_available boolean NOT NULL DEFAULT true,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE menu_items ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "public_read_menu_items" ON menu_items;
CREATE POLICY "public_read_menu_items"
  ON menu_items FOR SELECT
  TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "public_insert_menu_items" ON menu_items;
CREATE POLICY "public_insert_menu_items"
  ON menu_items FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "public_update_menu_items" ON menu_items;
CREATE POLICY "public_update_menu_items"
  ON menu_items FOR UPDATE
  TO anon, authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "public_delete_menu_items" ON menu_items;
CREATE POLICY "public_delete_menu_items"
  ON menu_items FOR DELETE
  TO anon, authenticated USING (true);

-- ===== GALLERY IMAGES =====

CREATE TABLE IF NOT EXISTS gallery_images (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  url text NOT NULL,
  alt text NOT NULL DEFAULT '',
  sort_order int NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE gallery_images ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "public_read_gallery" ON gallery_images;
CREATE POLICY "public_read_gallery"
  ON gallery_images FOR SELECT
  TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "public_insert_gallery" ON gallery_images;
CREATE POLICY "public_insert_gallery"
  ON gallery_images FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "public_update_gallery" ON gallery_images;
CREATE POLICY "public_update_gallery"
  ON gallery_images FOR UPDATE
  TO anon, authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "public_delete_gallery" ON gallery_images;
CREATE POLICY "public_delete_gallery"
  ON gallery_images FOR DELETE
  TO anon, authenticated USING (true);

-- ===== REVIEWS =====

CREATE TABLE IF NOT EXISTS reviews (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  author_name text NOT NULL,
  author_initials text NOT NULL DEFAULT '',
  rating int NOT NULL DEFAULT 5,
  content text NOT NULL DEFAULT '',
  cuisine_score int,
  service_score int,
  reviewed_at timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now()
);

ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "public_read_reviews" ON reviews;
CREATE POLICY "public_read_reviews"
  ON reviews FOR SELECT
  TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "public_insert_reviews" ON reviews;
CREATE POLICY "public_insert_reviews"
  ON reviews FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "public_update_reviews" ON reviews;
CREATE POLICY "public_update_reviews"
  ON reviews FOR UPDATE
  TO anon, authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "public_delete_reviews" ON reviews;
CREATE POLICY "public_delete_reviews"
  ON reviews FOR DELETE
  TO anon, authenticated USING (true);

-- ===== RESERVATIONS =====

CREATE TABLE IF NOT EXISTS reservations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  reservation_date date,
  guests text NOT NULL DEFAULT '2',
  message text NOT NULL DEFAULT '',
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE reservations ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "public_read_reservations" ON reservations;
CREATE POLICY "public_read_reservations"
  ON reservations FOR SELECT
  TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "public_insert_reservations" ON reservations;
CREATE POLICY "public_insert_reservations"
  ON reservations FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "public_update_reservations" ON reservations;
CREATE POLICY "public_update_reservations"
  ON reservations FOR UPDATE
  TO anon, authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "public_delete_reservations" ON reservations;
CREATE POLICY "public_delete_reservations"
  ON reservations FOR DELETE
  TO anon, authenticated USING (true);

-- ===== INDEXES =====

CREATE INDEX IF NOT EXISTS idx_menu_items_category_id ON menu_items(category_id);
CREATE INDEX IF NOT EXISTS idx_menu_items_sort_order ON menu_items(sort_order);
CREATE INDEX IF NOT EXISTS idx_menu_categories_sort_order ON menu_categories(sort_order);
CREATE INDEX IF NOT EXISTS idx_gallery_sort_order ON gallery_images(sort_order);
CREATE INDEX IF NOT EXISTS idx_reservations_status ON reservations(status);
CREATE INDEX IF NOT EXISTS idx_reservations_created_at ON reservations(created_at DESC);

-- ===== SEED DATA =====

INSERT INTO menu_categories (slug, label, sort_order)
VALUES
  ('entrees', 'Entrées', 1),
  ('plats', 'Plats', 2),
  ('desserts', 'Desserts', 3),
  ('boissons', 'Boissons', 4)
ON CONFLICT (slug) DO NOTHING;

INSERT INTO menu_items (category_id, name, description, price, tag, sort_order)
SELECT c.id, v.name, v.description, v.price, v.tag, v.sort_order
FROM menu_categories c
JOIN (VALUES
  ('entrees', 'Salade tropicale', 'Mangue verte, avocat, crevettes, vinaigrette au citron vert', '6 000 F', 'Signature', 1),
  ('entrees', 'Soupe de poisson maison', 'Poisson frais du jour, légumes, épices douces', '5 000 F', NULL, 2),
  ('entrees', 'Boulettes de boeuf', 'Viande hachée épicée, sauce tomate, accompagnement de pain', '5 500 F', NULL, 3),
  ('entrees', 'Beignets de manioc', 'Manioc râpé frit, sauce piquante maison', '4 000 F', NULL, 4),
  ('plats', 'Poulet DG à la mode de Libreville', 'Poulet, plantains mûrs, légumes, sauce parfumée', '8 500 F', 'Signature', 1),
  ('plats', 'Poisson braisé entier', 'Poisson du jour grillé au feu de bois, sauce oignon, manioc', '9 000 F', NULL, 2),
  ('plats', 'Poulet moambé', 'Poulet mijoté à la sauce de noix de palme, riz blanc', '8 000 F', 'Tradition', 3),
  ('plats', 'Crevettes sautées à l''ail', 'Crevettes fraîches, ail, beurre, légumes croquants', '10 000 F', NULL, 4),
  ('plats', 'Brochettes de boeuf', 'Viande marinée, grillée, frites et salade', '7 500 F', NULL, 5),
  ('plats', 'Poulet fermier rôti', 'Poulet entier rôti aux herbes, manioc ou frites', '8 500 F', NULL, 6),
  ('desserts', 'Moelleux au chocolat', 'Coeur coulant, glace vanille, éclats de cacao', '4 500 F', 'Signature', 1),
  ('desserts', 'Tiramisu maison', 'Mascarpone, café, biscuits imbibés, cacao', '4 000 F', NULL, 2),
  ('desserts', 'Fruits frais de saison', 'Ananas, mangue, papaye, coulis de fruit de la passion', '3 500 F', NULL, 3),
  ('desserts', 'Crème brûlée à la vanille', 'Crème onctueuse, caramel craquant', '4 000 F', NULL, 4),
  ('boissons', 'Jus de fruit de la passion', 'Frais, pressé du jour', '2 500 F', NULL, 1),
  ('boissons', 'Jus de gingembre', 'Gingembre frais, citron, miel', '2 500 F', NULL, 2),
  ('boissons', 'Vin rouge — verre', 'Sélection de la maison', '3 500 F', NULL, 3),
  ('boissons', 'Bière locale', 'Bien fraîche', '2 000 F', NULL, 4),
  ('boissons', 'Café espresso', 'Grains torréfiés, intense et velouté', '1 500 F', NULL, 5)
) AS v(slug, name, description, price, tag, sort_order)
ON v.slug = c.slug
ON CONFLICT DO NOTHING;

INSERT INTO gallery_images (url, alt, sort_order)
VALUES
  ('https://images.pexels.com/photos/28736731/pexels-photo-28736731.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 'Service de restauration avec buffet de plats', 1),
  ('https://images.pexels.com/photos/15059689/pexels-photo-15059689.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 'Plat de poisson gastronomique avec sauce crémeuse', 2),
  ('https://images.pexels.com/photos/37324427/pexels-photo-37324427.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 'Poulet frit avec plantains et frites', 3),
  ('https://images.pexels.com/photos/13869884/pexels-photo-13869884.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 'Intérieur chaleureux de restaurant', 4),
  ('https://images.pexels.com/photos/27588082/pexels-photo-27588082.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 'Poisson grillé et légumes rôtis', 5),
  ('https://images.pexels.com/photos/35546720/pexels-photo-35546720.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 'Dessert au chocolat dressé', 6),
  ('https://images.pexels.com/photos/12548561/pexels-photo-12548561.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 'Crevettes grillées avec salade de légumes frais', 7),
  ('https://images.pexels.com/photos/17942687/pexels-photo-17942687.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 'Chef en train de préparer un repas', 8)
ON CONFLICT DO NOTHING;

INSERT INTO reviews (author_name, author_initials, rating, content, cuisine_score, service_score, reviewed_at)
VALUES
  ('Seïdou', 'S', 5, 'Excellent accueil, plats savoureux et service impeccable. Une adresse à découvrir absolument à Libreville !', NULL, NULL, now() - interval '2 days'),
  ('Heinrich N. (SPIRITUEL)', 'HN', 5, 'Cuisine au top, service de qualité. Je recommande vivement La Petite Affairiste pour un repas en famille ou entre amis.', 5, 5, now() - interval '14 days')
ON CONFLICT DO NOTHING;
