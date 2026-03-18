import { Instagram, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { CONTACTS, createWhatsAppLink, whatsappMessages } from "@/lib/contact";
import fadaryLogo from "@/assets/fadary-logo.png";

const Footer = () => {
  return (
    <footer className="bg-background py-20 border-t border-border/30">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12">
        <Link to="/" className="flex flex-col items-center gap-3">
          <img src={fadaryLogo} alt="FADARY" className="h-14 w-14 object-contain" />
          <span className="text-3xl font-bold tracking-[0.4em] gold-gradient-text font-display">FADARY</span>
        </Link>

        <div className="text-[10px] tracking-[0.2em] text-muted-foreground text-center">
          &copy; {new Date().getFullYear()} FADARY BEAUTY. ELEGÂNCIA, AUTOCUIDADO E BELEZA
          NATURAL.
        </div>

        <div className="flex gap-8">
          <a
            href={CONTACTS.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover-gold text-foreground"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href={createWhatsAppLink(whatsappMessages.attendance)}
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
