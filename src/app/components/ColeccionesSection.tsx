import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { CatalogoModal } from './CatalogoModal';

const IMG_EMBROIDERY = 'https://images.unsplash.com/photo-1768102365363-d20d185b331e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGVtYnJvaWRlcnklMjBmYWJyaWMlMjBkZXRhaWwlMjBNZXhpY28lMjBoYW5kbWFkZXxlbnwxfHx8fDE3NzI0NjUwODl8MA&ixlib=rb-4.1.0&q=80&w=1080';
const IMG_TEXTILE = 'https://images.unsplash.com/photo-1768102946689-d491066c74a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMHdvdmVuJTIwZmFicmljJTIwdGV4dHVyZSUyMHBhdHRlcm4lMjB2aWJyYW50fGVufDF8fHx8MTc3MjQ2NTA5OHww&ixlib=rb-4.1.0&q=80&w=1080';
const IMG_MARKET = 'https://images.unsplash.com/photo-1669578718654-9fb5c15942ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNZXhpY2FuJTIwbWFya2V0JTIwdGV4dGlsZSUyMGhhbmRpY3JhZnQlMjBkaXNwbGF5JTIwdmlicmFudCUyMGNvbG9yc3xlbnwxfHx8fDE3NzI0NjUwOTh8MA&ixlib=rb-4.1.0&q=80&w=1080';
const IMG_HANDS = 'https://images.unsplash.com/photo-1669393063606-7ad89a913c4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMHRleHRpbGUlMjBjcmFmdCUyMGFydGlzYW4lMjBoYW5kcyUyMGNsb3NlJTIwdXB8ZW58MXx8fHwxNzcyNDY1MDk1fDA&ixlib=rb-4.1.0&q=80&w=1080';

interface Collection {
  id: number;
  name: string;
  subtitle: string;
  description: string;
  image: string;
  accent: string;
  lightAccent: string;
  tag: string;
  price: string;
}

const collections: Collection[] = [
  {
    id: 1,
    name: 'Flores de',
    subtitle: 'San Juan',
    description: 'Bordados florales multicolores inspirados en los jardines ceremoniales de San Juan Chamula. Cada flor es bordada a mano con hilos de seda teñida con índigo natural.',
    image: IMG_EMBROIDERY,
    accent: '#B8342A',
    lightAccent: '#E8756A',
    tag: 'Más Vendida',
    price: 'Desde $680 MXN',
  },
  {
    id: 2,
    name: 'Tejidos del',
    subtitle: 'Altiplano',
    description: 'Telas de lana virgen trabajadas en telar de cintura, con geometrías mayas que representan el cosmos y la cosmovisión tzotzil de los Altos de Chiapas.',
    image: IMG_TEXTILE,
    accent: '#1B4B6D',
    lightAccent: '#6BAED6',
    tag: 'Nueva Colección',
    price: 'Desde $1,200 MXN',
  },
  {
    id: 3,
    name: 'Mercado de',
    subtitle: 'Colores',
    description: 'Blusas, manteles y accesorios festivos con bordados que capturan la paleta viva de los mercados indígenas: rojo cochinilla, azul añil y amarillo cempasúchil.',
    image: IMG_MARKET,
    accent: '#2D5D3F',
    lightAccent: '#6BBF87',
    tag: 'Edición Limitada',
    price: 'Desde $450 MXN',
  },
  {
    id: 4,
    name: 'Manos que',
    subtitle: 'Crean',
    description: 'Piezas únicas de colección realizadas por maestras artesanas con más de 30 años de experiencia. Incluye certificado de autenticidad y ficha de la artesana.',
    image: IMG_HANDS,
    accent: '#D4A034',
    lightAccent: '#E8C46A',
    tag: 'Edición Especial',
    price: 'Desde $2,500 MXN',
  },
];

