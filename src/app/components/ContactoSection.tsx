import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, MapPin, Phone, Send, Instagram, Facebook } from 'lucide-react';

export function ContactoSection() {
  const [form, setForm] = useState({ nombre: '', correo: '', asunto: '', mensaje: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 5000);
    setForm({ nombre: '', correo: '', asunto: '', mensaje: '' });
  };

  return (
    <section
      id="contacto"
      style={{ background: '#612BBD', padding: 'clamp(80px, 12vw, 140px) 0' }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left info */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-px bg-[#D4A034]" />
              <span
                className="text-[#D4A034] uppercase tracking-[0.35em]"
                style={{ fontFamily: 'var(--font-sans)', fontSize: '0.6rem' }}
              >
                Comunícate
              </span>
            </div>
            <div className="overflow-hidden mb-1">
              <motion.h2
                initial={{ y: '100%' }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                  fontWeight: 600,
                  lineHeight: 1.05,
                  color: '#FAF8F3',
                }}
              >
                Hablemos de
              </motion.h2>
            </div>
            <div className="overflow-hidden mb-10">
              <motion.h2
                initial={{ y: '100%' }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                  fontWeight: 400,
                  fontStyle: 'italic',
                  lineHeight: 1.05,
                  color: '#D4A034',
                }}
              >
                Arte Textil
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-white/60 mb-12"
              style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: 1.9, maxWidth: 380 }}
            >
              ¿Buscas piezas para tu hogar, negocio o como regalo especial? ¿Quieres conocer cómo apoyar directamente a las comunidades artesanas? Escríbenos.
            </motion.p>

            {/* Contact details */}
            <div className="space-y-6 mb-12">
              {[
                { Icon: MapPin, label: 'Dirección', value: 'San Cristóbal de las Casas, Chiapas, México' },
                { Icon: Phone, label: 'Teléfono', value: '+52 (967) 123 4567' },
                { Icon: Mail, label: 'Correo', value: 'hola@textiles-chiapas.mx' },
              ].map(({ Icon, label, value }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div
                    className="w-10 h-10 flex items-center justify-center flex-shrink-0"
                    style={{ border: '1px solid rgba(212,160,52,0.3)' }}
                  >
                    <Icon size={16} className="text-[#D4A034]" />
                  </div>
                  <div>
                    <p
                      className="text-white/40 uppercase mb-0.5"
                      style={{ fontFamily: 'var(--font-sans)', fontSize: '0.55rem', letterSpacing: '0.2em' }}
                    >
                      {label}
                    </p>
                    <p
                      className="text-white/80"
                      style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem' }}
                    >
                      {value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Horario */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="p-5 mb-8"
              style={{ border: '1px solid rgba(212,160,52,0.2)', borderLeft: '3px solid #D4A034' }}
            >
              <p
                className="text-[#D4A034] uppercase tracking-widest mb-3"
                style={{ fontFamily: 'var(--font-sans)', fontSize: '0.55rem', letterSpacing: '0.25em' }}
              >
                Horario de Atención
              </p>
              <p className="text-white/60" style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', lineHeight: 1.8 }}>
                Lunes a Viernes: 9:00 – 18:00 hrs<br />
                Sábados: 10:00 – 14:00 hrs<br />
                <span className="text-white/40">Tiempo de Chiapas (CST)</span>
              </p>
            </motion.div>

            {/* Social */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="flex gap-4"
            >
              {[
                { Icon: Instagram, label: 'Instagram' },
                { Icon: Facebook, label: 'Facebook' },
              ].map(({ Icon, label }) => (
                <button
                  key={label}
                  className="w-10 h-10 flex items-center justify-center text-white/50 hover:text-[#D4A034] border border-white/10 hover:border-[#D4A034]/40 transition-all duration-300 cursor-pointer bg-transparent"
                >
                  <Icon size={16} />
                </button>
              ))}
            </motion.div>
          </div>

          {/* Right form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label
                    className="text-white/50 uppercase tracking-widest"
                    style={{ fontFamily: 'var(--font-sans)', fontSize: '0.55rem', letterSpacing: '0.2em' }}
                  >
                    Nombre *
                  </label>
                  <input
                    name="nombre"
                    value={form.nombre}
                    onChange={handleChange}
                    required
                    placeholder="Tu nombre completo"
                    className="px-4 py-3.5 text-white/90 placeholder-white/25 outline-none focus:border-[#D4A034] transition-colors"
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.88rem',
                    }}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    className="text-white/50 uppercase tracking-widest"
                    style={{ fontFamily: 'var(--font-sans)', fontSize: '0.55rem', letterSpacing: '0.2em' }}
                  >
                    Correo *
                  </label>
                  <input
                    name="correo"
                    type="email"
                    value={form.correo}
                    onChange={handleChange}
                    required
                    placeholder="correo@ejemplo.com"
                    className="px-4 py-3.5 text-white/90 placeholder-white/25 outline-none focus:border-[#D4A034] transition-colors"
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.88rem',
                    }}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label
                  className="text-white/50 uppercase tracking-widest"
                  style={{ fontFamily: 'var(--font-sans)', fontSize: '0.55rem', letterSpacing: '0.2em' }}
                >
                  Motivo de Contacto
                </label>
                <select
                  name="asunto"
                  value={form.asunto}
                  onChange={handleChange}
                  className="px-4 py-3.5 text-white/90 outline-none focus:border-[#D4A034] transition-colors cursor-pointer"
                  style={{
                    background: '#612BBD',
                    border: '1px solid rgba(255,255,255,0.1)',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.88rem',
                  }}
                >
                  <option value="" style={{ background: '#612BBD' }}>Selecciona una opción...</option>
                  <option value="compra" style={{ background: '#612BBD' }}>Quiero comprar una pieza</option>
                  <option value="mayoreo" style={{ background: '#612BBD' }}>Compra al mayoreo / tienda</option>
                  <option value="personalizada" style={{ background: '#612BBD' }}>Pieza personalizada</option>
                  <option value="colaboracion" style={{ background: '#612BBD' }}>Colaboración / alianza</option>
                  <option value="otro" style={{ background: '#612BBD' }}>Otro</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label
                  className="text-white/50 uppercase tracking-widest"
                  style={{ fontFamily: 'var(--font-sans)', fontSize: '0.55rem', letterSpacing: '0.2em' }}
                >
                  Mensaje *
                </label>
                <textarea
                  name="mensaje"
                  value={form.mensaje}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Cuéntanos qué buscas..."
                  className="px-4 py-3.5 text-white/90 placeholder-white/25 outline-none focus:border-[#D4A034] transition-colors resize-none"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.88rem',
                  }}
                />
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 flex items-center justify-center gap-3 uppercase tracking-widest cursor-pointer border-none transition-all duration-300"
                style={{
                  background: sent ? '#2D5D3F' : '#D4A034',
                  color: '#612BBD',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.65rem',
                  letterSpacing: '0.2em',
                }}
              >
                {sent ? (
                  <>
                    <span>¡Mensaje Enviado!</span>
                  </>
                ) : (
                  <>
                    <span>Enviar Mensaje</span>
                    <Send size={14} />
                  </>
                )}
              </motion.button>

              <p
                className="text-white/30 text-center"
                style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem' }}
              >
                Respondemos en menos de 24 horas hábiles
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
