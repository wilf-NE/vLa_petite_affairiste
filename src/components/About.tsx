import { Utensils, Heart, Leaf } from 'lucide-react';
import { useReveal } from '@/useReveal';

export default function About() {
  const { ref, visible } = useReveal();

  return (
    <section id="apropos" className="py-24 lg:py-32 bg-stone-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={ref}
          className={`reveal ${visible ? 'visible' : ''} grid lg:grid-cols-2 gap-16 items-center`}
        >
          {/* Images */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/13869884/pexels-photo-13869884.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Intérieur chaleureux du restaurant"
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-4 lg:-right-8 w-48 lg:w-64 rounded-2xl overflow-hidden shadow-2xl border-8 border-stone-50">
              <img
                src="https://images.pexels.com/photos/17942687/pexels-photo-17942687.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Chef en cuisine"
                className="w-full h-40 lg:h-52 object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-primary-200 rounded-2xl -z-0" />
          </div>

          {/* Text */}
          <div>
            <span className="text-primary-500 font-medium tracking-[0.2em] uppercase text-sm">
              Notre histoire
            </span>
            <h2 className="mt-3 font-serif text-4xl lg:text-5xl text-stone-900 font-semibold leading-tight">
              Une cuisine qui raconte
              <span className="block text-primary-600 italic">une histoire</span>
            </h2>
            <p className="mt-6 text-stone-600 text-lg leading-relaxed">
              La Petite Affairiste est née d'une passion simple : partager les saveurs
              riches et authentiques du Gabon dans un cadre chaleureux et élégant.
              Chaque plat est préparé avec des ingrédients frais, locaux et beaucoup d'amour.
            </p>
            <p className="mt-4 text-stone-600 text-lg leading-relaxed">
              Que ce soit pour un déjeuner d'affaires, un dîner en famille ou un
              repas entre amis, notre équipe vous accueille dans une ambiance
              conviviale au coeur de Libreville.
            </p>

            {/* Features */}
            <div className="mt-10 grid sm:grid-cols-3 gap-6">
              <div className="flex flex-col items-start gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center">
                  <Utensils size={22} className="text-primary-600" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-stone-900">Cuisine maison</h3>
                <p className="text-sm text-stone-500 leading-relaxed">
                  Des plats préparés sur place avec des produits frais.
                </p>
              </div>
              <div className="flex flex-col items-start gap-3">
                <div className="w-12 h-12 rounded-xl bg-secondary-100 flex items-center justify-center">
                  <Heart size={22} className="text-secondary-600" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-stone-900">Service chaleureux</h3>
                <p className="text-sm text-stone-500 leading-relaxed">
                  Une équipe attentionnée et toujours à votre écoute.
                </p>
              </div>
              <div className="flex flex-col items-start gap-3">
                <div className="w-12 h-12 rounded-xl bg-accent-100 flex items-center justify-center">
                  <Leaf size={22} className="text-accent-600" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-stone-900">Produits locaux</h3>
                <p className="text-sm text-stone-500 leading-relaxed">
                  Des ingrédients locaux et de saison, sélectionnés chaque jour.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
