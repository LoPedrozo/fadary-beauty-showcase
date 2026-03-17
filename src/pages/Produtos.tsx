import { MessageCircle } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import zenithBlack from "@/assets/zenith-black.jpg";
import productSerum from "@/assets/product-serum.jpg";
import productCleanser from "@/assets/product-cleanser.jpg";
import productEyeCream from "@/assets/product-eye-cream.jpg";

const products = [
  {
    name: "Ritual Noturno",
    category: "Seleção em destaque",
    description:
      "Uma referência para momentos de pausa, textura envolvente e brilho sereno ao fim do dia.",
    availability: "Sob consulta",
    image: zenithBlack,
    featured: true,
  },
  {
    name: "Luminosidade Essencial",
    category: "Em curadoria",
    description:
      "Seleções pensadas para realçar viço, leveza e aquela sensação de pele bem cuidada.",
    availability: "Novidades em breve",
    image: productSerum,
    featured: false,
  },
  {
    name: "Limpeza Delicada",
    category: "Em curadoria",
    description:
      "Referências para um início de ritual elegante, com cuidado suave e sensação de frescor.",
    availability: "Sob consulta",
    image: productCleanser,
    featured: false,
  },
  {
    name: "Cuidado para o Olhar",
    category: "Seleção especial",
    description:
      "Uma inspiração para escolhas que valorizam expressão, delicadeza e presença em cada detalhe.",
    availability: "Em atualização",
    image: productEyeCream,
    featured: false,
  },
];

const Produtos = () => {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="section-spacing">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <span className="text-xs tracking-[0.5em] text-primary uppercase mb-4 block font-body">
              Curadoria FADARY
            </span>
            <h1 className="text-4xl md:text-7xl mb-8 text-foreground">Seleção FADARY</h1>
            <div className="w-12 h-[1px] bg-primary mx-auto mb-8" />
            <p className="text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto font-body">
              Esta página reúne referências que traduzem a atmosfera da FADARY. Nossa curadoria
              está em construção, com escolhas guiadas por feminilidade, brilho natural e uma
              experiência de beleza sofisticada.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Selection */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="bg-surface border border-border/20 p-8 md:p-20 flex flex-col md:flex-row gap-16 items-center">
              <div className="flex-1 order-2 md:order-1">
                <span className="text-primary text-xs tracking-[0.3em] uppercase mb-4 block font-body">
                  Curadoria em destaque
                </span>
                <h2 className="text-4xl md:text-6xl mb-6 text-foreground">{products[0].name}</h2>
                <p className="text-muted-foreground mb-4 font-light leading-relaxed font-body">
                  {products[0].description}
                </p>
                <p className="text-xs text-muted-foreground mb-8 uppercase tracking-wider font-body">
                  {products[0].category}
                </p>
                <div className="text-xl md:text-2xl mb-10 font-light italic text-foreground font-body">
                  {products[0].availability}
                </div>
                <a
                  href="https://wa.me/5511999999999?text=Olá! Quero conhecer a seleção em destaque da FADARY."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-premium inline-flex items-center gap-2 text-foreground"
                >
                  <MessageCircle className="w-4 h-4" />
                  Falar sobre a curadoria
                </a>
              </div>
              <div className="flex-1 order-1 md:order-2">
                <div className="aspect-square bg-gradient-to-tr from-background to-secondary flex items-center justify-center p-8 shadow-2xl border border-border/10">
                  <img
                    src={zenithBlack}
                    alt="Seleção em destaque da curadoria FADARY"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Product Grid */}
      <section className="section-spacing bg-surface-elevated">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-20">
              <h2 className="text-3xl mb-4 text-foreground">Outras Referências</h2>
              <div className="w-12 h-[1px] bg-primary mx-auto" />
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-12">
            {products.slice(1).map((product, i) => (
              <ScrollReveal key={product.name} delay={i * 0.1}>
                <div className="group cursor-pointer">
                  <div className="aspect-[3/4] bg-surface mb-6 overflow-hidden relative border border-border/20">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    />
                  </div>
                  <h3 className="text-lg mb-2 text-foreground">{product.name}</h3>
                  <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wider font-body">
                    {product.category}
                  </p>
                  <p className="text-sm text-muted-foreground mb-4 font-light font-body">
                    {product.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-primary font-body">{product.availability}</span>
                    <a
                      href={`https://wa.me/5511999999999?text=Olá! Quero saber mais sobre a referência ${product.name} da curadoria FADARY.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] tracking-widest uppercase border-b border-primary pb-1 text-foreground hover-gold font-body"
                    >
                      Consultar
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Produtos;
