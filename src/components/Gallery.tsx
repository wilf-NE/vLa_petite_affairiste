import { galleryImages } from '@/data';
import { useReveal } from '@/useReveal';
import { Camera } from 'lucide-react';

export default function Gallery() {
  const { ref, visible } = useReveal();

  return (
    <section id="galerie" className="py-24 lg:py-32 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''} text-center`}>
          <span className="text-primary-500 font-medium tracking-[0.2em] uppercase text-sm">
            Galerie
          </span>
          <h2 className="mt-3 font-serif text-4xl lg:text-5xl text-stone-900 font-semibold leading-tight">
            Un avant-goût en
            <span className="text-primary-600 italic"> images</span>
          </h2>
          <p className="mt-5 text-stone-600 text-lg max-w-2xl mx-auto">
            Plats, ambiance et instants de vie à La Petite Affairiste.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[200px] lg:auto-rows-[240px]">
          {galleryImages.map((img, idx) => {
            const big = idx === 0 || idx === 5;
            return (
              <div
                key={idx}
                className={`relative overflow-hidden rounded-xl group cursor-pointer ${
                  big ? 'col-span-2 row-span-1' : ''
                }`}
              >
                <img
                  src={img.url}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-stone-950/0 group-hover:bg-stone-950/30 transition-all duration-300 flex items-end p-4">
                  <p className="text-white text-sm font-medium translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    {img.alt}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium transition-colors"
          >
            <Camera size={18} />
            Venez vivre l'expérience en personne
          </a>
        </div>
      </div>
    </section>
  );
}
