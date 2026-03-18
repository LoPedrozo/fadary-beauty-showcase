import { Instagram, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { CONTACTS, createWhatsAppLink, whatsappMessages } from "@/lib/contact";
import { APP_PATHS } from "@/config/navigation";
import fadaryLogo from "@/assets/fadary-logo-nav.png";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border/30 py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-6 md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] md:gap-8">
        <Link
          to={APP_PATHS.home}
          className="flex flex-col items-center gap-2 md:justify-self-start"
          aria-label="Página inicial da FADARY"
        >
          <img
            src={fadaryLogo}
            alt="FADARY"
            className="h-16 object-contain sm:h-20"
            width={480}
            height={307}
            loading="lazy"
            decoding="async"
          />
        </Link>

        <div className="mx-auto max-w-sm text-center text-[9px] leading-6 tracking-[0.18em] text-muted-foreground sm:text-[10px] sm:tracking-[0.2em] md:justify-self-center">
          &copy; {new Date().getFullYear()} FADARY BEAUTY. ELEGÂNCIA, AUTOCUIDADO E BELEZA
          NATURAL.
        </div>

        <div className="flex items-center justify-center gap-4 sm:gap-6 md:justify-self-end">
          <a
            href={CONTACTS.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram da FADARY"
            className="hover-gold flex h-11 w-11 items-center justify-center text-foreground"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href={createWhatsAppLink(whatsappMessages.attendance)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp da FADARY"
            className="hover-gold flex h-11 w-11 items-center justify-center text-foreground"
          >
            <Phone className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
