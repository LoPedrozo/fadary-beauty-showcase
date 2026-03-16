import { ArrowRight, Quote } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import heroBg from "@/assets/hero-bg.jpg";
import zenithBlack from "@/assets/zenith-black.jpg";

const testimonials = [
  {
    text: "A experiência com a FADARY mudou minha percepção de autocuidado. Não é sobre esconder imperfeições, é sobre celebrar a pele que habito.",
    author: "Helena Cavalcante",
  },
  {
    text: "Zenith Black transformou minha rotina noturna. Acordo com a pele radiante e renovada, como se o tempo trabalhasse a meu favor.",
    author: "Marina Duarte",
  },
  {
    text: "Sofisticação em cada detalhe. Desde a embalagem até o resultado, a FADARY entrega uma experiência verdadeiramente premium.",
    author: "Camila Ferreira",
  },
];

const Index = () => {
  return (
    <div>
      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background z-10" />
          <img
            src={heroBg}
            alt="FADARY Beauty"
            className="w-full h-full object-cover opacity-50"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
          className="relative z-20 text-center px-6"
        >
          <span className="text-xs tracking-[0.5em] text-primary uppercase mb-4 block font-body">
            The Essence of Rarity
          </span>
          <h1 className="text-5xl md:text-8xl mb-8 leading-tight font-display text-foreground">
            FADARY
          </h1>
          <p className="max-w-xl mx-auto text-sm md:text-base text-muted-foreground font-light leading-relaxed mb-12 font-body">
            Não é apenas beleza. É a manifestação física da sua confiança. Criamos fórmulas que
            respeitam a sua história e elevam o seu futuro.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Link to="/produtos" className="btn-premium text-foreground">
              Explorar Coleção
            </Link>
            <Link
              to="/contato"
              className="px-8 py-3 text-[10px] tracking-[0.2em] uppercase flex items-center justify-center gap-2 text-foreground hover-gold font-body"
            >
              Ver Catálogo <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* About Intro */}
      <section className="section-spacing bg-surface-elevated">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-24 items-center">
          <ScrollReveal>
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden border border-border/30">
                <img
                  src={heroBg}
                  alt="Brand Story"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-48 h-48 border border-primary/30 z-[-1]" />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div>
              <h2 className="text-3xl mb-8 text-foreground">Nossa Filosofia</h2>
              <div className="space-y-6 text-muted-foreground font-light leading-relaxed font-body">
                <p>
                  A FADARY nasceu da intersecção entre a ciência avançada e o ritual ancestral.
                  Acreditamos que a beleza premium não deve ser apenas vista, mas sentida através
                  da textura, do aroma e do resultado impecável.
                </p>
                <p>
                  Nossa missão é fornecer ferramentas de expressão para mulheres que não aceitam o
                  comum. Cada frasco é uma promessa de excelência.
                </p>
              </div>
              <div className="mt-12 grid grid-cols-3 gap-8 border-t border-border/30 pt-8">
                {["Pureza", "Eficácia", "Luxo"].map((value, i) => (
                  <div key={value}>
                    <span className="block text-primary text-xl mb-2 italic font-display">
                      0{i + 1}.
                    </span>
                    <span className="text-[10px] uppercase tracking-widest text-foreground font-body">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Zenith Black Featured */}
      <section className="section-spacing bg-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="bg-surface border border-border/20 p-8 md:p-20 flex flex-col md:flex-row gap-16 items-center">
              <div className="flex-1 order-2 md:order-1">
                <span className="text-primary text-xs tracking-[0.3em] uppercase mb-4 block font-body">
                  Flagship Product
                </span>
                <h2 className="text-4xl md:text-6xl mb-6 text-foreground">Zenith Black</h2>
                <p className="text-muted-foreground mb-8 font-light leading-relaxed font-body">
                  O ápice da regeneração noturna. Uma infusão de minerais vulcânicos e peptídeos
                  de ouro que restaura a luminosidade da pele enquanto você transcende.
                </p>
                <div className="text-2xl mb-10 font-light italic text-foreground font-body">
                  R$ 489,00
                </div>
                <a
                  href="https://wa.me/5511999999999?text=Olá! Gostaria de adquirir o Zenith Black"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-premium inline-block text-foreground"
                >
                  Adquirir via Consultora
                </a>
              </div>
              <div className="flex-1 order-1 md:order-2 relative">
                <div className="w-full aspect-square bg-gradient-to-tr from-background to-secondary flex items-center justify-center p-12 shadow-2xl">
                  <div className="w-full h-full border border-primary/20 flex items-center justify-center relative overflow-hidden">
                    <img
                      src={zenithBlack}
                      alt="Zenith Black"
                      className="w-3/4 object-contain"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-spacing bg-surface-elevated border-y border-border/20">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center">
              <Quote className="w-10 h-10 text-primary/30 mx-auto mb-8" />
            </div>
          </ScrollReveal>
          <div className="space-y-20">
            {testimonials.map((t, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <div className="text-center">
                  <p className="text-xl md:text-2xl font-light italic leading-relaxed mb-6 text-foreground font-body">
                    "{t.text}"
                  </p>
                  <span className="text-xs tracking-[0.3em] uppercase text-primary font-body">
                    {t.author}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-5xl mb-8 text-foreground">
              Eleve Sua Rotina de Beleza
            </h2>
            <p className="text-muted-foreground mb-12 font-light leading-relaxed font-body">
              Entre em contato com nossas consultoras para uma experiência personalizada. Sua
              jornada de beleza premium começa com uma conversa.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-premium text-foreground"
              >
                Fale pelo WhatsApp
              </a>
              <a
                href="https://instagram.com/fadary.beauty"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 text-[10px] tracking-[0.2em] uppercase flex items-center justify-center gap-2 text-foreground hover-gold font-body border border-border/30"
              >
                Siga no Instagram
              </a>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
};

export default Index;
