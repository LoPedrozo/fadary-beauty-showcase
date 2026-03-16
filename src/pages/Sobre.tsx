import ScrollReveal from "@/components/ScrollReveal";
import aboutStory from "@/assets/about-story.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const values = [
  {
    title: "Pureza",
    description:
      "Ingredientes criteriosamente selecionados, livres de toxinas. Cada fórmula é uma declaração de respeito à sua pele.",
  },
  {
    title: "Eficácia",
    description:
      "Ciência avançada combinada com ativos raros para resultados visíveis e duradouros que transformam a rotina de cuidados.",
  },
  {
    title: "Luxo Consciente",
    description:
      "Sofisticação com responsabilidade. Embalagens sustentáveis e processos éticos em cada etapa da produção.",
  },
  {
    title: "Empoderamento",
    description:
      "Mais do que cosméticos, entregamos confiança. Cada produto é uma ferramenta para você se sentir plena.",
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
              Nascemos da crença de que a beleza é um ato de poder. Cada formulação é um convite
              para que você se reconheça na sua versão mais extraordinária.
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
              <h2 className="text-3xl mb-8 text-foreground">Nossa História</h2>
              <div className="space-y-6 text-muted-foreground font-light leading-relaxed font-body">
                <p>
                  A FADARY foi fundada com uma visão clara: criar cosméticos que transcendem o
                  ordinário. Inspirada nos rituais de beleza milenares e impulsionada pela
                  biotecnologia mais avançada, cada produto carrega a essência da exclusividade.
                </p>
                <p>
                  Nossa jornada começou com a busca por ingredientes raros — minerais vulcânicos
                  da Islândia, peptídeos de ouro do Japão, extratos botânicos dos Alpes suíços.
                  Cada componente é selecionado não apenas pela eficácia, mas pela história que
                  carrega.
                </p>
                <p>
                  Hoje, a FADARY é sinônimo de excelência para mulheres que entendem que o
                  autocuidado é o investimento mais nobre que se pode fazer.
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
            <h2 className="text-3xl md:text-5xl mb-8 text-foreground">Nossa Missão</h2>
            <div className="w-12 h-[1px] bg-primary mx-auto mb-12" />
            <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed italic font-body">
              "Empoderar mulheres através da beleza consciente, oferecendo cosméticos premium que
              celebram a individualidade, respeitam a ciência e elevam a autoestima a um patamar
              de excelência."
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
