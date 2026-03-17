import { ArrowRight, Quote } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import heroBg from "@/assets/hero-bg.jpg";
import zenithBlack from "@/assets/zenith-black.jpg";

const testimonials = [
  {
    text: "FADARY representa a magia que vive em cada mulher: o poder de transformar o simples em extraordinário, o natural em brilho e o cotidiano em encanto.",
    author: "Manifesto",
  },
  {
    text: "Seu brilho não vem apenas do que se vê, mas do que você sente. Quando a mulher se reconhece com leveza e confiança, a beleza acontece por inteiro.",
    author: "Brilho Interior",
  },
  {
    text: "Nossa curadoria nasce para acolher presença, feminilidade e autenticidade em uma experiência de beleza sofisticada, sensível e em constante construção.",
    author: "Curadoria",
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
            alt="Atmosfera elegante da FADARY"
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
            Magia, Presença e Brilho
          </span>
          <h1 className="text-5xl md:text-8xl mb-8 leading-tight font-display text-foreground">
            FADARY
          </h1>
          <p className="max-w-xl mx-auto text-sm md:text-base text-muted-foreground font-light leading-relaxed mb-12 font-body">
            FADARY representa a magia que vive em cada mulher. Entre brilho natural,
            feminilidade e sofisticação, construímos uma experiência de beleza que transforma o
            cotidiano em encanto.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Link to="/produtos" className="btn-premium text-foreground">
              Explorar Curadoria
            </Link>
            <Link
              to="/contato"
              className="px-8 py-3 text-[10px] tracking-[0.2em] uppercase flex items-center justify-center gap-2 text-foreground hover-gold font-body"
            >
              Falar com a FADARY <ArrowRight className="w-4 h-4" />
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
                  alt="Essência da marca FADARY"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-48 h-48 border border-primary/30 z-[-1]" />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div>
              <h2 className="text-3xl mb-8 text-foreground">Nossa Essência</h2>
              <div className="space-y-6 text-muted-foreground font-light leading-relaxed font-body">
                <p>
                  FADARY nasce para celebrar a beleza como expressão de presença. Mais do que
                  aparência, enxergamos o autocuidado como um ritual íntimo, elegante e cheio de
                  significado.
                </p>
                <p>
                  Estamos construindo uma curadoria guiada por sensibilidade, autenticidade e
                  intenção. Cada escolha busca traduzir feminilidade, leveza e um brilho natural
                  que começa no que se sente.
                </p>
              </div>
              <div className="mt-12 grid grid-cols-3 gap-8 border-t border-border/30 pt-8">
                {["Presença", "Ritual", "Autenticidade"].map((value, i) => (
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
                  Curadoria FADARY
                </span>
                <h2 className="text-4xl md:text-6xl mb-6 text-foreground">Seleção em Destaque</h2>
                <p className="text-muted-foreground mb-8 font-light leading-relaxed font-body">
                  Uma seleção inspirada em rituais de beleza que unem sofisticação, textura e
                  intenção. Cada referência entra na FADARY como parte de uma experiência
                  feminina, acolhedora e premium, escolhida com olhar sensível para o que
                  realmente encanta.
                </p>
                <div className="text-lg md:text-2xl mb-10 font-light italic text-foreground font-body">
                  Catálogo em construção, com sugestões e disponibilidade sob consulta.
                </div>
                <a
                  href="https://wa.me/5511999999999?text=Olá! Quero conhecer a curadoria da FADARY."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-premium inline-block text-foreground"
                >
                  Conhecer a Seleção
                </a>
              </div>
              <div className="flex-1 order-1 md:order-2 relative">
                <div className="w-full aspect-square bg-gradient-to-tr from-background to-secondary flex items-center justify-center p-12 shadow-2xl">
                  <div className="w-full h-full border border-primary/20 flex items-center justify-center relative overflow-hidden">
                    <img
                      src={zenithBlack}
                      alt="Seleção em destaque da curadoria FADARY"
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
              Entre no Universo FADARY
            </h2>
            <p className="text-muted-foreground mb-12 font-light leading-relaxed font-body">
              Se você se conecta com uma beleza mais sensível, sofisticada e autêntica, fale
              conosco. A FADARY está em construção, e cada novo capítulo começa com presença,
              escuta e brilho natural.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-premium text-foreground"
              >
                Falar com a FADARY
              </a>
              <a
                href="https://instagram.com/fadary.beauty"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 text-[10px] tracking-[0.2em] uppercase flex items-center justify-center gap-2 text-foreground hover-gold font-body border border-border/30"
              >
                Acompanhar no Instagram
              </a>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
};

export default Index;
