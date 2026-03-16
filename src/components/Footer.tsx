import { Instagram, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-background py-20 border-t border-border/30">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12">
        <Link to="/" className="text-3xl font-bold tracking-[0.4em] gold-gradient-text font-display">
          FADARY
        </Link>

        <div className="text-[10px] tracking-[0.2em] text-muted-foreground text-center">
          &copy; {new Date().getFullYear()} FADARY BEAUTY. TODOS OS DIREITOS RESERVADOS.
        </div>

        <div className="flex gap-8">
          <a
            href="https://instagram.com/fadary.beauty"
            target="_blank"
            rel="noopener noreferrer"
            className="hover-gold text-foreground"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="hover-gold text-foreground"
          >
            <Phone className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
