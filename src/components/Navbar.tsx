import { useEffect, useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = () => setOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-stone-950/95 backdrop-blur-md py-3 shadow-lg shadow-black/20'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#accueil" className="flex items-center gap-3 group" onClick={handleClick}>
          <span className="flex items-center justify-center w-11 h-11 rounded-full border-2 border-primary-400 text-primary-400 font-serif text-2xl font-bold transition-transform group-hover:scale-110">
            L
          </span>
          <div className="leading-tight">
            <span className="block font-serif text-xl font-semibold text-white tracking-wide">
              La Petite Affairiste
            </span>
            <span className="block text-xs text-primary-300 tracking-[0.2em] uppercase">
              Restaurant · Libreville
            </span>
          </div>
        </a>

        <ul className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-stone-200 hover:text-primary-300 transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-px after:bg-primary-400 after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="tel:077037413"
          className="hidden lg:flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white text-sm font-medium px-5 py-2.5 rounded-full transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary-500/30"
        >
          <Phone size={16} />
          077 03 74 13
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-white p-2"
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          open ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="bg-stone-950/98 backdrop-blur-md px-6 py-6 flex flex-col gap-4">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={handleClick}
                className="block text-stone-200 hover:text-primary-300 text-lg font-medium transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="tel:077037413"
              onClick={handleClick}
              className="flex items-center gap-2 bg-primary-500 text-white font-medium px-5 py-3 rounded-full justify-center"
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