function CollectionCard({ col, index }: { col: Collection; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative flex flex-col overflow-hidden cursor-pointer"
      style={{ background: '#612BBD' }}
    >
      {/* Image */}
      <div className="relative overflow-hidden" style={{ height: 'clamp(260px, 35vw, 380px)' }}>
        <motion.img
          src={col.image}
          alt={col.name + ' ' + col.subtitle}
          className="w-full h-full object-cover"
          animate={{ scale: hovered ? 1.06 : 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.div
          className="absolute inset-0"
          animate={{ opacity: hovered ? 0.5 : 0.25 }}
          transition={{ duration: 0.4 }}
          style={{ background: `linear-gradient(to top, ${col.accent}CC 0%, transparent 60%)` }}
        />
        {/* Tag */}
        <div
          className="absolute top-4 left-4 px-3 py-1"
          style={{ background: col.accent }}
        >
          <span
            className="text-white uppercase tracking-widest"
            style={{ fontFamily: 'var(--font-sans)', fontSize: '0.55rem', letterSpacing: '0.2em' }}
          >
            {col.tag}
          </span>
        </div>
        {/* Arrow */}
        <motion.div
          className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center"
          animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.7 }}
          transition={{ duration: 0.3 }}
          style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)' }}
        >
          <ArrowUpRight size={16} className="text-white" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1" style={{ borderTop: `2px solid ${col.accent}` }}>
        <h3
          className="text-white"
          style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 600, lineHeight: 1.1 }}
        >
          {col.name}
        </h3>
        <h3
          style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 400, lineHeight: 1.1, color: col.lightAccent, fontStyle: 'italic' }}
        >
          {col.subtitle}
        </h3>

        <motion.p
          className="mt-4 text-white/90"
          animate={{ opacity: hovered ? 1 : 0.85 }}
          transition={{ duration: 0.3 }}
          style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', lineHeight: 1.8 }}
        >
          {col.description}
        </motion.p>

        <div className="mt-6 flex items-center justify-between">
          <span
            style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', color: '#FAF8F3', fontWeight: 600 }}
          >
            {col.price}
          </span>
          <motion.button
            whileHover={{ gap: '10px' }}
            className="flex items-center gap-2 text-white/70 hover:text-white bg-transparent border-none cursor-pointer transition-colors"
            style={{ fontFamily: 'var(--font-sans)', fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}
          >
            <span>Ver Colección</span>
            <ArrowUpRight size={12} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

export function ColeccionesSection() {
  const [catalogoOpen, setCatalogoOpen] = useState(false);

  return (
    <>
    <CatalogoModal open={catalogoOpen} onClose={() => setCatalogoOpen(false)} />
    <section id="colecciones" style={{ background: '#FAF8F3', padding: 'clamp(80px, 12vw, 140px) 0' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-5"
            >
              <div className="w-10 h-px bg-[#B8342A]" />
              <span
                className="text-[#B8342A] uppercase tracking-[0.35em]"
                style={{ fontFamily: 'var(--font-sans)', fontSize: '0.6rem' }}
              >
                Nuestras Piezas
              </span>
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
                  lineHeight: 1,
                  color: '#612BBD',
                }}
              >
                Colecciones
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
                  lineHeight: 1,
                  color: '#B8342A',
                }}
              >
                Artesanales
              </motion.h2>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-[#4A3728]/70 max-w-xs text-right hidden md:block"
            style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', lineHeight: 1.8 }}
          >
            Cada pieza es certificada y proviene directamente de cooperativas de artesanas chiapanecas.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.map((col, i) => (
            <CollectionCard key={col.id} col={col} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-14 flex justify-center"
        >
          <button
            onClick={() => setCatalogoOpen(true)}
            className="px-10 py-4 border-2 border-[#612BBD] text-[#612BBD] hover:bg-[#612BBD] hover:text-[#FAF8F3] transition-all duration-400 uppercase tracking-widest cursor-pointer"
            style={{ fontFamily: 'var(--font-sans)', fontSize: '0.65rem', letterSpacing: '0.2em' }}
          >
            Ver Catálogo Completo
          </button>
        </motion.div>
      </div>
    </section>
    </>  
  );
}
