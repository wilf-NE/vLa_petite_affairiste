import { Utensils, Heart, Leaf, Award } from 'lucide-react';
import { useReveal } from '@/useReveal';

export default function About() {
  const { ref, visible } = useReveal();
  const { ref: ref2, visible: visible2 } = useReveal();

  const features = [
    { icon: Utensils, title: 'Cuisine maison', desc: 'Des plats préparés sur place avec des produits frais du jour.', color: 'primary' },
    { icon: Heart, title: 'Service chaleureux', desc: 'Une équipe attentionnée et toujours à votre écoute.', color: 'accent' },
    { icon: Leaf, title: 'Produits locaux', desc: 'Des ingrédients locaux et de saison, sélectionnés chaque jour.', color: 'secondary' },
  ];

  const colorMap: Record<string, string> = {
    primary: 'bg-primary-100 text-primary-600',
    accent: 'bg-accent-100 text-accent-600',
    secondary: 'bg-secondary-100 text-secondary-600',
  };

  return (
    <section id="apropos" className="py-24 lg:py-32 bg-stone-50 relative overflow-hidden">
      {/* Subtle decorative shapes */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary-100/40 rounded-full blur-3xl -z-0" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-secondary-100/30 rounded-full blur-3xl -z-0" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Images */}
          <div
            ref={ref}
            className={`reveal-left ${visible ? 'visible' : ''} relative`}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-stone-900/20">
              <img
                src="https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&h=800&w=600"
                alt="Salle de restaurant élégante avec ambiance tamisée"
                className="w-full h-[480px] lg:h-[560px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/30 to-transparent" />
            </div>
            <div className="absolute -bottom-8 -right-4 lg:-right-10 w-44 lg:w-60 rounded-2xl overflow-hidden shadow-2xl shadow-stone-900/30 border-4 lg:border-8 border-stone-50">
              <img
                src="https://images.pexels.com/photos/17942687/pexels-photo-17942687.jpeg?auto=compress&cs=tinysrgb&h=400&w=400"
                alt="Chef en train de préparer un repas"
                className="w-full h-36 lg:h-48 object-cover"
                loading="lazy"
              />
            </div>
            {/* Award badge */}
            <div className="absolute -top-4 -left-4 lg:-left-6 bg-white rounded-2xl shadow-xl px-5 py-3 flex items-center gap-3 border border-stone-100">
              <Award size={24} className="text-primary-500" />
              <div className="text-left">
                <p className="font-serif text-2xl font-bold text-stone-900 leading-none">4,5</p>
                <p className="text-[10px] text-stone-400 tracking-wide uppercase mt-0.5">Note Google</p>
              </div>
            </div>
            {/* Decorative border */}
            <div className="absolute -top-6 -left-6 w-28 h-28 border-2 border-primary-200 rounded-3xl -z-10" />
          </div>

          {/* Text */}
          <div
            ref={ref2}
            className={`reveal-right ${visible2 ? 'visible' : ''}`}
          >
            <span className="text-primary-500 font-medium tracking-[0.25em] uppercase text-xs">
              Notre histoire
            </span>
            <h2 className="mt-4 font-serif text-4xl lg:text-5xl text-stone-900 font-semibold leading-[1.15]">
              Une cuisine qui raconte
              <span className="block text-primary-600 italic font-medium">une histoire</span>
            </h2>

            <div className="mt-6 flex items-center gap-3">
              <span className="h-px w-12 bg-primary-400/50" />
              <span className="w-1.5 h-1.5 rounded-full bg-primary-400" />
            </div>

            <p className="mt-6 text-stone-600 text-lg leading-relaxed">
              La Petite Affairiste est née d'une passion simple : partager les saveurs
              riches et authentiques du Gabon dans un cadre chaleureux et élégant.
              Chaque plat est préparé avec des ingrédients frais, locaux et beaucoup d'amour.
            </p>
            <p className="mt-4 text-stone-600 text-lg leading-relaxed">
              Que ce soit pour un déjeuner d'affaires, un dîner en famille ou un
              repas entre amis, notre équipe vous accueille dans une ambiance
              conviviale au cœur de Libreville.
            </p>

            {/* Features */}
            <div className="mt-10 grid sm:grid-cols-3 gap-6">
              {features.map((feat) => {
                const Icon = feat.icon;
                return (
                  <div key={feat.title} className="group">
                    <div className={`w-12 h-12 rounded-2xl ${colorMap[feat.color]} flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}>
                      <Icon size={22} />
                    </div>
                    <h3 className="mt-4 font-serif text-lg font-semibold text-stone-900">{feat.title}</h3>
                    <p className="mt-1.5 text-sm text-stone-500 leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Stats */}
            <div className="mt-10 pt-8 border-t border-stone-200 grid grid-cols-3 gap-4">
              <div>
                <p className="font-serif text-3xl font-bold text-primary-600">100%</p>
                <p className="text-xs text-stone-400 uppercase tracking-wide mt-1">Fait maison</p>
              </div>
              <div>
                <p className="font-serif text-3xl font-bold text-primary-600">23h</p>
                <p className="text-xs text-stone-400 uppercase tracking-wide mt-1">Ouvert jusqu'à</p>
              </div>
              <div>
                <p className="font-serif text-3xl font-bold text-primary-600">4,5★</p>
                <p className="text-xs text-stone-400 uppercase tracking-wide mt-1">Note moyenne</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
