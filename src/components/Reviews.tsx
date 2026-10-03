import { reviews } from '@/data';
import { useReveal } from '@/useReveal';
import { Star, Quote } from 'lucide-react';

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={16}
          className={i < count ? 'text-primary-400 fill-primary-400' : 'text-stone-300'}
        />
      ))}
    </div>
  );
}

export default function Reviews() {
  const { ref, visible } = useReveal();

  return (
    <section id="avis" className="py-24 lg:py-32 bg-gradient-to-b from-stone-50 to-stone-100">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''} text-center`}>
          <span className="text-primary-500 font-medium tracking-[0.2em] uppercase text-sm">
            Avis clients
          </span>
          <h2 className="mt-3 font-serif text-4xl lg:text-5xl text-stone-900 font-semibold leading-tight">
            Ce que nos clients
            <span className="text-primary-600 italic"> en disent</span>
          </h2>

          {/* Google rating summary */}
          <div className="mt-6 inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-sm border border-stone-200">
            <span className="font-serif text-2xl font-bold text-stone-900">4,5</span>
            <Stars count={4} />
            <span className="text-sm text-stone-500">· 2 avis Google</span>
          </div>
        </div>

        {/* Review cards */}
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-8 shadow-sm border border-stone-200 hover:shadow-lg transition-shadow relative"
            >
              <Quote size={40} className="absolute top-6 right-6 text-stone-100" />

              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary-500 flex items-center justify-center text-white font-semibold text-lg">
                  {review.initials}
                </div>
                <div>
                  <h3 className="font-semibold text-stone-900">{review.name}</h3>
                  <p className="text-xs text-stone-400">{review.date}</p>
                </div>
              </div>

              <Stars count={review.rating} />

              <p className="mt-4 text-stone-600 leading-relaxed italic">"{review.text}"</p>

              {review.cuisine && review.service && (
                <div className="mt-6 pt-4 border-t border-stone-100 flex gap-8">
                  <div>
                    <p className="text-xs text-stone-400 uppercase tracking-wide">Cuisine</p>
                    <div className="flex items-center gap-1 mt-1">
                      <span className="font-serif text-lg font-bold text-stone-900">{review.cuisine}/5</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-stone-400 uppercase tracking-wide">Service</p>
                    <div className="flex items-center gap-1 mt-1">
                      <span className="font-serif text-lg font-bold text-stone-900">{review.service}/5</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-stone-400">
          Avis collectés via Google Maps. Merci à nos clients pour leur confiance.
        </p>
      </div>
    </section>
  );
}
