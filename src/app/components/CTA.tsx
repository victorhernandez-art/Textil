import { motion } from 'motion/react';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export function CTA() {
  return (
    <section id="contacto" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-[#004B87] to-[#003366] rounded-2xl p-12 mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            ¿Listo para Impulsar tu Negocio?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Agenda una consultoría gratuita y descubre cómo podemos ayudarte a 
            transformar tu idea en un negocio exitoso
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#D4A373] text-white rounded-lg hover:bg-[#B8885A] transition-all font-medium text-lg"
          >
            Agendar Consultoría Gratuita
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>

        {/* Contact Info */}
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white border border-slate-200 rounded-xl p-8 text-center"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-[#004B87] to-[#D4A373] rounded-lg flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-bold text-[#004B87] mb-2 text-lg">Teléfono</h3>
            <p className="text-slate-600">+52 (961) 123-4567</p>
            <p className="text-sm text-slate-500 mt-1">Lun - Vie: 9:00 - 18:00</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white border border-slate-200 rounded-xl p-8 text-center"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-[#004B87] to-[#D4A373] rounded-lg flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-bold text-[#004B87] mb-2 text-lg">Email</h3>
            <p className="text-slate-600">incubadora@unach.edu.mx</p>
            <p className="text-sm text-slate-500 mt-1">Respuesta en 24 horas</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white border border-slate-200 rounded-xl p-8 text-center"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-[#004B87] to-[#D4A373] rounded-lg flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-bold text-[#004B87] mb-2 text-lg">Ubicación</h3>
            <p className="text-slate-600">Universidad Autónoma</p>
            <p className="text-slate-600">de Chiapas</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}