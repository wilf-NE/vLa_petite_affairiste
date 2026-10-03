import { Phone, MapPin, Clock, UtensilsCrossed } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-400 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 pb-10 border-b border-stone-800">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-11 h-11 rounded-full border-2 border-primary-400 text-primary-400 font-serif text-2xl font-bold">
                L
              </span>
              <div className="leading-tight">
                <span className="block font-serif text-xl font-semibold text-white">
                  La Petite Affairiste
                </span>
                <span className="block text-xs text-primary-400 tracking-[0.2em] uppercase">
                  Restaurant · Libreville
                </span>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed">
              Cuisine raffinée et saveurs authentiques au coeur de Libreville.
              Ouvert tous les jours jusqu'à 23:00.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <UtensilsCrossed size={18} className="text-primary-400" />
              Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: '#accueil', label: 'Accueil' },
                { href: '#apropos', label: 'À propos' },
                { href: '#menu', label: 'Notre carte' },
                { href: '#galerie', label: 'Galerie' },
                { href: '#avis', label: 'Avis' },
                { href: '#contact', label: 'Réserver' },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-primary-300 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-white mb-4">
              Nous contacter
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-primary-400 shrink-0" />
                <a href="tel:077037413" className="hover:text-primary-300 transition-colors">
                  077 03 74 13
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={16} className="text-primary-400 shrink-0" />
                <span>13131, Libreville, Gabon</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={16} className="text-primary-400 shrink-0" />
                <span>Ouvert · Ferme à 23:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 text-center text-xs text-stone-500">
          <p>© {new Date().getFullYear()} La Petite Affairiste. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
