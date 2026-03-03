import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowDown } from 'lucide-react';

const HERO_IMG = `${import.meta.env.BASE_URL}prendas.jpg`;

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const scrollToColecciones = () => {
    document.querySelector('#colecciones')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full overflow-hidden"
      style={{ height: '100svh', minHeight: 600 }}
    >
      {/* Parallax Background */}
      <motion.div
        style={{ y: imgY }}
        className="absolute inset-0 w-full h-[120%] -top-[10%]"
      >
        <img
          src={HERO_IMG}
          alt="Bordados tradicionales de Chiapas"
          className="w-full h-full object-cover"
        />
        {/* Multi-layer overlay — dark on the left (title side) fading to transparent on the right */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to right, rgba(97,43,189,0.92) 0%, rgba(97,43,189,0.78) 30%, rgba(97,43,189,0.35) 60%, rgba(97,43,189,0.05) 100%)',
          }}
        />
        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-40"
          style={{ background: 'linear-gradient(to top, #FAF8F3, transparent)' }}
        />
      </motion.div>

      {/* Decorative vertical lines */}
      <div className="absolute left-10 top-0 bottom-0 hidden lg:flex flex-col justify-center gap-2 z-10">
        <div className="w-px h-20 bg-[#D4A034]/30" />
        <div className="w-px h-8 bg-[#D4A034]/60" />
        <div className="w-px flex-1 bg-white/10" />
      </div>

      {/* Content */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 flex flex-col justify-center h-full px-6 md:px-16 lg:px-24 max-w-7xl mx-auto"
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex items-center gap-4 mb-6"
        >
          <div className="w-12 h-px bg-[#D4A034]" />
          <span
            className="text-[#D4A034] uppercase tracking-[0.4em]"
            style={{ fontFamily: 'var(--font-sans)', fontSize: '0.65rem' }}
          >
            Chiapas, México
          </span>
        </motion.div>

        {/* Main Heading */}
        <div className="overflow-hidden mb-2">
          <motion.h1
            initial={{ y: 120 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="text-white"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(3.5rem, 10vw, 9rem)',
              fontWeight: 600,
              lineHeight: 0.9,
              letterSpacing: '-0.01em',
            }}
          >
            Arte
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-2">
          <motion.h1
            initial={{ y: 120 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(3.5rem, 10vw, 9rem)',
              fontWeight: 600,
              lineHeight: 0.9,
              letterSpacing: '-0.01em',
              color: '#D4A034',
            }}
          >
            Tejido
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-8">
          <motion.h1
            initial={{ y: 120 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-white/90"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(3.5rem, 10vw, 9rem)',
              fontWeight: 400,
              lineHeight: 0.9,
              letterSpacing: '-0.01em',
              fontStyle: 'italic',
            }}
          >
            a Mano
          </motion.h1>
        </div>

        {/* Subtitle & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.0 }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-4"
        >
          <p
            className="text-white/60 max-w-xs"
            style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: 1.7 }}
          >
            Bordados que narran siglos de historia Maya, hechos por manos que preservan la identidad de Chiapas.
          </p>
          <div className="flex items-center gap-4">
            <button
              onClick={scrollToColecciones}
              className="px-7 py-3.5 text-[#612BBD] uppercase tracking-widest cursor-pointer border-none transition-all duration-300 hover:opacity-90 active:scale-95"
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.65rem',
                letterSpacing: '0.2em',
                background: '#D4A034',
              }}
            >
              Ver Colecciones
            </button>
            <button
              onClick={() => document.querySelector('#proceso')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-white/70 hover:text-white uppercase tracking-widest cursor-pointer bg-transparent border-none transition-colors"
              style={{ fontFamily: 'var(--font-sans)', fontSize: '0.65rem', letterSpacing: '0.2em' }}
            >
              Nuestro Proceso →
            </button>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        onClick={scrollToColecciones}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/50 hover:text-white/80 transition-colors cursor-pointer bg-transparent border-none"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={18} />
        </motion.div>
      </motion.button>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-0 right-0 z-10 hidden lg:flex"
      >
        <div
          className="flex divide-x"
          style={{ borderTop: '1px solid rgba(212,160,52,0.3)', borderLeft: '1px solid rgba(212,160,52,0.3)' }}
        >
          {[
            { n: '12+', label: 'Comunidades' },
            { n: '200+', label: 'Artesanas' },
            { n: '50 años', label: 'de Tradición' },
          ].map((s) => (
            <div
              key={s.n}
              className="px-6 py-4 flex flex-col items-center"
              style={{ background: 'rgba(97,43,189,0.7)', borderColor: 'rgba(212,160,52,0.2)' }}
            >
              <span
                className="text-[#D4A034]"
                style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 600 }}
              >
                {s.n}
              </span>
              <span
                className="text-white/50 uppercase"
                style={{ fontFamily: 'var(--font-sans)', fontSize: '0.55rem', letterSpacing: '0.2em' }}
              >
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
