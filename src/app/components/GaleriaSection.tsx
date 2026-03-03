import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ZoomIn } from 'lucide-react';

const IMG1 = 'https://images.unsplash.com/photo-1562869929-bda0650edb1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDaGlhcGFzJTIwdGV4dGlsZSUyMGVtYnJvaWRlcnklMjBjb2xvcmZ1bCUyME1leGljYW58ZW58MXx8fHwxNzcyNDY1MDg4fDA&ixlib=rb-4.1.0&q=80&w=1080';
const IMG2 = 'https://images.unsplash.com/photo-1768102365363-d20d185b331e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGVtYnJvaWRlcnklMjBmYWJyaWMlMjBkZXRhaWwlMjBNZXhpY28lMjBoYW5kbWFkZXxlbnwxfHx8fDE3NzI0NjUwODl8MA&ixlib=rb-4.1.0&q=80&w=1080';
const IMG3 = 'https://images.unsplash.com/photo-1763733593267-c0fb2051d73a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNZXhpY2FuJTIwaW5kaWdlbm91cyUyMHdvbWFuJTIwd2VhdmluZyUyMHRyYWRpdGlvbmFsJTIwbG9vbXxlbnwxfHx8fDE3NzI0NjUwOTF8MA&ixlib=rb-4.1.0&q=80&w=1080';
const IMG4 = 'https://images.unsplash.com/photo-1669393063606-7ad89a913c4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMHRleHRpbGUlMjBjcmFmdCUyMGFydGlzYW4lMjBoYW5kcyUyMGNsb3NlJTIwdXB8ZW58MXx8fHwxNzcyNDY1MDk1fDA&ixlib=rb-4.1.0&q=80&w=1080';
const IMG5 = 'https://images.unsplash.com/photo-1768102946689-d491066c74a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMHdvdmVuJTIwZmFicmljJTIwdGV4dHVyZSUyMHBhdHRlcm4lMjB2aWJyYW50fGVufDF8fHx8MTc3MjQ2NTA5OHww&ixlib=rb-4.1.0&q=80&w=1080';
const IMG6 = 'https://images.unsplash.com/photo-1675438451024-2f9634ede383?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbWJyb2lkZXJ5JTIwdGhyZWFkJTIwbmVlZGxlJTIwZmxvd2VyJTIwcGF0dGVybiUyMGNsb3NlJTIwZGV0YWlsfGVufDF8fHx8MTc3MjQ2NTEwNXww&ixlib=rb-4.1.0&q=80&w=1080';

const images = [
  { src: IMG1, caption: 'Bordados tradicionales de Chiapas', span: 'col-span-1 row-span-2' },
  { src: IMG2, caption: 'Detalle de bordado floral a mano', span: 'col-span-1 row-span-1' },
  { src: IMG3, caption: 'Artesana en telar de cintura', span: 'col-span-1 row-span-1' },
  { src: IMG4, caption: 'Manos bordando hilo de seda', span: 'col-span-1 row-span-1' },
  { src: IMG5, caption: 'Tejidos de lana con diseños mayas', span: 'col-span-1 row-span-1' },
  { src: IMG6, caption: 'Hilos naturales teñidos con índigo', span: 'col-span-1 row-span-1' },
];

export function GaleriaSection() {
  const [lightbox, setLightbox] = useState<null | typeof images[0]>(null);

  return (
    <section
      id="galeria"
      style={{ background: '#FAF8F3', padding: 'clamp(80px, 10vw, 120px) 0' }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-5"
          >
            <div className="w-8 h-px bg-[#B8342A]" />
            <span
              className="text-[#B8342A] uppercase tracking-[0.35em]"
              style={{ fontFamily: 'var(--font-sans)', fontSize: '0.6rem' }}
            >
              Portfolio Visual
            </span>
            <div className="w-8 h-px bg-[#B8342A]" />
          </motion.div>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: '100%' }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)',
                fontWeight: 600,
                color: '#590C8A',
                lineHeight: 1,
              }}
            >
              Galería de
            </motion.h2>
          </div>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: '100%' }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)',
                fontWeight: 400,
                fontStyle: 'italic',
                color: '#B8342A',
                lineHeight: 1,
              }}
            >
              Bordados
            </motion.h2>
          </div>
        </div>

        {/* Asymmetric grid */}
        <div
          className="grid gap-4"
          style={{
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridTemplateRows: 'auto',
          }}
        >
          {/* Large left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden group cursor-pointer"
            style={{ gridColumn: '1', gridRow: '1 / 3', height: 'auto', minHeight: 420 }}
            onClick={() => setLightbox(images[0])}
          >
            <img src={images[0].src} alt={images[0].caption} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-[#590C8A]/0 group-hover:bg-[#590C8A]/40 transition-all duration-400 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileHover={{ opacity: 1, scale: 1 }}
                className="opacity-0 group-hover:opacity-100"
              >
                <ZoomIn className="text-white" size={32} />
              </motion.div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300" style={{ background: 'rgba(89,12,138,0.8)' }}>
              <p className="text-white/80" style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem' }}>{images[0].caption}</p>
            </div>
          </motion.div>

          {/* Right 2x2 grid */}
          {images.slice(1).map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: (i + 1) * 0.08 }}
              className="relative overflow-hidden group cursor-pointer"
              style={{ minHeight: 200 }}
              onClick={() => setLightbox(img)}
            >
              <img src={img.src} alt={img.caption} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-[#590C8A]/0 group-hover:bg-[#590C8A]/40 transition-all duration-400 flex items-center justify-center">
                <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={24} />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300" style={{ background: 'rgba(89,12,138,0.8)' }}>
                <p className="text-white/80" style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem' }}>{img.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10"
            style={{ background: 'rgba(89,12,138,0.95)' }}
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightbox.src}
                alt={lightbox.caption}
                className="w-full object-contain max-h-[80vh]"
                style={{ border: '1px solid rgba(212,160,52,0.2)' }}
              />
              <p
                className="text-white/60 mt-3 text-center"
                style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem' }}
              >
                {lightbox.caption}
              </p>
              <button
                className="absolute -top-3 -right-3 w-10 h-10 flex items-center justify-center bg-[#B8342A] text-white rounded-none"
                onClick={() => setLightbox(null)}
              >
                <X size={18} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
