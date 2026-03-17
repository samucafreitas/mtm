import { motion } from "framer-motion";
import { Wrench, ShieldCheck, Truck } from "lucide-react";

const features = [
  {
    icon: Wrench,
    title: "Peças Originais",
    desc: "Trabalhamos com as melhores marcas e peças de alta qualidade para garantir desempenho e durabilidade.",
  },
  {
    icon: ShieldCheck,
    title: "Garantia",
    desc: "Todas as peças possuem garantia de fábrica, oferecendo segurança e confiança para você.",
  },
  {
    icon: Truck,
    title: "Entrega Rápida",
    desc: "Logística eficiente para que você receba suas peças no menor tempo possível.",
  },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase">
            Sobre <span className="text-primary">Nós</span>
          </h2>
          <p className="mt-4 text-metallic max-w-xl mx-auto">
            A MTM Representações é referência na distribuição de moto peças,
            conectando as melhores fábricas aos lojistas de todo o Brasil.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-secondary rounded-lg p-8 border border-accent-subtle hover:shadow-glow transition-shadow"
            >
              <div className="w-14 h-14 rounded-md gradient-accent flex items-center justify-center mb-5">
                <f.icon className="text-accent-foreground" size={28} />
              </div>
              <h3 className="font-heading text-xl font-semibold uppercase mb-3">
                {f.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
