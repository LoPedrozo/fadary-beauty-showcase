import { ArrowRight, Quote } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import { APP_PATHS } from "@/config/navigation";
import { CONTACTS, createWhatsAppLink, whatsappMessages } from "@/lib/contact";
import heroBg from "@/assets/hero-bg.jpg";
import heroBgMobile from "@/assets/hero-bg-mobile.jpg";
import zenithBlack from "@/assets/zenith-black.jpg";

const testimonials = [
  {
    text: "Autocuidado com leveza, presença e beleza natural.",
    author: "Autocuidado",
  },
  {
    text: "Escolhas pensadas para acompanhar a rotina feminina com delicadeza.",
    author: "Rotina",
  },
  {
    text: "Uma curadoria feita para valorizar o que é simples, bonito e real.",
    author: "Curadoria",
  },
];

const Index = () => {
  const shouldReduceMotion = useReducedMotion();
  const heroOffset = shouldReduceMotion ? 0 : 20;
  const heroTransition = {
    duration: shouldReduceMotion ? 0.01 : 0.72,
    ease: [0.23, 1, 0.32, 1] as const,
  };

  const heroContainer = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.14,
        delayChildren: shouldReduceMotion ? 0 : 0.16,
      },
    },
  };

  const heroItem = {
    hidden: { opacity: 0, y: heroOffset },
    visible: { opacity: 1, y: 0, transition: heroTransition },
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden pb-14 pt-28 sm:pb-16 sm:pt-32 md:pb-20 md:pt-36">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background z-10" />
          <picture className="block h-full w-full">
            <source media="(max-width: 767px)" srcSet={heroBgMobile} />
            <img
              src={heroBg}
              alt="Atmosfera elegante da FADARY"
              className="w-full h-full object-cover opacity-50"
              width={1920}
              height={1080}
              fetchPriority="high"
              decoding="async"
            />
          </picture>
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={heroContainer}
          className="relative z-20 mx-auto max-w-5xl px-5 text-center sm:px-6"
        >
          <motion.div variants={heroItem}>
            <span className="mb-4 block text-[10px] tracking-[0.35em] text-primary uppercase sm:text-xs sm:tracking-[0.5em]">
              Beleza, Cuidado e Presença
            </span>
            <h1 className="text-[3.1rem] leading-none font-display text-foreground sm:text-6xl md:text-8xl">
              FADARY
            </h1>
          </motion.div>
          <motion.div
            variants={heroItem}
            className="mx-auto mt-12 max-w-[28rem] px-1 sm:mt-16 sm:max-w-[32rem] sm:px-2 md:mt-20 md:max-w-[36rem]"
          >
            <p className="text-[0.9rem] text-foreground/80 font-light italic leading-[1.75] tracking-[0.01em] sm:text-base sm:leading-[1.85] md:text-[1.05rem]">
              <span className="block">Seu brilho não vem apenas do que se vê,</span>
              <span className="block">mas do que você sente.</span>
            </p>
            <p className="mt-5 text-[1.35rem] font-semibold leading-tight gold-gradient-text sm:mt-6 sm:text-[1.7rem] md:text-[1.95rem]">
              Acredite na sua própria magia.
            </p>
          </motion.div>
          <motion.div
            variants={heroItem}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:mt-12 sm:gap-5 md:mt-14 md:flex-row md:gap-6"
          >
            <Link
              to={APP_PATHS.products}
              className="btn-premium w-full max-w-sm text-foreground sm:w-auto"
            >
              Explorar Curadoria
            </Link>
            <Link
              to={APP_PATHS.contact}
              className="subtle-link-cta flex min-h-[3rem] w-full max-w-sm items-center justify-center gap-2 px-6 py-3 text-[10px] tracking-[0.2em] uppercase text-foreground hover-gold sm:w-auto sm:px-8"
            >
              Falar com a FADARY <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* About Intro */}
      <section className="section-spacing bg-surface-elevated">
        <div className="max-w-7xl mx-auto grid items-center gap-14 px-5 sm:px-6 md:grid-cols-2 md:gap-16 lg:gap-24">
          <ScrollReveal>
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden border border-border/30">
                <img
                  src={heroBg}
                  alt="Essência da marca FADARY"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                  width={1920}
                  height={1080}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-48 h-48 border border-primary/30 z-[-1]" />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div>
              <h2 className="mb-8 text-3xl text-foreground md:text-[2.2rem]">Nossa Essência</h2>
              <div className="space-y-6 text-muted-foreground font-light leading-[1.82]">
                <p>
                  A FADARY acredita em uma beleza que faz parte da rotina da mulher com leveza e
                  intenção. Para nós, autocuidado é um gesto diário de bem-estar, presença e
                  conexão com a própria feminilidade.
                </p>
                <p>
                  Nossa curadoria é pensada para acompanhar momentos simples e especiais, com
                  escolhas que unem delicadeza, cuidado e beleza natural. Tudo de forma próxima,
                  elegante e fácil de viver no dia a dia.
                </p>
              </div>
              <div className="mt-10 grid grid-cols-1 gap-6 border-t border-border/30 pt-8 text-center sm:mt-12 sm:grid-cols-3 sm:gap-8 sm:text-left">
                {["Autocuidado", "Presença", "Delicadeza"].map((value, i) => (
                  <div key={value}>
                    <span className="block text-primary text-xl mb-2 italic font-display">
                      0{i + 1}.
                    </span>
                    <span className="text-[10px] uppercase tracking-widest text-foreground">
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
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <ScrollReveal>
            <div className="panel-premium flex flex-col items-center gap-10 border border-border/20 bg-surface p-6 sm:gap-12 sm:p-8 md:flex-row md:gap-16 md:p-20">
              <div className="flex-1 order-2 md:order-1">
                <span className="text-primary text-xs tracking-[0.3em] uppercase mb-4 block">
                  Curadoria FADARY
                </span>
                <h2 className="mb-6 text-4xl text-foreground md:text-6xl">Seleção em Destaque</h2>
                <p className="mb-8 text-muted-foreground font-light leading-[1.82]">
                  Uma seleção pensada para acompanhar a rotina de beleza com leveza, cuidado e
                  feminilidade. Cada referência é escolhida para inspirar momentos de autocuidado
                  e tornar o dia a dia mais bonito e agradável.
                </p>
                <div className="mb-10 text-lg font-light italic text-foreground md:text-2xl">
                  Novas seleções chegam aos poucos, sempre com disponibilidade sob consulta.
                </div>
                <Link
                  to={APP_PATHS.products}
                  className="btn-premium inline-flex w-full text-foreground sm:w-auto"
                >
                  Conhecer a Seleção
                </Link>
              </div>
              <div className="flex-1 order-1 md:order-2 relative">
                <div className="flex aspect-square w-full items-center justify-center bg-gradient-to-tr from-background to-secondary p-6 shadow-2xl sm:p-10 md:p-12">
                  <div className="w-full h-full border border-primary/20 flex items-center justify-center relative overflow-hidden">
                    <img
                      src={zenithBlack}
                      alt="Seleção em destaque da curadoria FADARY"
                      className="w-3/4 object-contain"
                      width={1024}
                      height={1024}
                      loading="lazy"
                      decoding="async"
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
        <div className="max-w-4xl mx-auto px-5 sm:px-6">
          <ScrollReveal>
            <div className="text-center">
              <Quote className="w-10 h-10 text-primary/30 mx-auto mb-8" />
            </div>
          </ScrollReveal>
          <div className="space-y-14 sm:space-y-16 md:space-y-20">
            {testimonials.map((t, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <div className="text-center">
                  <p className="mb-6 text-lg font-light italic leading-relaxed text-foreground sm:text-xl md:text-2xl">
                    "{t.text}"
                  </p>
                  <span className="text-xs tracking-[0.3em] uppercase text-primary">
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
          <div className="max-w-3xl mx-auto px-5 text-center sm:px-6">
            <h2 className="mb-8 text-3xl text-foreground md:text-5xl">Conheça a FADARY</h2>
            <p className="mb-12 text-muted-foreground font-light leading-[1.82]">
              Estamos construindo uma marca pensada para acompanhar sua rotina de autocuidado com
              leveza, beleza natural e um olhar acolhedor para o bem-estar feminino. Fale conosco
              e conheça mais de perto a essência da FADARY.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row sm:gap-6">
              <a
                href={createWhatsAppLink(whatsappMessages.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-premium w-full text-foreground sm:w-auto"
              >
                Falar com a FADARY
              </a>
              <a
                href={CONTACTS.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="subtle-link-cta flex min-h-[3rem] w-full items-center justify-center gap-2 border border-border/30 px-6 py-3 text-[10px] tracking-[0.2em] uppercase text-foreground hover-gold sm:w-auto sm:px-8"
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
