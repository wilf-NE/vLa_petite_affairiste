import { Clock, MapPin, Star, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/28736727/pexels-photo-28736727.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1800"
          alt="Chef servant des plats traditionnels"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/70 via-stone-950/50 to-stone-950/80" />
        <div className="absolute inset-0 bg-grain" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="animate-fade-in inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-8">
          <Star size={16} className="text-primary-300 fill-primary-300" />
          <span className="text-sm text-stone-100 font-medium">4,5 / 5 — Avis Google</span>
        </div>

        <h1 className="animate-fade-up font-serif text-5xl sm:text-6xl lg:text-7xl text-white font-bold leading-[1.1] text-shadow-lg">
          La Petite
          <span className="block text-primary-300 italic">Affairiste</span>
        </h1>

        <p className="animate-fade-in-delayed mt-6 text-lg sm:text-xl text-stone-200 max-w-2xl mx-auto leading-relaxed">
          Cuisine raffinée et saveurs authentiques au coeur de Libreville.
          Une expérience culinaire inoubliable, dans une ambiance chaleureuse et conviviale.
        </p>

        <div className="animate-fade-in-delayed-2 mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#menu"
            className="bg-primary-500 hover:bg-primary-600 text-white font-medium px-8 py-4 rounded-full transition-all hover:scale-105 hover:shadow-xl hover:shadow-primary-500/40"
          >
            Découvrir le menu
          </a>
          <a
            href="#contact"
            className="bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/20 text-white font-medium px-8 py-4 rounded-full transition-all hover:scale-105"
          >
            Réserver une table
          </a>
        </div>

        {/* Info badges */}
        <div className="animate-fade-in-delayed-2 mt-14 flex flex-wrap items-center justify-center gap-6 text-stone-200">
          <div className="flex items-center gap-2 text-sm">
            <Clock size={18} className="text-primary-300" />
            <span>Ouvert · Ferme à 23:00</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <MapPin size={18} className="text-primary-300" />
            <span>13131, Libreville</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#apropos"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors"
        aria-label="Défiler vers le bas"
      >
        <ChevronDown size={32} className="animate-bounce" />
      </a>
    </section>
  );
}
