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
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary-500/8 rounded-full blur-[120px]" />
      <div className="absolute inset-0 bg-grain opacity-40" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/40 to-transparent" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''} text-center`}>
          <span className="text-primary-400 font-medium tracking-[0.25em] uppercase text-xs">
            Notre carte
          </span>
          <h2 className="mt-4 font-serif text-4xl lg:text-5xl text-white font-semibold leading-tight">
            Les plats qui font
            <span className="text-primary-300 italic"> notre réputation</span>
          </h2>
          <div className="mt-6 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-primary-400/40" />
            <span className="w-1.5 h-1.5 rounded-full bg-primary-400/60" />
            <span className="h-px w-12 bg-primary-400/40" />
          </div>
          <p className="mt-5 text-stone-400 text-lg max-w-2xl mx-auto">
            Une sélection de spécialités préparées avec passion et savoir-faire.
          </p>
        </div>

        {loading ? (
          <div className="mt-16 flex flex-col items-center gap-4">
            <Loader2 size={32} className="animate-spin text-primary-400" />
            <p className="text-sm text-stone-500">Chargement du menu…</p>
          </div>
        ) : (
          <>
            {/* Category tabs */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              {categories.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-5 sm:px-6 py-3 rounded-full text-sm font-medium transition-all duration-400 ease-out-expo ${
                      isActive
                        ? 'bg-primary-500 text-white shadow-xl shadow-primary-500/30 scale-105'
                        : 'bg-stone-800/80 text-stone-300 hover:bg-stone-700 hover:text-white border border-stone-700/50'
                    }`}
                  >
                    {cat.label}
                    <span className={`ml-2 text-xs ${isActive ? 'text-primary-100' : 'text-stone-500'}`}>
                      {cat.items.length}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Menu items */}
            {current && current.items.length > 0 ? (
              <div key={current.id} className="mt-12 grid md:grid-cols-2 gap-x-12 gap-y-2">
                {current.items.map((item, idx) => (
                  <div
                    key={item.id}
                    className="group py-5 border-b border-stone-700/40 hover:border-stone-600/60 transition-colors animate-fade-in"
                    style={{ animationDelay: `${idx * 50}ms`, opacity: 0 }}
                  >
                    <div className="flex items-baseline gap-3">
                      <h3 className="font-serif text-xl font-semibold text-white group-hover:text-primary-300 transition-colors duration-300 flex items-center gap-2 flex-wrap">
                        {item.name}
                        {item.tag === 'Signature' && (
                          <span className="inline-flex items-center gap-1 text-[10px] bg-primary-500/15 text-primary-300 px-2 py-0.5 rounded-full border border-primary-500/25 uppercase tracking-wide">
                            <Flame size={10} /> Signature
                          </span>
                        )}
                        {item.tag === 'Tradition' && (
                          <span className="text-[10px] bg-secondary-500/15 text-secondary-300 px-2 py-0.5 rounded-full border border-secondary-500/25 uppercase tracking-wide">
                            Tradition
                          </span>
                        )}
                      </h3>
                      <span className="dotted-leader text-stone-500" />
                      <span className="font-serif text-xl font-semibold text-primary-300 whitespace-nowrap group-hover:text-primary-200 transition-colors">
                        {item.price}
                      </span>
                    </div>
                    <p className="mt-1.5 text-stone-400 text-sm leading-relaxed">
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
