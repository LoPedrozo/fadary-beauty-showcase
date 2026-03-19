import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { createWhatsAppLink, whatsappMessages } from "@/lib/contact";
import { APP_PATHS, NAV_LINKS } from "@/config/navigation";
import fadaryIcon from "@/assets/fadary-icon.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isActivePath = (path: string) => location.pathname === path;
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed w-full z-50 border-b border-border/30 bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex h-[4.5rem] items-center justify-between px-4 sm:h-20 sm:px-6">
        <Link
          to={APP_PATHS.home}
          className="flex min-w-0 items-center gap-2.5 sm:gap-3"
          aria-label="Página inicial da FADARY"
          onClick={closeMenu}
        >
          <img
            src={fadaryIcon}
            alt="FADARY"
            className="h-14 w-14 shrink-0 object-contain sm:h-[84px] sm:w-[84px]"
            width={320}
            height={320}
            decoding="async"
          />
          <span className="truncate text-sm font-bold tracking-[0.2em] gold-gradient-text font-display sm:text-xl sm:tracking-[0.3em]">
            FADARY
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 text-[10px] uppercase tracking-[0.2em] lg:gap-12">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              aria-current={isActivePath(link.path) ? "page" : undefined}
              className={`nav-link-premium hover-gold ${isActivePath(link.path) ? "text-primary" : "text-foreground"}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <a
            href={createWhatsAppLink(whatsappMessages.attendance)}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex subtle-link-cta items-center gap-2 text-[10px] border border-primary/30 px-4 py-2 hover:bg-primary hover:text-primary-foreground uppercase tracking-[0.15em]"
          >
            <MessageCircle className="w-4 h-4" />
            Atendimento
          </a>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            className="flex h-11 w-11 items-center justify-center text-foreground md:hidden"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            id="mobile-navigation"
            className="md:hidden bg-background border-t border-border/30 overflow-hidden"
          >
            <div className="flex flex-col gap-5 px-4 py-6 sm:px-6 sm:py-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  aria-current={isActivePath(link.path) ? "page" : undefined}
                  onClick={closeMenu}
                  className={`py-1 text-xs uppercase tracking-[0.2em] hover-gold ${
                    isActivePath(link.path) ? "text-primary" : "text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={createWhatsAppLink(whatsappMessages.attendance)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="btn-premium mt-2 w-full text-center text-foreground"
              >
                <MessageCircle className="w-4 h-4 inline mr-2" />
                Atendimento
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
