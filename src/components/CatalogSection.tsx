import { useState } from "react";
import { motion } from "framer-motion";
import { FileDown } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const catalogs = [
  {
    brand: "Correntes & Coroas",
    description: "Catálogo completo de kits de transmissão para todas as marcas.",
  },
  {
    brand: "Freios & Pastilhas",
    description: "Pastilhas e lonas de freio com alta performance e durabilidade.",
  },
  {
    brand: "Rolamentos",
    description: "Rolamentos de roda, coluna e câmbio para diversas aplicações.",
  },
  {
    brand: "Cabos & Manetes",
    description: "Cabos de acelerador, embreagem e manetes de todos os modelos.",
  },
  {
    brand: "Motor & Pistões",
    description: "Kits de pistão, anéis, juntas e componentes de motor.",
  },
  {
    brand: "Elétrica",
    description: "CDI, reguladores, bobinas e chicotes elétricos completos.",
  },
];

const DRIVE_EMBED_URL =
  "https://drive.google.com/embeddedfolderview?id=1K16HwOJKTJ19HZtBag0BzBk3Rnq3vh1k#grid";

const CatalogSection = () => {
  const [open, setOpen] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState("");

  const handleOpen = (brand: string) => {
    setSelectedBrand(brand);
    setOpen(true);
  };

  return (
    <section id="catalogo" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase">
            Catálogo de <span className="text-primary">Peças</span>
          </h2>
          <p className="mt-4 text-metallic max-w-xl mx-auto">
            Clique em uma categoria para visualizar nosso catálogo completo.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {catalogs.map((cat, i) => (
            <motion.button
              key={cat.brand}
              onClick={() => handleOpen(cat.brand)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-card border border-border rounded-lg p-6 hover:border-primary/40 hover:shadow-glow transition-all flex flex-col text-left cursor-pointer"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-heading text-lg font-semibold uppercase">
                  {cat.brand}
                </h3>
                <div className="w-10 h-10 rounded-md bg-secondary flex items-center justify-center group-hover:gradient-accent transition-colors">
                  <FileDown size={20} className="text-muted-foreground group-hover:text-accent-foreground" />
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                {cat.description}
              </p>
              <span className="mt-4 text-primary text-xs font-heading uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                Ver Catálogo →
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-4xl h-[80vh] flex flex-col">
          <DialogHeader>
            <DialogTitle className="font-heading uppercase">
              Catálogo — {selectedBrand}
            </DialogTitle>
          </DialogHeader>
          <div className="flex-1 min-h-0">
            <iframe
              src={DRIVE_EMBED_URL}
              className="w-full h-full rounded-md border border-border"
              title={`Catálogo ${selectedBrand}`}
              allowFullScreen
            />
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default CatalogSection;
