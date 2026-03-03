import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Colecciones', href: '#colecciones' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Artesanas', href: '#artesanas' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Contacto', href: '#contacto' },
];

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled
            ? 'rgba(89,12,138, 0.92)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(212, 160, 52, 0.2)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="flex flex-col leading-none group"
          >
            <span
              className="text-white tracking-[0.25em] uppercase text-xs"
              style={{ fontFamily: 'var(--font-sans)', letterSpacing: '0.3em' }}
            >
              Textiles
            </span>
            <span
              className="text-[#D4A034] tracking-wide"
              style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 600 }}
            >
              Chiapas
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-white/80 hover:text-[#D4A034] transition-colors duration-300 tracking-widest uppercase cursor-pointer bg-transparent border-none"
                style={{ fontFamily: 'var(--font-sans)', fontSize: '0.7rem', letterSpacing: '0.18em' }}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <button
              onClick={() => handleNavClick('#contacto')}
              className="px-6 py-2.5 border border-[#D4A034] text-[#D4A034] hover:bg-[#D4A034] hover:text-[#590C8A] transition-all duration-300 tracking-widest uppercase cursor-pointer"
              style={{ fontFamily: 'var(--font-sans)', fontSize: '0.65rem', letterSpacing: '0.18em' }}
            >
              Comprar
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col justify-center items-center"
            style={{ background: 'rgba(89,12,138, 0.97)' }}
          >
            <div className="flex flex-col gap-8 items-center">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                  onClick={() => handleNavClick(link.href)}
                  className="text-white/90 hover:text-[#D4A034] transition-colors uppercase tracking-widest text-sm bg-transparent border-none cursor-pointer"
                  style={{ fontFamily: 'var(--font-sans)', letterSpacing: '0.25em' }}
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                onClick={() => handleNavClick('#contacto')}
                className="mt-4 px-8 py-3 border border-[#D4A034] text-[#D4A034] uppercase tracking-widest text-xs cursor-pointer"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                Comprar
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
