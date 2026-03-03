import { motion } from 'motion/react';
import { Instagram, Facebook, ArrowUp } from 'lucide-react';

const footerLinks = {
  colecciones: [
    'Flores de San Juan',
    'Tejidos del Altiplano',
    'Mercado de Colores',
    'Manos que Crean',
    'Ver Catálogo',
  ],
  empresa: [
    'Nuestra Historia',
    'Las Artesanas',
    'Proceso Artesanal',
    'Comercio Justo',
    'Blog',
  ],
  soporte: [
    'Cómo Comprar',
    'Envíos a México',
    'Envíos Internacionales',
    'Devoluciones',
    'Cuidado de Textiles',
  ],
};

export function FooterSection() {
  return (
    <footer style={{ background: '#0D0604', borderTop: '1px solid rgba(212,160,52,0.1)' }}>
      {/* Top CTA banner */}
      <div
        className="py-12 px-6 md:px-16 text-center"
        style={{ borderBottom: '1px solid rgba(212,160,52,0.1)' }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <p
            className="text-white/40 uppercase tracking-[0.35em] mb-3"
            style={{ fontFamily: 'var(--font-sans)', fontSize: '0.6rem' }}
          >
            ¿Nuevo en Textiles Chiapas?
          </p>
          <h3
            className="text-white mb-6"
            style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 500, lineHeight: 1.2 }}
          >
            Descubre el arte que cambia vidas
          </h3>
          <button
            onClick={() => document.querySelector('#colecciones')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 uppercase tracking-widest cursor-pointer border-none transition-all duration-300 hover:opacity-90"
            style={{
              background: '#D4A034',
              color: '#590C8A',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.62rem',
              letterSpacing: '0.2em',
            }}
          >
            Explorar Colecciones
          </button>
        </motion.div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <span
                className="text-white/50 tracking-[0.3em] uppercase block"
                style={{ fontFamily: 'var(--font-sans)', fontSize: '0.6rem' }}
              >
                Textiles
              </span>
              <span
                className="text-[#D4A034]"
                style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', fontWeight: 600 }}
              >
                Chiapas
              </span>
            </div>
            <p
              className="text-white/40 mb-8"
              style={{ fontFamily: 'var(--font-body)', fontSize: '0.88rem', lineHeight: 1.9, maxWidth: 280 }}
            >
              Arte textil indígena de los Altos de Chiapas. Bordados a mano que preservan la cultura Maya Tzotzil y Tzeltal para el mundo.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: Instagram, label: '@textiles.chiapas' },
                { Icon: Facebook, label: 'Textiles Chiapas Mx' },
              ].map(({ Icon, label }) => (
                <button
                  key={label}
                  className="w-9 h-9 flex items-center justify-center text-white/40 hover:text-[#D4A034] border border-white/10 hover:border-[#D4A034]/30 transition-all duration-300 bg-transparent cursor-pointer"
                >
                  <Icon size={14} />
                </button>
              ))}
            </div>
          </div>

          {/* Links */}
          {[
            { title: 'Colecciones', links: footerLinks.colecciones },
            { title: 'Nosotros', links: footerLinks.empresa },
            { title: 'Ayuda', links: footerLinks.soporte },
          ].map((col) => (
            <div key={col.title}>
              <p
                className="text-white/70 mb-5 uppercase tracking-[0.25em]"
                style={{ fontFamily: 'var(--font-sans)', fontSize: '0.6rem', letterSpacing: '0.22em' }}
              >
                {col.title}
              </p>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <button
                      className="text-white/35 hover:text-white/80 transition-colors bg-transparent border-none cursor-pointer p-0 text-left"
                      style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem' }}
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div
          className="mt-14 pt-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
          style={{ borderTop: '1px solid rgba(212,160,52,0.1)' }}
        >
          <div>
            <p
              className="text-white/70 uppercase tracking-widest mb-1"
              style={{ fontFamily: 'var(--font-sans)', fontSize: '0.58rem', letterSpacing: '0.22em' }}
            >
              Suscríbete al Boletín
            </p>
            <p
              className="text-white/35"
              style={{ fontFamily: 'var(--font-body)', fontSize: '0.82rem' }}
            >
              Nuevas colecciones, historias y eventos de artesanas
            </p>
          </div>
          <div className="flex w-full md:w-auto">
            <input
              type="email"
              placeholder="tu@correo.mx"
              className="px-4 py-3 flex-1 md:w-56 text-white/80 placeholder-white/25 outline-none"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(212,160,52,0.2)',
                borderRight: 'none',
                fontFamily: 'var(--font-body)',
                fontSize: '0.85rem',
              }}
            />
            <button
              className="px-5 py-3 uppercase tracking-widest cursor-pointer border-none"
              style={{
                background: '#D4A034',
                color: '#590C8A',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.58rem',
                letterSpacing: '0.18em',
              }}
            >
              Unirse
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
        >
          <p
            className="text-white/25"
            style={{ fontFamily: 'var(--font-sans)', fontSize: '0.7rem' }}
          >
            © 2026 Textiles Chiapas · Todos los derechos reservados · Hecho con ♥ en Chiapas, México
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-9 h-9 flex items-center justify-center text-white/40 hover:text-[#D4A034] border border-white/10 hover:border-[#D4A034]/30 transition-all duration-300 bg-transparent cursor-pointer"
          >
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
