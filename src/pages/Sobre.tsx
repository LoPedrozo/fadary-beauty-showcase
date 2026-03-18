import ScrollReveal from "@/components/ScrollReveal";
import aboutStory from "@/assets/about-story.jpg";
import heroBg from "@/assets/hero-bg.jpg";
import heroBgMobile from "@/assets/hero-bg-mobile.jpg";

const values = [
  {
    title: "Curadoria",
    description:
      "Escolhas feitas com sensibilidade para acompanhar a rotina de beleza de forma leve, elegante e natural.",
  },
  {
    title: "Essência Feminina",
    description:
      "Uma forma de valorizar feminilidade, delicadeza e beleza real sem excessos.",
  },
  {
    title: "Presença",
    description:
      "Cuidar de si também é estar presente para o que faz bem, com mais calma, confiança e verdade.",
  },
  {
    title: "Autocuidado",
    description:
      "Pequenos gestos de cuidado que transformam a rotina em um momento de bem-estar.",
  },
];

const Sobre = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="section-spacing relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background z-10" />
          <picture className="block h-full w-full">
            <source media="(max-width: 767px)" srcSet={heroBgMobile} />
            <img
              src={heroBg}
              alt=""
              className="w-full h-full object-cover opacity-30"
              width={1920}
              height={1080}
              decoding="async"
            />
          </picture>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <span className="text-xs tracking-[0.5em] text-primary uppercase mb-4 block font-body">
              Nossa Essência
            </span>
            <h1 className="text-4xl md:text-7xl mb-8 text-foreground">Sobre a FADARY</h1>
            <p className="text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto font-body">
              FADARY nasce de um olhar delicado sobre beleza, feminilidade e autocuidado. Uma
              marca em construção, pensada para acompanhar a mulher com leveza, presença e
              bem-estar.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Story */}
      <section className="section-spacing bg-surface-elevated">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-24 items-center">
          <ScrollReveal>
            <div className="aspect-[4/5] overflow-hidden border border-border/30">
              <img
                src={aboutStory}
                alt="A história da FADARY"
                className="w-full h-full object-cover"
                width={1024}
                height={1024}
                loading="lazy"
                decoding="async"
              />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div>
              <h2 className="text-3xl mb-8 text-foreground">O Significado de FADARY</h2>
              <div className="space-y-6 text-muted-foreground font-light leading-relaxed font-body">
                <p>
                  O nome FADARY traduz delicadeza, feminilidade e beleza natural. Ele inspira uma
                  marca que valoriza o cuidado com a mulher de forma leve, elegante e próxima.
                </p>
                <p>
                  A FADARY nasce como uma curadoria em construção, reunindo referências e escolhas
                  que fazem sentido para a rotina de autocuidado. Tudo com sensibilidade, clareza
                  e um olhar atento aos pequenos detalhes.
                </p>
                <p>
                  Mais do que apresentar respostas prontas, a marca cresce com verdade, escuta e
                  intenção. É um caminho construído para mulheres que valorizam bem-estar,
                  presença e uma beleza real.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission */}
      <section className="section-spacing">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl mb-8 text-foreground">Nossa Visão</h2>
            <div className="w-12 h-[1px] bg-primary mx-auto mb-12" />
            <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed italic font-body">
              "Construir uma marca feminina de beleza e autocuidado em que cada detalhe transmita
              delicadeza, presença e bem-estar, valorizando a beleza natural no dia a dia."
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Values */}
      <section className="section-spacing bg-surface-elevated">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-4xl mb-4 text-foreground">Nossos Valores</h2>
              <div className="w-12 h-[1px] bg-primary mx-auto" />
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-12">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 0.1}>
                <div className="border border-border/20 p-10 bg-surface hover:border-primary/30 transition-colors duration-500">
                  <span className="block text-primary text-xl mb-4 italic font-display">
                    0{i + 1}.
                  </span>
                  <h3 className="text-xl mb-4 text-foreground">{v.title}</h3>
                  <p className="text-muted-foreground font-light leading-relaxed font-body">
                    {v.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sobre;
