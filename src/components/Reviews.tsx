import { useEffect, useState } from 'react';
import { fetchReviews, type Review } from '@/data';
import { useReveal } from '@/useReveal';
import { Star, Quote, Loader2 } from 'lucide-react';

function Stars({ count, size = 16 }: { count: number; size?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={size}
          className={i < count ? 'text-primary-400 fill-primary-400' : 'text-stone-300'}
        />
      ))}
    </div>
  );
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays < 1) return "aujourd'hui";
  if (diffDays === 1) return 'hier';
  if (diffDays < 7) return `il y a ${diffDays} jours`;
  if (diffDays < 14) return 'il y a 1 semaine';
  if (diffDays < 30) return `il y a ${Math.floor(diffDays / 7)} semaines`;
  if (diffDays < 60) return 'il y a 1 mois';
  return `il y a ${Math.floor(diffDays / 30)} mois`;
}

export default function Reviews() {
  const { ref, visible } = useReveal();
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchReviews().then((revs) => {
      setReviews(revs);
      setLoading(false);
    });
  }, []);

  const avgRating = reviews.length > 0
    ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)
    : '—';

  return (
    <section id="avis" className="py-24 lg:py-32 bg-gradient-to-b from-stone-100 to-stone-50 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-50/50 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''} text-center`}>
          <span className="text-primary-500 font-medium tracking-[0.25em] uppercase text-xs">
            Avis clients
          </span>
          <h2 className="mt-4 font-serif text-4xl lg:text-5xl text-stone-900 font-semibold leading-tight">
            Ce que nos clients
            <span className="text-primary-600 italic"> en disent</span>
          </h2>

          {/* Google rating summary */}
          <div className="mt-8 inline-flex items-center gap-4 bg-white rounded-2xl px-6 py-4 shadow-lg shadow-stone-200/50 border border-stone-100">
            <div className="flex flex-col items-center">
              <span className="font-serif text-3xl font-bold text-stone-900 leading-none">{avgRating}</span>
              <Stars count={Math.round(Number(avgRating))} size={14} />
            </div>
            <div className="h-10 w-px bg-stone-200" />
            <div className="text-left">
              <p className="text-sm font-medium text-stone-700">{reviews.length} avis Google</p>
              <p className="text-xs text-stone-400 mt-0.5">Note moyenne</p>
            </div>
          </div>
        </div>

        {loading ? (
          <div className="mt-16 flex flex-col items-center gap-4">
            <Loader2 size={32} className="animate-spin text-primary-500" />
            <p className="text-sm text-stone-400">Chargement des avis…</p>
          </div>
        ) : reviews.length === 0 ? (
          <p className="mt-12 text-center text-stone-400 italic">
            Soyez le premier à laisser un avis !
          </p>
        ) : (
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="bg-white rounded-3xl p-8 shadow-md shadow-stone-200/40 border border-stone-100 hover:shadow-xl hover:shadow-stone-200/50 hover:-translate-y-1 transition-all duration-400 ease-out-expo relative group overflow-hidden"
              >
                <Quote size={40} className="absolute -bottom-2 -right-2 text-stone-50 group-hover:text-primary-50 transition-colors duration-500 pointer-events-none" aria-hidden="true" />

                <div className="relative flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white font-semibold text-lg shadow-lg shadow-primary-500/20 shrink-0">
                    {review.author_initials}
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-900">{review.author_name}</h3>
                    <p className="text-xs text-stone-400">{formatDate(review.reviewed_at)}</p>
                  </div>
                </div>

                <div className="relative">
                  <Stars count={review.rating} />
                </div>

                <p className="relative mt-4 text-stone-600 leading-relaxed italic">"{review.content}"</p>

                {review.cuisine_score && review.service_score && (
                  <div className="relative mt-6 pt-4 border-t border-stone-100 flex gap-8">
                    <div>
                      <p className="text-xs text-stone-400 uppercase tracking-wide">Cuisine</p>
                      <p className="font-serif text-lg font-bold text-stone-900 mt-1">{review.cuisine_score}/5</p>
                    </div>
                    <div>
                      <p className="text-xs text-stone-400 uppercase tracking-wide">Service</p>
                      <p className="font-serif text-lg font-bold text-stone-900 mt-1">{review.service_score}/5</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        <p className="mt-8 text-center text-sm text-stone-400">
          Avis collectés via Google Maps. Merci à nos clients pour leur confiance.
        </p>
      </div>
    </section>
  );
}
