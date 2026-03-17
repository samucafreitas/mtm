import Logo from "@/components/Logo";

const Footer = () => {
  return (
    <footer className="py-10 bg-background border-t border-border">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="opacity-70">
          <Logo imgHeight="h-8" />
        </div>
        <p className="text-muted-foreground text-xs">
          © {new Date().getFullYear()} MTM Representações. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
