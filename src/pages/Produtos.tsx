import { MessageCircle } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { createWhatsAppLink, whatsappMessages } from "@/lib/contact";
import zenithBlack from "@/assets/zenith-black.jpg";
import productSerum from "@/assets/product-serum.jpg";
import productCleanser from "@/assets/product-cleanser.jpg";
import productEyeCream from "@/assets/product-eye-cream.jpg";

const featuredProduct = {
  name: "Cuidado Noturno",
  category: "Em destaque",
  image: zenithBlack,
  description:
    "Um cuidado pensado para o fim do dia, quando a pele pede conforto, hidratação e uma pausa tranquila na rotina. A curadoria da FADARY reúne escolhas que ajudam a transformar esse momento em um gesto simples de autocuidado.",
  availability: "Disponibilidade sob consulta, com novas escolhas chegando em breve.",
};

const products = [
  {
    name: "Serum de Luminosidade",
    category: "Hidratação e viço",
    description:
      "Ideal para quem busca leveza, hidratação e um toque de luminosidade na rotina diária de cuidados com a pele.",
    availability: "Novidades em breve",
    image: productSerum,
  },
  {
    name: "Gel de Limpeza Suave",
    category: "Limpeza diária",
    description:
      "Uma escolha para limpar a pele com delicadeza, removendo impurezas sem abrir mão de conforto e frescor.",
    availability: "Sob consulta",
    image: productCleanser,
  },
  {
    name: "Cuidado para os Olhos",
    category: "Cuidado diário",
    description:
      "Perfeito para complementar a rotina com atenção extra a uma área delicada, trazendo leveza ao cuidado diário.",
    availability: "Em atualização",
    image: productEyeCream,
  },
];

const Produtos = () => {
  return (
    <div className="pt-20">
      <section className="section-spacing">
        <div className="max-w-4xl mx-auto px-5 text-center sm:px-6">
          <ScrollReveal>
            <span className="text-xs tracking-[0.5em] text-primary uppercase mb-4 block">
              Curadoria FADARY
            </span>
            <h1 className="mb-8 text-3xl text-foreground sm:text-4xl md:text-7xl">Seleção FADARY</h1>
            <div className="w-12 h-[1px] bg-primary mx-auto mb-8" />
            <p className="max-w-2xl mx-auto text-muted-foreground font-light leading-[1.82]">
              Uma seleção pensada para acompanhar a rotina de beleza e autocuidado da mulher. Aqui
              você encontra produtos e escolhas que valorizam hidratação, cuidado diário,
              bem-estar e beleza natural.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <ScrollReveal>
            <div className="panel-premium flex flex-col items-center gap-10 border border-border/20 bg-surface p-6 sm:gap-12 sm:p-8 md:flex-row md:gap-16 md:p-20">
              <div className="flex-1 order-2 md:order-1">
                <span className="text-primary text-xs tracking-[0.3em] uppercase mb-4 block">
                  Seleção em destaque
                </span>
                <h2 className="mb-6 text-4xl text-foreground md:text-6xl">{featuredProduct.name}</h2>
                <p className="mb-4 text-muted-foreground font-light leading-[1.82]">
                  {featuredProduct.description}
                </p>
                <p className="text-xs text-muted-foreground mb-8 uppercase tracking-wider">
                  {featuredProduct.category}
                </p>
                <div className="mb-10 text-xl font-light italic text-foreground md:text-2xl">
                  {featuredProduct.availability}
                </div>
                <a
                  href={createWhatsAppLink(whatsappMessages.selectionHighlight)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-premium inline-flex w-full items-center gap-2 text-foreground sm:w-auto"
                >
                  <MessageCircle className="w-4 h-4" />
                  Falar sobre esta seleção
                </a>
              </div>
              <div className="flex-1 order-1 md:order-2">
                <div className="relative flex aspect-square items-center justify-center border border-border/10 bg-gradient-to-tr from-background to-secondary p-6 shadow-2xl sm:p-8">
                  <img
                    src={featuredProduct.image}
                    alt={`${featuredProduct.name} da curadoria FADARY`}
                    className="w-full h-full object-contain"
                    width={1024}
                    height={1024}
                    decoding="async"
                  />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-spacing bg-surface-elevated">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <ScrollReveal>
            <div className="mb-14 text-center sm:mb-20">
              <h2 className="text-3xl mb-4 text-foreground">Outros Cuidados</h2>
              <div className="w-12 h-[1px] bg-primary mx-auto" />
            </div>
          </ScrollReveal>

          <div className="grid gap-8 sm:grid-cols-2 sm:gap-10 xl:grid-cols-3 xl:gap-12">
            {products.map((product, i) => (
              <ScrollReveal key={product.name} delay={i * 0.1}>
                <div className="product-card group">
                  <div className="product-card-visual aspect-[3/4] bg-surface mb-6 overflow-hidden relative border border-border/20">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="product-card-media w-full h-full object-cover grayscale group-hover:grayscale-0"
                      width={1024}
                      height={1024}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <h3 className="text-lg mb-2 text-foreground">{product.name}</h3>
                  <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wider">
                    {product.category}
                  </p>
                  <p className="mb-4 flex-1 text-sm text-muted-foreground font-light leading-[1.72]">
                    {product.description}
                  </p>
                  <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <span className="text-sm text-primary">{product.availability}</span>
                    <a
                      href={createWhatsAppLink(whatsappMessages.product(product.name))}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="subtle-link-cta text-[10px] tracking-widest uppercase border-b border-primary pb-1 text-foreground hover-gold"
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
