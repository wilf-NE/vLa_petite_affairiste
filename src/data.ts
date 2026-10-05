import { supabase } from '@/supabaseClient';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  tag: string | null;
  sort_order: number;
  is_available: boolean;
}

export interface MenuCategory {
  id: string;
  slug: string;
  label: string;
  sort_order: number;
  items: MenuItem[];
}

export interface GalleryImage {
  id: string;
  url: string;
  alt: string;
  sort_order: number;
}

export interface Review {
  id: string;
  author_name: string;
  author_initials: string;
  rating: number;
  content: string;
  cuisine_score: number | null;
  service_score: number | null;
  reviewed_at: string;
}

export interface Reservation {
  name: string;
  phone: string;
  reservation_date: string | null;
  guests: string;
  message: string;
}

export async function fetchMenuCategories(): Promise<MenuCategory[]> {
  const { data: categories, error: catError } = await supabase
    .from('menu_categories')
    .select('id, slug, label, sort_order')
    .order('sort_order');

  if (catError || !categories) return [];

  const { data: items, error: itemError } = await supabase
    .from('menu_items')
    .select('id, category_id, name, description, price, tag, sort_order, is_available')
    .eq('is_available', true)
    .order('sort_order');

  if (itemError || !items) return [];

  return categories.map((cat) => ({
    id: cat.slug,
    slug: cat.slug,
    label: cat.label,
    sort_order: cat.sort_order,
    items: items
      .filter((item) => item.category_id === cat.id)
      .map((item) => ({
        id: item.id,
        name: item.name,
        description: item.description,
        price: item.price,
        tag: item.tag,
        sort_order: item.sort_order,
        is_available: item.is_available,
      })),
  }));
}

export async function fetchGalleryImages(): Promise<GalleryImage[]> {
  const { data, error } = await supabase
    .from('gallery_images')
    .select('id, url, alt, sort_order')
    .order('sort_order');

  if (error || !data) return [];
  return data;
}

export async function fetchReviews(): Promise<Review[]> {
  const { data, error } = await supabase
    .from('reviews')
    .select('id, author_name, author_initials, rating, content, cuisine_score, service_score, reviewed_at')
    .order('reviewed_at', { ascending: false });

  if (error || !data) return [];
  return data;
}

export async function submitReservation(reservation: Reservation): Promise<boolean> {
  const { error } = await supabase
    .from('reservations')
    .insert({
      name: reservation.name,
      phone: reservation.phone,
      reservation_date: reservation.reservation_date || null,
      guests: reservation.guests,
      message: reservation.message,
    });

  return !error;
}
