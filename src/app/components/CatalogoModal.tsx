import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowUpRight, ChevronLeft } from 'lucide-react';

/* ─── Images (reuse existing + unsplash variations) ──────────────── */
const IMG_A = 'https://images.unsplash.com/photo-1768102365363-d20d185b331e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800';
const IMG_B = 'https://images.unsplash.com/photo-1768102946689-d491066c74a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800';
const IMG_C = 'https://images.unsplash.com/photo-1669578718654-9fb5c15942ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800';
const IMG_D = 'https://images.unsplash.com/photo-1669393063606-7ad89a913c4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800';

/* ─── Data ─────────────────────────────────────────────────────────── */
export type Categoria = 'Todos' | 'Blusas' | 'Huipiles' | 'Textiles' | 'Accesorios';

export interface Prenda {
  id: number;
  nombre: string;
  artesana: string;
  comunidad: string;
  categoria: Exclude<Categoria, 'Todos'>;
  precio: string;
  precioNum: number;
  descripcion: string;
  detalle: string;
  imagen: string;
  tag?: string;
  accent: string;
  horas: string;
}

const prendas: Prenda[] = [
  {
    id: 1,
    nombre: 'Blusa Floral Zinacantán',
    artesana: 'María Hernández',
    comunidad: 'Zinacantán, Chiapas',
    categoria: 'Blusas',
    precio: '$680 MXN',
    precioNum: 680,
    descripcion: 'Blusa de manta con bordado floral multicolor realizado a mano con hilos de seda teñida con índigo natural.',
    detalle: 'Tela de manta 100% algodón. Bordado en punto de cruz y relleno con hilos de seda. Lavado a mano en agua fría. Talla única con ajuste por cintas.',
    imagen: IMG_A,
    tag: 'Más Vendida',
    accent: '#B8342A',
    horas: '160 horas',
  },
  {
    id: 2,
    nombre: 'Blusa Rombos Chamula',
    artesana: 'Juana López',
    comunidad: 'San Juan Chamula, Chiapas',
    categoria: 'Blusas',
    precio: '$750 MXN',
    precioNum: 750,
    descripcion: 'Blusa con diseño geométrico en rombos, representando la cosmovisión tzotzil. Color base blanco hueso con bordado en rojo cochinilla.',
    detalle: 'Manta de algodón orgánico. Bordado en lana con colorantes naturales: cochinilla para rojos. Escote redondo con detalles bordados.',
    imagen: IMG_B,
    accent: '#B8342A',
    horas: '140 horas',
  },
  {
    id: 3,
    nombre: 'Blusa Premium Laurel',
    artesana: 'Rosa Pérez',
    comunidad: 'Tenejapa, Chiapas',
    categoria: 'Blusas',
    precio: '$980 MXN',
    precioNum: 980,
    descripcion: 'Pieza de alta costura artesanal con bordado de laurel y mariposas. Hilos de seda pura en tonos verdes, azules y dorados.',
    detalle: 'Manta premium de algodón egipcio. Hilos de seda 100% natural. 200+ horas de trabajo. Incluye certificado de autenticidad.',
    imagen: IMG_C,
    tag: 'Premium',
    accent: '#2D5D3F',
    horas: '210 horas',
  },
  {
    id: 4,
    nombre: 'Huipil Ceremonial',
    artesana: 'Antonia Gómez',
    comunidad: 'Zinacantán, Chiapas',
    categoria: 'Huipiles',
    precio: '$2,800 MXN',
    precioNum: 2800,
    descripcion: 'Huipil tradicional usado en ceremonias. Tejido en telar de cintura con diseños que narran el calendario maya y la cosmovisión ancestral.',
    detalle: 'Lana virgen de oveja. Telar de cintura. Diseños ancestrales heredados por generaciones. Incluye ficha artesana y certificado. Pieza única.',
    imagen: IMG_D,
    tag: 'Edición Única',
    accent: '#D4A034',
    horas: '320 horas',
  },
  {
    id: 5,
    nombre: 'Huipil Cotidiano',
    artesana: 'Lucía Ruiz',
    comunidad: 'Amatenango del Valle',
    categoria: 'Huipiles',
    precio: '$1,400 MXN',
    precioNum: 1400,
    descripcion: 'Huipil de uso cotidiano con bordado de flores y aves. Representa el paisaje natural de Chiapas. Diseño tradicional con toques contemporáneos.',
    detalle: 'Algodón con mezcla de seda. Bordado a mano punto de cruz. Lavado suave a mano. Talla M-L ajustable.',
    imagen: IMG_A,
    accent: '#1B4B6D',
    horas: '180 horas',
  },
  {
    id: 6,
    nombre: 'Mantel Bordado Grande',
    artesana: 'Esperanza Díaz',
    comunidad: 'Venustiano Carranza',
    categoria: 'Textiles',
    precio: '$1,200 MXN',
    precioNum: 1200,
    descripcion: 'Mantel de 1.8m x 1.2m con bordado perimetral de flores y hojas. Ideal para mesa de 6-8 personas. Colores vivos en hilo de algodón.',
    detalle: 'Lino mexicano 100%. Bordado perimetral a mano. Medidas: 180cm x 120cm. Lavado a mano o ciclo delicado. No centrifugar.',
    imagen: IMG_B,
    tag: 'Nueva Colección',
    accent: '#2D5D3F',
    horas: '90 horas',
  },
  {
    id: 7,
    nombre: 'Camino de Mesa',
    artesana: 'Concepción Morales',
    comunidad: 'Chiapa de Corzo',
    categoria: 'Textiles',
    precio: '$580 MXN',
    precioNum: 580,
    descripcion: 'Camino de mesa tejido en telar con diseño geométrico en colores tierra. Perfecto para decoración rústica o contemporánea.',
    detalle: 'Algodón e hilo natural. Tejido en telar manual. Medidas: 40cm x 150cm. Lavado suave.',
    imagen: IMG_C,
    accent: '#B8342A',
    horas: '45 horas',
  },
  {
    id: 8,
    nombre: 'Tapete de Lana',
    artesana: 'Micaela Sánchez',
    comunidad: 'Zinacantán, Chiapas',
    categoria: 'Textiles',
    precio: '$1,900 MXN',
    precioNum: 1900,
    descripcion: 'Tapete artesanal tejido con lana virgen y colorantes naturales. Diseño de rombos y espirales maya. Para interiores, sin tráfico pesado.',
    detalle: 'Lana virgen de oveja. Colorantes naturales: añil, cochinilla, cúrcuma. Medidas: 60cm x 90cm. Limpieza en seco recomendada.',
    imagen: IMG_D,
    tag: 'Edición Limitada',
    accent: '#D4A034',
    horas: '120 horas',
  },
  {
    id: 9,
    nombre: 'Bolsa Bordada',
    artesana: 'Teresa Vázquez',
    comunidad: 'San Cristóbal de las Casas',
    categoria: 'Accesorios',
    precio: '$420 MXN',
    precioNum: 420,
    descripcion: 'Bolsa de manta con bordado floral en el frente. Asa de mecate trenzado. Capacidad media, ideal para mercado o uso cotidiano.',
    detalle: 'Manta de algodón grueso. Bordado floral a mano. Forro interior de tela. Asa de mecate natural. 30cm x 25cm.',
    imagen: IMG_A,
    accent: '#B8342A',
    horas: '60 horas',
  },
  {
    id: 10,
    nombre: 'Cinturón Tejido',
    artesana: 'Felipa Cruz',
    comunidad: 'Chamula, Chiapas',
    categoria: 'Accesorios',
    precio: '$350 MXN',
    precioNum: 350,
    descripcion: 'Cinturón tejido en telar de cintura con diseño de serpiente emplumada. Cierre con nudo tradicional. Largo ajustable.',
    detalle: 'Algodón teñido con colorantes naturales. Largo: 120cm. Ancho: 8cm. Tejido en telar de cintura. Nudo tradicional.',
    imagen: IMG_B,
    accent: '#1B4B6D',
    horas: '30 horas',
  },
  {
    id: 11,
    nombre: 'Set Servilletas x6',
    artesana: 'Isabel Jiménez',
    comunidad: 'Socoltenango, Chiapas',
    categoria: 'Textiles',
    precio: '$680 MXN',
    precioNum: 680,
    descripcion: 'Set de 6 servilletas de algodón bordadas a mano. Cada una con un diseño floral distinto. Perfectas para regalar o coleccionar.',
    detalle: 'Algodón 100% natural. Bordado punto de cruz. Medida: 35cm x 35cm c/u. Lavado a mano. 6 diseños únicos.',
    imagen: IMG_C,
    accent: '#2D5D3F',
    horas: '12 horas c/u',
  },
  {
    id: 12,
    nombre: 'Aretes Bordados',
    artesana: 'Guadalupe Méndez',
    comunidad: 'Larráinzar, Chiapas',
    categoria: 'Accesorios',
    precio: '$180 MXN',
    precioNum: 180,
    descripcion: 'Aretes de tela bordada con diseño de flores miniatura. Marco de metal dorado hipoalergénico. Ligeros y coloridos.',
    detalle: 'Base de fieltro artesanal. Bordado a mano con hilos de seda. Marco de metal dorado. Largo: 5cm. Peso: 3g.',
    imagen: IMG_D,
    tag: 'Nuevo',
    accent: '#D4A034',
    horas: '8 horas',
  },
];

