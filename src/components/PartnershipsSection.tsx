import { motion } from "framer-motion";
import atecLogo from "@/assets/atec.png";
import hardtLogo from "@/assets/hardt.png";
import trattoLogo from "@/assets/tratto.png";
import threeheadsLogo from "@/assets/threeheads.png";

const brands = [
  { name: "ATEC", logo: atecLogo },
  { name: "HARDT", logo: hardtLogo },
  { name: "TRATTO PARTS", logo: trattoLogo },
  { name: "THREEHEADS", logo: threeheadsLogo },
];

const PartnershipsSection = () => {
  return (
    <section id="parcerias" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase">
            Nossas <span className="text-primary">Parcerias</span>
          </h2>
          <p className="mt-4 text-metallic max-w-xl mx-auto">
            Trabalhamos com as melhores marcas do mercado para garantir qualidade e confiança.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {brands.map((brand, i) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-secondary rounded-lg border border-accent-subtle p-8 flex items-center justify-center hover:shadow-glow transition-shadow"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="max-h-16 md:max-h-20 w-auto object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnershipsSection;
