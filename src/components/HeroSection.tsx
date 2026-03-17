import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 gradient-hero" />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tight"
        >
          MTM{" "}
          <span className="text-primary">Representações</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6 text-lg md:text-xl text-metallic max-w-2xl mx-auto"
        >
          Representação e distribuição das melhores marcas do mercado de peças
          para motocicletas.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#catalogo"
            className="inline-block gradient-accent text-accent-foreground font-heading uppercase tracking-wider text-sm px-8 py-4 rounded-md hover:opacity-90 transition-opacity shadow-glow"
          >
            Ver Catálogo
          </a>
          <a
            href="#contato"
            className="inline-block border border-border text-foreground font-heading uppercase tracking-wider text-sm px-8 py-4 rounded-md hover:bg-secondary transition-colors"
          >
            Fale Conosco
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
