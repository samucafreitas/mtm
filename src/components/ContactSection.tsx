import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://w.app/b5n7ad";

const ContactSection = () => {
  return (
    <section id="contato" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase">
            Fale <span className="text-primary">Conosco</span>
          </h2>
          <p className="mt-4 text-metallic max-w-xl mx-auto">
            Entre em contato para orçamentos, dúvidas ou parcerias.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            { icon: Phone, label: "Telefone", value: "(62) 99373-0106", hasWhatsapp: true },
            { icon: Mail, label: "E-mail", value: "mtm.rep.comercial@gmail.com", hasWhatsapp: false },
            { icon: MapPin, label: "Localização", value: "Goiânia - GO", hasWhatsapp: false },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="text-center"
            >
              <div className="flex items-center justify-center gap-3 mx-auto mb-4">
                <div className="w-14 h-14 rounded-full gradient-accent flex items-center justify-center">
                  <item.icon size={24} className="text-accent-foreground" />
                </div>
                {item.hasWhatsapp && (
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 rounded-full bg-[hsl(142,70%,45%)] hover:bg-[hsl(142,70%,40%)] transition-colors flex items-center justify-center"
                    aria-label="WhatsApp"
                  >
                    <MessageCircle size={24} className="text-white" />
                  </a>
                )}
              </div>
              <h3 className="font-heading text-lg uppercase font-semibold mb-1">{item.label}</h3>
              <p className="text-muted-foreground text-sm">{item.value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
