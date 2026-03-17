import logoImg from "@/assets/mtm-logo.png";

interface LogoProps {
  className?: string;
  imgHeight?: string;
}

const Logo = ({ className = "", imgHeight = "h-10" }: LogoProps) => {
  return (
    <div className={`flex flex-col items-center leading-none ${className}`}>
      <img src={logoImg} alt="MTM" className={`${imgHeight} w-auto`} />
      <span className="font-heading text-foreground text-[0.55rem] uppercase tracking-[0.35em] -mt-1">
        Representações
      </span>
    </div>
  );
};

export default Logo;