const categorias: Categoria[] = ['Todos', 'Blusas', 'Huipiles', 'Textiles', 'Accesorios'];

/* ─── Product Card ──────────────────────────────────────────────────── */
function ProductCard({ prenda, onClick }: { prenda: Prenda; onClick: () => void }) {
  const [hov, setHov] = useState(false);
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 12 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="group cursor-pointer flex flex-col"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      onClick={onClick}
    >
      {/* Image */}
      <div className="relative overflow-hidden bg-[#F5F1E8]" style={{ aspectRatio: '3/4' }}>
        <motion.img
          src={prenda.imagen}
          alt={prenda.nombre}
          className="w-full h-full object-cover"
          animate={{ scale: hov ? 1.06 : 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        />
        {/* Gradient overlay */}
        <motion.div
          className="absolute inset-0"
          animate={{ opacity: hov ? 0.3 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ background: 'linear-gradient(to top, #590C8A 0%, transparent 60%)' }}
        />
        {/* Tag */}
        {prenda.tag && (
          <div
            className="absolute top-3 left-3 px-2 py-1"
            style={{ background: prenda.accent }}
          >
            <span className="text-white" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.5rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              {prenda.tag}
            </span>
          </div>
        )}
        {/* Ver más */}
        <motion.div
          className="absolute bottom-3 right-3 flex items-center gap-1 px-3 py-2"
          animate={{ opacity: hov ? 1 : 0, y: hov ? 0 : 6 }}
          transition={{ duration: 0.25 }}
          style={{ background: 'rgba(250,248,243,0.95)' }}
        >
          <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.55rem', letterSpacing: '0.15em', color: '#590C8A', textTransform: 'uppercase' }}>Ver detalle</span>
          <ArrowUpRight size={11} color="#590C8A" />
        </motion.div>
      </div>

      {/* Info */}
      <div className="pt-4 pb-2" style={{ borderTop: `2px solid ${prenda.accent}` }}>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.55rem', letterSpacing: '0.2em', color: prenda.accent, textTransform: 'uppercase', marginBottom: 4 }}>
          {prenda.categoria} · {prenda.comunidad}
        </p>
        <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.15rem', fontWeight: 600, color: '#590C8A', lineHeight: 1.2 }}>
          {prenda.nombre}
        </h3>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', color: '#4A3728', marginTop: 2 }}>
          {prenda.artesana}
        </p>
        <div className="flex items-center justify-between mt-3">
          <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: 700, color: '#590C8A' }}>
            {prenda.precio}
          </span>
          <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.5rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9A7B6A' }}>
            {prenda.horas}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Product Detail Panel ──────────────────────────────────────────── */
function ProductDetail({ prenda, onClose }: { prenda: Prenda; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 60 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="absolute inset-0 flex flex-col md:flex-row overflow-y-auto"
      style={{ background: '#FAF8F3', zIndex: 10 }}
    >
      {/* Back */}
      <button
        onClick={onClose}
        className="absolute top-6 left-6 flex items-center gap-2 z-20 cursor-pointer bg-transparent border-none"
        style={{ fontFamily: 'var(--font-sans)', fontSize: '0.6rem', letterSpacing: '0.15em', color: '#590C8A', textTransform: 'uppercase' }}
      >
        <ChevronLeft size={14} />
        Volver
      </button>

      {/* Image */}
      <div className="w-full md:w-1/2 relative overflow-hidden flex-shrink-0" style={{ minHeight: 380 }}>
        <img
          src={prenda.imagen}
          alt={prenda.nombre}
          className="w-full h-full object-cover"
          style={{ minHeight: 380 }}
        />
        {prenda.tag && (
          <div className="absolute top-6 right-6 px-3 py-1" style={{ background: prenda.accent }}>
            <span className="text-white" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.55rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
              {prenda.tag}
            </span>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="flex-1 flex flex-col justify-center px-10 py-16 md:px-16">
        {/* Category pill */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-px" style={{ background: prenda.accent }} />
          <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.55rem', letterSpacing: '0.25em', color: prenda.accent, textTransform: 'uppercase' }}>
            {prenda.categoria}
          </span>
        </div>

        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 600, color: '#590C8A', lineHeight: 1.1, marginBottom: 8 }}>
          {prenda.nombre}
        </h2>

        <div className="flex items-center gap-3 mb-8">
          <div className="w-6 h-6 rounded-full bg-[#F5F1E8] flex items-center justify-center" style={{ border: `1px solid ${prenda.accent}` }}>
            <span style={{ fontSize: '0.55rem', color: prenda.accent }}>✦</span>
          </div>
          <div>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.65rem', letterSpacing: '0.1em', color: '#4A3728', textTransform: 'uppercase' }}>
              {prenda.artesana} · {prenda.comunidad}
            </p>
          </div>
        </div>

        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: 1.9, color: '#590C8A', marginBottom: 20 }}>
          {prenda.descripcion}
        </p>

        <div className="p-5 mb-8" style={{ background: '#F5F1E8', borderLeft: `3px solid ${prenda.accent}` }}>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.55rem', letterSpacing: '0.2em', color: prenda.accent, textTransform: 'uppercase', marginBottom: 8 }}>
            Detalles del producto
          </p>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', lineHeight: 1.8, color: '#4A3728' }}>
            {prenda.detalle}
          </p>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.6rem', color: '#9A7B6A', marginTop: 8, letterSpacing: '0.05em' }}>
            Tiempo de elaboración: {prenda.horas}
          </p>
        </div>

        {/* Price + CTA */}
        <div className="flex items-center gap-6 flex-wrap">
          <span style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 700, color: '#590C8A' }}>
            {prenda.precio}
          </span>
          <a
            href="#contacto"
            onClick={onClose}
            className="flex items-center gap-2 px-8 py-4 text-white cursor-pointer transition-opacity hover:opacity-85"
            style={{ background: prenda.accent, fontFamily: 'var(--font-sans)', fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', textDecoration: 'none' }}
          >
            <span>Solicitar Pieza</span>
            <ArrowUpRight size={13} />
          </a>
          <a
            href="https://wa.me/529611234567"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-4 cursor-pointer transition-opacity hover:opacity-80"
            style={{ border: `2px solid ${prenda.accent}`, color: prenda.accent, fontFamily: 'var(--font-sans)', fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', textDecoration: 'none' }}
          >
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Main Modal ────────────────────────────────────────────────────── */
interface CatalogoModalProps {
  open: boolean;
  onClose: () => void;
}

export function CatalogoModal({ open, onClose }: CatalogoModalProps) {
  const [categoria, setCategoria] = useState<Categoria>('Todos');
  const [selected, setSelected] = useState<Prenda | null>(null);

  const filtered = categoria === 'Todos'
    ? prendas
    : prendas.filter(p => p.categoria === categoria);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ background: 'rgba(89,12,138,0.7)', backdropFilter: 'blur(4px)' }}
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            className="fixed inset-0 z-50 flex flex-col overflow-hidden"
            style={{ background: '#FAF8F3', top: '4vh', borderRadius: '4px 4px 0 0' }}
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-8 py-6 flex-shrink-0" style={{ borderBottom: '1px solid rgba(89,12,138,0.1)' }}>
              <div className="flex items-center gap-6">
                <div>
                  <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.55rem', letterSpacing: '0.3em', color: '#B8342A', textTransform: 'uppercase' }}>
                    Catálogo Completo
                  </span>
                  <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 600, color: '#590C8A', lineHeight: 1 }}>
                    Prendas &amp; Textiles
                  </h2>
                </div>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: '#9A7B6A' }}>
                  {filtered.length} piezas
                </span>
              </div>
              <button
                onClick={onClose}
                title="Cerrar catálogo"
                className="w-10 h-10 flex items-center justify-center cursor-pointer bg-transparent border-none hover:bg-[#F5F1E8] transition-colors"
                style={{ color: '#590C8A' }}
              >
                <X size={20} />
              </button>
            </div>

            {/* Filters */}
            <div className="flex items-center gap-2 px-8 py-4 flex-shrink-0 overflow-x-auto" style={{ borderBottom: '1px solid rgba(89,12,138,0.08)' }}>
              {categorias.map(cat => (
                <motion.button
                  key={cat}
                  onClick={() => { setCategoria(cat); setSelected(null); }}
                  className="cursor-pointer flex-shrink-0 px-5 py-2 transition-colors"
                  animate={{
                    background: categoria === cat ? '#590C8A' : 'transparent',
                    color: categoria === cat ? '#FAF8F3' : '#4A3728',
                  }}
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.6rem',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    border: '1px solid',
                    borderColor: categoria === cat ? '#590C8A' : 'rgba(89,12,138,0.2)',
                  }}
                >
                  {cat}
                </motion.button>
              ))}
            </div>

            {/* Content area */}
            <div className="flex-1 overflow-y-auto relative">
              {/* Product grid */}
              <div className="px-8 py-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                <AnimatePresence mode="popLayout">
                  {filtered.map(p => (
                    <ProductCard
                      key={p.id}
                      prenda={p}
                      onClick={() => setSelected(p)}
                    />
                  ))}
                </AnimatePresence>
              </div>

              {/* Detail overlay */}
              <AnimatePresence>
                {selected && (
                  <ProductDetail prenda={selected} onClose={() => setSelected(null)} />
                )}
              </AnimatePresence>
            </div>

            {/* Footer */}
            <div
              className="flex-shrink-0 flex items-center justify-between px-8 py-4"
              style={{ borderTop: '1px solid rgba(89,12,138,0.1)', background: '#F5F1E8' }}
            >
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: '#9A7B6A' }}>
                Todas las piezas son elaboradas a mano por artesanas de Chiapas · Comercio justo certificado
              </p>
              <a
                href="#contacto"
                onClick={onClose}
                style={{ fontFamily: 'var(--font-sans)', fontSize: '0.55rem', letterSpacing: '0.15em', color: '#B8342A', textTransform: 'uppercase', textDecoration: 'none' }}
              >
                Pedidos especiales →
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
