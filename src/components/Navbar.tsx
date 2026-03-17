import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Início", path: "/" },
  { label: "Sobre", path: "/sobre" },
  { label: "Curadoria", path: "/produtos" },
  { label: "Contato", path: "/contato" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed w-full z-50 border-b border-border/30 bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold tracking-[0.3em] gold-gradient-text font-display">
          FADARY
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-12 text-[10px] uppercase tracking-[0.2em]">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`hover-gold ${location.pathname === link.path ? "text-primary" : "text-foreground"}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 text-[10px] border border-primary/30 px-4 py-2 hover:bg-primary hover:text-primary-foreground transition-all duration-400 uppercase tracking-[0.15em]"
          >
            <MessageCircle className="w-4 h-4" />
            Atendimento
          </a>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground"
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
            className="md:hidden bg-background border-t border-border/30 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-xs uppercase tracking-[0.2em] hover-gold ${
                    location.pathname === link.path ? "text-primary" : "text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-premium text-center text-foreground mt-4"
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
