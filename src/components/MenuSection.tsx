import { useEffect, useState } from 'react';
import { fetchMenuCategories, type MenuCategory } from '@/data';
import { useReveal } from '@/useReveal';
import { Flame, Loader2 } from 'lucide-react';

export default function MenuSection() {
  const [categories, setCategories] = useState<MenuCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('');
  const { ref, visible } = useReveal();

  useEffect(() => {
    fetchMenuCategories().then((cats) => {
      setCategories(cats);
      if (cats.length > 0) {
        setActiveCategory(cats[1]?.id ?? cats[0].id);
      }
      setLoading(false);
    });
  }, []);

  const current = categories.find((c) => c.id === activeCategory) ?? categories[0];

  return (
    <section id="menu" className="py-24 lg:py-32 bg-stone-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-grain opacity-50" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/40 to-transparent" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''} text-center`}>
          <span className="text-primary-400 font-medium tracking-[0.2em] uppercase text-sm">
            Notre carte
          </span>
          <h2 className="mt-3 font-serif text-4xl lg:text-5xl text-white font-semibold leading-tight">
            Les plats qui font
            <span className="text-primary-300 italic"> notre réputation</span>
          </h2>
          <p className="mt-5 text-stone-400 text-lg max-w-2xl mx-auto">
            Une sélection de spécialités préparées avec passion et savoir-faire.
          </p>
        </div>

        {loading ? (
          <div className="mt-16 flex justify-center">
            <Loader2 size={32} className="animate-spin text-primary-400" />
          </div>
        ) : (
          <>
            {/* Category tabs */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                    activeCategory === cat.id
                      ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/30'
                      : 'bg-stone-800 text-stone-300 hover:bg-stone-700 hover:text-white'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Menu items */}
            {current && current.items.length > 0 ? (
              <div className="mt-12 grid md:grid-cols-2 gap-x-12 gap-y-8">
                {current.items.map((item, idx) => (
                  <div
                    key={item.id}
                    className="group border-b border-stone-700/50 pb-6 animate-fade-in"
                    style={{ animationDelay: `${idx * 60}ms`, opacity: 0 }}
                  >
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="font-serif text-xl font-semibold text-white group-hover:text-primary-300 transition-colors flex items-center gap-2 flex-wrap">
                        {item.name}
                        {item.tag === 'Signature' && (
                          <span className="inline-flex items-center gap-1 text-xs bg-primary-500/20 text-primary-300 px-2 py-0.5 rounded-full border border-primary-500/30">
                            <Flame size={11} /> Signature
                          </span>
                        )}
                        {item.tag === 'Tradition' && (
                          <span className="text-xs bg-secondary-500/20 text-secondary-300 px-2 py-0.5 rounded-full border border-secondary-500/30">
                            Tradition
                          </span>
                        )}
                      </h3>
                      <span className="font-serif text-xl font-semibold text-primary-300 whitespace-nowrap">
                        {item.price}
                      </span>
                    </div>
                    <p className="mt-2 text-stone-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="mt-12 text-center text-stone-500 italic">
                Aucun plat disponible dans cette catégorie pour le moment.
              </p>
            )}

            <p className="mt-12 text-center text-stone-500 text-sm italic">
              Les prix sont indiqués en Francs CFA. Menu indicatif, susceptible de varier selon l'arrivage du jour.
            </p>
          </>
        )}
      </div>
    </section>
  );
}
