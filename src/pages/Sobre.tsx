import ScrollReveal from "@/components/ScrollReveal";
import aboutStory from "@/assets/about-story.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const values = [
  {
    title: "Curadoria",
    description:
      "Cada escolha parte de um olhar apurado para beleza, sensibilidade e sofisticação. A FADARY constrói sua identidade com intenção, não com excesso.",
  },
  {
    title: "Essência Feminina",
    description:
      "A marca nasce para celebrar a feminilidade em suas nuances: delicadeza, força, brilho natural e a liberdade de se reconhecer em sua própria presença.",
  },
  {
    title: "Presença",
    description:
      "Mais do que aparência, acreditamos na beleza como estado de espírito. O autocuidado ganha valor quando desperta confiança, calma e autenticidade.",
  },
  {
    title: "Experiência",
    description:
      "Do primeiro contato ao ritual escolhido, tudo na FADARY busca criar uma experiência envolvente, elegante e acolhedora.",
  },
];

const Sobre = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="section-spacing relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background z-10" />
          <img src={heroBg} alt="" className="w-full h-full object-cover opacity-30" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <span className="text-xs tracking-[0.5em] text-primary uppercase mb-4 block font-body">
              Nossa Essência
            </span>
            <h1 className="text-4xl md:text-7xl mb-8 text-foreground">Sobre a FADARY</h1>
            <p className="text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto font-body">
              FADARY nasce de uma visão sensível sobre beleza, feminilidade e presença. Uma marca
              em construção, guiada pelo desejo de transformar o autocuidado em uma experiência
              sofisticada, leve e cheia de significado.
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
              />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div>
              <h2 className="text-3xl mb-8 text-foreground">O Significado de FADARY</h2>
              <div className="space-y-6 text-muted-foreground font-light leading-relaxed font-body">
                <p>
                  O nome FADARY carrega uma atmosfera de encanto, brilho e delicadeza. Ele evoca
                  a mulher que encontra beleza na própria essência e transforma o cotidiano em um
                  ritual de presença.
                </p>
                <p>
                  A marca surge menos como um catálogo pronto e mais como uma visão: reunir
                  referências, escolhas e experiências que traduzam feminilidade com elegância,
                  autenticidade e sensibilidade.
                </p>
                <p>
                  Em vez de afirmar uma história já concluída, a FADARY assume seu momento com
                  honestidade. Está em construção, refinando sua curadoria e sua voz para criar
                  uma relação verdadeira com mulheres que valorizam autoestima, estilo e brilho
                  natural.
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
              "Construir uma marca feminina premium em que cada detalhe expresse elegância,
              presença e experiência, valorizando a beleza como um reflexo do que a mulher sente
              e escolhe para si."
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
