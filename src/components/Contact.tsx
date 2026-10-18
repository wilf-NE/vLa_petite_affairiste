import { useState } from 'react';
import { submitReservation } from '@/data';
import { useReveal } from '@/useReveal';
import { Phone, MapPin, Clock, Navigation, Send, CheckCircle, AlertCircle, Loader2, Calendar, Users, MessageSquare, User } from 'lucide-react';

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
    'w-full bg-stone-50 border border-stone-300 rounded-xl px-4 py-3.5 text-stone-800 placeholder:text-stone-400 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all duration-300';

  const labelIconClass = 'absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none';

  const infoCards = [
    { icon: Phone, title: 'Téléphone', value: '077 03 74 13', href: 'tel:077037413' },
    { icon: MapPin, title: 'Adresse', value: '13131, Libreville, Gabon', sub: 'CF3G+24 Libreville' },
    { icon: Clock, title: 'Horaires', value: null, custom: true },
  ];

  return (
    <section id="contact" className="py-24 lg:py-32 bg-stone-900 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-500/6 rounded-full blur-[120px]" />
      <div className="absolute inset-0 bg-grain opacity-40" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''} text-center`}>
          <span className="text-primary-400 font-medium tracking-[0.25em] uppercase text-xs">
            Contact
          </span>
          <h2 className="mt-4 font-serif text-4xl lg:text-5xl text-white font-semibold leading-tight">
            Réservez votre
            <span className="text-primary-300 italic"> table</span>
          </h2>
          <div className="mt-6 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-primary-400/40" />
            <span className="w-1.5 h-1.5 rounded-full bg-primary-400/60" />
            <span className="h-px w-12 bg-primary-400/40" />
          </div>
          <p className="mt-5 text-stone-400 text-lg max-w-2xl mx-auto">
            Appelez-nous ou remplissez le formulaire ci-dessous. Nous vous confirmerons votre réservation dans les plus brefs délais.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-5 gap-8">
          {/* Info cards */}
          <div className="lg:col-span-2 space-y-4">
            {infoCards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="bg-stone-800/80 rounded-2xl p-6 border border-stone-700/50 hover:border-stone-600 transition-colors group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary-500/15 flex items-center justify-center shrink-0 group-hover:bg-primary-500/25 transition-colors">
                      <Icon size={20} className="text-primary-300" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-white text-sm uppercase tracking-wide">{card.title}</h3>
                      {card.custom ? (
                        <div className="mt-2 space-y-1.5 text-sm text-stone-400">
                          <div className="flex items-center justify-between">
                            <span>Lun — Dim</span>
                            <span className="flex items-center gap-1.5 text-success-500">
                              <span className="w-1.5 h-1.5 rounded-full bg-success-500" />
                              Ouvert
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span>Fermeture</span>
                            <span>23:00</span>
                          </div>
                        </div>
                      ) : (
                        <>
                          {card.href ? (
                            <a href={card.href} className="text-stone-300 hover:text-primary-300 transition-colors text-base">
                              {card.value}
                            </a>
                          ) : (
                            <p className="text-stone-300 text-base">{card.value}</p>
                          )}
                          {card.sub && <p className="text-stone-500 text-sm mt-0.5">{card.sub}</p>}
                        </>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}

            <a
              href="https://www.google.com/maps/dir/?api=1&destination=CF3G%2B24+Libreville+Gabon"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-stone-800/80 hover:bg-stone-700 text-white font-medium px-6 py-4 rounded-2xl border border-stone-700/50 transition-all duration-300 ease-out-expo hover:scale-[1.02] group"
            >
              <Navigation size={18} className="group-hover:rotate-12 transition-transform" />
              Itinéraire vers le restaurant
            </a>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="bg-stone-800/80 rounded-3xl p-8 border border-stone-700/50"
            >
              {status === 'success' && (
                <div className="mb-6 flex items-center gap-3 bg-success-500/15 border border-success-500/30 rounded-xl px-4 py-3.5 animate-fade-in">
                  <CheckCircle size={20} className="text-success-500 shrink-0" />
                  <span className="text-sm text-success-500">
                    Merci ! Votre demande de réservation a bien été envoyée. Nous vous contacterons rapidement.
                  </span>
                </div>
              )}

              {status === 'error' && (
                <div className="mb-6 flex items-center gap-3 bg-error-500/15 border border-error-500/30 rounded-xl px-4 py-3.5 animate-fade-in">
                  <AlertCircle size={20} className="text-error-500 shrink-0" />
                  <span className="text-sm text-error-500">
                    Une erreur est survenue. Veuillez réessayer ou nous appeler au 077 03 74 13.
                  </span>
                </div>
              )}

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-stone-300 mb-2 font-medium">Nom complet *</label>
                  <div className="relative">
                    <User size={18} className={labelIconClass} />
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className={inputClass + ' pl-11'}
                      placeholder="Votre nom"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-stone-300 mb-2 font-medium">Téléphone *</label>
                  <div className="relative">
                    <Phone size={18} className={labelIconClass} />
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className={inputClass + ' pl-11'}
                      placeholder="07X XX XX XX"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-stone-300 mb-2 font-medium">Date souhaitée</label>
                  <div className="relative">
                    <Calendar size={18} className={labelIconClass} />
                    <input
                      type="date"
                      value={form.date}
                      onChange={(e) => setForm({ ...form, date: e.target.value })}
                      className={inputClass + ' pl-11'}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-stone-300 mb-2 font-medium">Nombre de couverts</label>
                  <div className="relative">
                    <Users size={18} className={labelIconClass} />
                    <select
                      value={form.guests}
                      onChange={(e) => setForm({ ...form, guests: e.target.value })}
                      className={inputClass + ' pl-11 appearance-none cursor-pointer'}
                    >
                      {['1', '2', '3', '4', '5', '6', '7', '8', '8+'].map((n) => (
                        <option key={n} value={n}>
                          {n} {n === '1' ? 'personne' : 'personnes'}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-sm text-stone-300 mb-2 font-medium">
                  Message (optionnel)
                </label>
                <div className="relative">
                  <MessageSquare size={18} className="absolute left-4 top-4 text-stone-400 pointer-events-none" />
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={inputClass + ' pl-11 resize-none'}
                    placeholder="Une demande particulière ? Une occasion spéciale ?"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="mt-6 w-full flex items-center justify-center gap-2 bg-primary-500 hover:bg-primary-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-medium px-6 py-4 rounded-xl transition-all duration-300 ease-out-expo hover:scale-[1.01] hover:shadow-xl hover:shadow-primary-500/30"
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
