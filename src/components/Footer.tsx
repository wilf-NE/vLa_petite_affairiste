import { Phone, MapPin, Clock, UtensilsCrossed, Navigation } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-400 pt-20 pb-8 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 pb-12 border-b border-stone-800">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-primary-400/80 text-primary-400 font-serif text-2xl font-bold">
                L
              </span>
              <div className="leading-tight">
                <span className="block font-serif text-xl font-semibold text-white">
                  La Petite Affairiste
                </span>
                <span className="block text-xs text-primary-400 tracking-[0.25em] uppercase mt-0.5">
                  Restaurant · Libreville
                </span>
              </div>
            </div>
            <p className="mt-5 text-sm leading-relaxed max-w-xs">
              Cuisine raffinée et saveurs authentiques au cœur de Libreville.
              Ouvert tous les jours jusqu'à 23:00.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 bg-stone-900 rounded-full px-4 py-2 border border-stone-800">
              <span className="w-2 h-2 rounded-full bg-success-500 animate-pulse" />
              <span className="text-xs text-stone-300">Ouvert maintenant</span>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-white mb-5 flex items-center gap-2">
              <UtensilsCrossed size={18} className="text-primary-400" />
              Navigation
            </h3>
            <ul className="grid grid-cols-2 gap-y-2.5 gap-x-4 text-sm">
              {[
                { href: '#accueil', label: 'Accueil' },
                { href: '#apropos', label: 'À propos' },
                { href: '#menu', label: 'Notre carte' },
                { href: '#galerie', label: 'Galerie' },
                { href: '#avis', label: 'Avis' },
                { href: '#contact', label: 'Réserver' },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-primary-300 transition-colors duration-300 inline-flex items-center group">
                    <span className="w-0 h-px bg-primary-400 group-hover:w-3 transition-all duration-300 mr-0 group-hover:mr-2" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-white mb-5">
              Nous contacter
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-stone-900 flex items-center justify-center shrink-0">
                  <Phone size={15} className="text-primary-400" />
                </div>
                <a href="tel:077037413" className="hover:text-primary-300 transition-colors">
                  077 03 74 13
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-stone-900 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin size={15} className="text-primary-400" />
                </div>
                <div>
                  <p>13131, Libreville, Gabon</p>
                  <p className="text-stone-500 text-xs mt-0.5">CF3G+24 Libreville</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-stone-900 flex items-center justify-center shrink-0">
                  <Clock size={15} className="text-primary-400" />
                </div>
                <span>Ouvert · Ferme à 23:00</span>
              </li>
              <li>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=CF3G%2B24+Libreville+Gabon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors font-medium"
                >
                  <Navigation size={15} />
                  Obtenir l'itinéraire
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-stone-500">
            © {new Date().getFullYear()} La Petite Affairiste. Tous droits réservés.
          </p>
          <p className="text-xs text-stone-600">
            Conçu avec passion à Libreville
          </p>
        </div>
      </div>
    </footer>
  );
}
