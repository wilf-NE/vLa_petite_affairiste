import { useEffect, useState } from 'react';
import { Menu, X, Phone, UtensilsCrossed } from 'lucide-react';

const links = [
  { href: '#accueil', label: 'Accueil' },
  { href: '#apropos', label: 'À propos' },
  { href: '#menu', label: 'Menu' },
  { href: '#galerie', label: 'Galerie' },
  { href: '#avis', label: 'Avis' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('accueil');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = links.map((l) => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = () => setOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out-expo ${
        scrolled
          ? 'bg-stone-950/95 backdrop-blur-xl py-3 shadow-2xl shadow-black/30 border-b border-white/5'
          : 'bg-gradient-to-b from-stone-950/40 to-transparent py-5'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#accueil" className="flex items-center gap-3 group" onClick={handleClick} aria-label="La Petite Affairiste - Accueil">
          <span className="flex items-center justify-center w-11 h-11 rounded-full border-2 border-primary-400/80 text-primary-400 font-serif text-2xl font-bold transition-all duration-500 ease-out-expo group-hover:scale-110 group-hover:border-primary-300 group-hover:shadow-lg group-hover:shadow-primary-500/20">
            L
          </span>
          <div className="leading-tight">
            <span className="block font-serif text-lg sm:text-xl font-semibold text-white tracking-wide">
              La Petite Affairiste
            </span>
            <span className="block text-[10px] sm:text-xs text-primary-300/90 tracking-[0.25em] uppercase">
              Restaurant · Libreville
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {links.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-full ${
                    isActive ? 'text-primary-300' : 'text-stone-200 hover:text-white'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0.5 left-1/2 -translate-x-1/2 h-px bg-primary-400 transition-all duration-400 ease-out-expo ${
                      isActive ? 'w-6 opacity-100' : 'w-0 opacity-0'
                    }`}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <a
          href="tel:077037413"
          className="hidden lg:flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white text-sm font-medium px-5 py-2.5 rounded-full transition-all duration-300 ease-out-expo hover:scale-105 hover:shadow-xl hover:shadow-primary-500/30"
        >
          <Phone size={15} />
          077 03 74 13
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-out-expo ${
          open ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="bg-stone-950/98 backdrop-blur-xl px-6 py-6 flex flex-col gap-2 border-t border-white/5 mt-3">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={handleClick}
                className="flex items-center gap-3 text-stone-200 hover:text-primary-300 hover:bg-white/5 text-lg font-medium transition-all duration-300 px-4 py-3 rounded-xl"
              >
                <UtensilsCrossed size={16} className="text-primary-400/50" />
                {link.label}
              </a>
            </li>
          ))}
          <li className="mt-2">
            <a
              href="tel:077037413"
              onClick={handleClick}
              className="flex items-center gap-2 bg-primary-500 text-white font-medium px-5 py-3.5 rounded-full justify-center"
            >
              <Phone size={16} />
              077 03 74 13
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
