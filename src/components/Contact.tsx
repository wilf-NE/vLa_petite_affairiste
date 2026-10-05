import { useState } from 'react';
import { submitReservation } from '@/data';
import { useReveal } from '@/useReveal';
import { Phone, MapPin, Clock, Navigation, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

export default function Contact() {
  const { ref, visible } = useReveal();
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [form, setForm] = useState({
    name: '',
    phone: '',
    date: '',
    guests: '2',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus('idle');

    const success = await submitReservation({
      name: form.name,
      phone: form.phone,
      reservation_date: form.date || null,
      guests: form.guests,
      message: form.message,
    });

    if (success) {
      setStatus('success');
      setForm({ name: '', phone: '', date: '', guests: '2', message: '' });
      setTimeout(() => setStatus('idle'), 6000);
    } else {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 6000);
    }
    setSubmitting(false);
  };

  const inputClass =
    'w-full bg-stone-50 border border-stone-300 rounded-lg px-4 py-3 text-stone-800 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all';

  return (
    <section id="contact" className="py-24 lg:py-32 bg-stone-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-grain opacity-40" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''} text-center`}>
          <span className="text-primary-400 font-medium tracking-[0.2em] uppercase text-sm">
            Contact
          </span>
          <h2 className="mt-3 font-serif text-4xl lg:text-5xl text-white font-semibold leading-tight">
            Réservez votre
            <span className="text-primary-300 italic"> table</span>
          </h2>
          <p className="mt-5 text-stone-400 text-lg max-w-2xl mx-auto">
            Appelez-nous ou remplissez le formulaire ci-dessous. Nous vous confirmerons votre réservation dans les plus brefs délais.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-5 gap-8">
          {/* Info card */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-stone-800 rounded-2xl p-6 border border-stone-700">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-primary-500/20 flex items-center justify-center shrink-0">
                  <Phone size={20} className="text-primary-300" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Téléphone</h3>
                  <a href="tel:077037413" className="text-stone-400 hover:text-primary-300 transition-colors">
                    077 03 74 13
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-stone-800 rounded-2xl p-6 border border-stone-700">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-primary-500/20 flex items-center justify-center shrink-0">
                  <MapPin size={20} className="text-primary-300" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Adresse</h3>
                  <p className="text-stone-400">13131, Libreville, Gabon</p>
                  <p className="text-stone-500 text-sm mt-1">CF3G+24 Libreville</p>
                </div>
              </div>
            </div>

            <div className="bg-stone-800 rounded-2xl p-6 border border-stone-700">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-primary-500/20 flex items-center justify-center shrink-0">
                  <Clock size={20} className="text-primary-300" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Horaires d'ouverture</h3>
                  <div className="mt-2 space-y-1 text-sm text-stone-400">
                    <div className="flex justify-between gap-6">
                      <span>Lun — Dim</span>
                      <span className="text-success-500">Ouvert</span>
                    </div>
                    <div className="flex justify-between gap-6">
                      <span>Fermeture</span>
                      <span>23:00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/dir/?api=1&destination=CF3G%2B24+Libreville+Gabon"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-stone-800 hover:bg-stone-700 text-white font-medium px-6 py-4 rounded-2xl border border-stone-700 transition-all hover:scale-[1.02]"
            >
              <Navigation size={18} />
              Itinéraire vers le restaurant
            </a>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="bg-stone-800 rounded-2xl p-8 border border-stone-700"
            >
              {status === 'success' && (
                <div className="mb-6 flex items-center gap-3 bg-success-500/15 border border-success-500/30 rounded-lg px-4 py-3 animate-fade-in">
                  <CheckCircle size={20} className="text-success-500 shrink-0" />
                  <span className="text-sm text-success-500">
                    Merci ! Votre demande de réservation a bien été envoyée. Nous vous contacterons rapidement.
                  </span>
                </div>
              )}

              {status === 'error' && (
                <div className="mb-6 flex items-center gap-3 bg-error-500/15 border border-error-500/30 rounded-lg px-4 py-3 animate-fade-in">
                  <AlertCircle size={20} className="text-error-500 shrink-0" />
                  <span className="text-sm text-error-500">
                    Une erreur est survenue. Veuillez réessayer ou nous appeler directement au 077 03 74 13.
                  </span>
                </div>
              )}

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-stone-300 mb-2">Nom complet *</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={inputClass}
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label className="block text-sm text-stone-300 mb-2">Téléphone *</label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className={inputClass}
                    placeholder="07X XX XX XX"
                  />
                </div>
                <div>
                  <label className="block text-sm text-stone-300 mb-2">Date souhaitée</label>
                  <input
                    type="date"
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-sm text-stone-300 mb-2">Nombre de couverts</label>
                  <select
                    value={form.guests}
                    onChange={(e) => setForm({ ...form, guests: e.target.value })}
                    className={inputClass}
                  >
                    {['1', '2', '3', '4', '5', '6', '7', '8', '8+'].map((n) => (
                      <option key={n} value={n}>
                        {n} {n === '1' ? 'personne' : 'personnes'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-sm text-stone-300 mb-2">
                  Message (optionnel)
                </label>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={inputClass + ' resize-none'}
                  placeholder="Une demande particulière ? Une occasion spéciale ?"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="mt-6 w-full flex items-center justify-center gap-2 bg-primary-500 hover:bg-primary-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-medium px-6 py-4 rounded-lg transition-all hover:scale-[1.01] hover:shadow-lg hover:shadow-primary-500/30"
              >
                {submitting ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Envoyer ma demande
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
