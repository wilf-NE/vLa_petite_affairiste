import { Clock, MapPin, Star, ChevronDown, UtensilsCrossed } from 'lucide-react';

export default function Hero() {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with parallax feel */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1800"
          alt="Salle de restaurant élégante avec table dressée et lumières tamisées"
          className="w-full h-full object-cover scale-105"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/80 via-stone-950/50 to-stone-950/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/40 via-transparent to-stone-950/40" />
        <div className="absolute inset-0 bg-grain" />
      </div>

      {/* Decorative floating orbs */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-secondary-500/8 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Rating badge */}
        <div className="animate-fade-in inline-flex items-center gap-2.5 glass rounded-full px-5 py-2.5 mb-8">
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={14} className={i < 4 ? 'text-primary-300 fill-primary-300' : 'text-primary-300/40 fill-primary-300/40'} />
            ))}
          </div>
          <span className="text-sm text-stone-100 font-medium tracking-wide">4,5 / 5 — Avis Google</span>
        </div>

        {/* Title with refined typography */}
        <p className="animate-fade-in-delayed text-primary-300 tracking-[0.3em] uppercase text-xs sm:text-sm font-medium mb-4">
          <UtensilsCrossed size={14} className="inline mr-2 -mt-1" />
          Restaurant à Libreville
        </p>

        <h1 className="animate-fade-up font-serif text-5xl sm:text-6xl lg:text-8xl text-white font-bold leading-[1.05] text-shadow-lg">
          La Petite
          <span className="block text-primary-300 italic font-medium mt-1">Affairiste</span>
        </h1>

        {/* Divider */}
        <div className="animate-fade-in-delayed flex items-center justify-center gap-4 mt-8">
          <span className="h-px w-12 bg-primary-400/50" />
          <span className="w-2 h-2 rounded-full bg-primary-400/60" />
          <span className="h-px w-12 bg-primary-400/50" />
        </div>

        <p className="animate-fade-in-delayed mt-8 text-lg sm:text-xl text-stone-200 max-w-2xl mx-auto leading-relaxed font-light">
          Cuisine raffinée et saveurs authentiques au cœur de Libreville.
          Une expérience culinaire inoubliable, dans une ambiance chaleureuse et conviviale.
        </p>

        {/* CTAs */}
        <div className="animate-fade-in-delayed-2 mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#menu"
            className="group bg-primary-500 hover:bg-primary-600 text-white font-medium px-8 py-4 rounded-full transition-all duration-300 ease-out-expo hover:scale-105 hover:shadow-2xl hover:shadow-primary-500/40 flex items-center gap-2"
          >
            Découvrir le menu
            <ChevronDown size={18} className="group-hover:translate-y-0.5 transition-transform" />
          </a>
          <a
            href="#contact"
            className="glass hover:bg-white/20 text-white font-medium px-8 py-4 rounded-full transition-all duration-300 ease-out-expo hover:scale-105"
          >
            Réserver une table
          </a>
        </div>

        {/* Info badges */}
        <div className="animate-fade-in-delayed-2 mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-stone-200">
          <div className="flex items-center gap-2 text-sm">
            <span className="w-2 h-2 rounded-full bg-success-500 animate-pulse" />
            <Clock size={16} className="text-primary-300" />
            <span>Ouvert · Ferme à 23:00</span>
          </div>
          <span className="hidden sm:block w-px h-4 bg-stone-600" />
          <div className="flex items-center gap-2 text-sm">
            <MapPin size={16} className="text-primary-300" />
            <span>13131, Libreville</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#apropos"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 hover:text-white/80 transition-colors duration-300"
        aria-label="Défiler vers le bas"
      >
        <ChevronDown size={28} className="animate-bounce" />
      </a>
    </section>
  );
}
