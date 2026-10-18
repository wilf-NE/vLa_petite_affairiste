import { useEffect, useState } from 'react';
import { fetchGalleryImages, type GalleryImage } from '@/data';
import { useReveal } from '@/useReveal';
import { Camera, Loader2, Plus } from 'lucide-react';

export default function Gallery() {
  const { ref, visible } = useReveal();
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchGalleryImages().then((imgs) => {
      setImages(imgs);
      setLoading(false);
    });
  }, []);

  // Layout pattern: some items span 2 cols/rows for visual interest
  const spanPattern = [
    'col-span-2 row-span-2',
    '',
    '',
    'col-span-2',
    '',
    'col-span-2 row-span-2',
    '',
    '',
  ];

  return (
    <section id="galerie" className="py-24 lg:py-32 bg-stone-50 relative overflow-hidden">
      <div className="absolute top-20 left-0 w-96 h-96 bg-primary-50/60 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''} text-center`}>
          <span className="text-primary-500 font-medium tracking-[0.25em] uppercase text-xs">
            Galerie
          </span>
          <h2 className="mt-4 font-serif text-4xl lg:text-5xl text-stone-900 font-semibold leading-tight">
            Un avant-goût en
            <span className="text-primary-600 italic"> images</span>
          </h2>
          <div className="mt-6 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-primary-400/50" />
            <span className="w-1.5 h-1.5 rounded-full bg-primary-400" />
            <span className="h-px w-12 bg-primary-400/50" />
          </div>
          <p className="mt-5 text-stone-600 text-lg max-w-2xl mx-auto">
            Plats, ambiance et instants de vie à La Petite Affairiste.
          </p>
        </div>

        {loading ? (
          <div className="mt-16 flex flex-col items-center gap-4">
            <Loader2 size={32} className="animate-spin text-primary-500" />
            <p className="text-sm text-stone-400">Chargement des photos…</p>
          </div>
        ) : (
          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 auto-rows-[160px] lg:auto-rows-[200px]">
            {images.map((img, idx) => (
              <div
                key={img.id}
                className={`relative overflow-hidden rounded-2xl group cursor-pointer ${spanPattern[idx] ?? ''}`}
              >
                <img
                  src={img.url}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out-expo group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-stone-950/0 to-stone-950/0 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                {/* Plus icon on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-400">
                  <div className="w-10 h-10 rounded-full glass flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-400">
                    <Plus size={18} className="text-white" />
                  </div>
                </div>
                <p className="absolute bottom-0 left-0 right-0 p-4 text-white text-sm font-medium translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                  {img.alt}
                </p>
              </div>
            ))}
          </div>
        )}

        <div className="mt-10 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium transition-colors group"
          >
            <Camera size={18} className="group-hover:scale-110 transition-transform" />
            Venez vivre l'expérience en personne
          </a>
        </div>
      </div>
    </section>
  );
}
