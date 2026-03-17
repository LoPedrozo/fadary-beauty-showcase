import { Instagram, Phone, MessageCircle } from "lucide-react";
import { useState, FormEvent } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { toast } from "sonner";

const Contato = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const contactMessage = [
      "Olá! Quero falar com a FADARY.",
      "",
      `Nome: ${name}`,
      `E-mail: ${email}`,
      "",
      "Mensagem:",
      message,
    ].join("\n");

    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(contactMessage)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    toast.success("Estamos abrindo o WhatsApp para continuar seu atendimento.");
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="section-spacing">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <span className="text-xs tracking-[0.5em] text-primary uppercase mb-4 block font-body">
              Atendimento FADARY
            </span>
            <h1 className="text-4xl md:text-7xl mb-8 text-foreground">Contato</h1>
            <div className="w-12 h-[1px] bg-primary mx-auto mb-8" />
            <p className="text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto font-body">
              Se você deseja conhecer a curadoria da FADARY, tirar dúvidas ou acompanhar as
              novidades da marca, estamos por aqui com um atendimento próximo, elegante e
              acolhedor.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-spacing bg-surface-elevated">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-24">
          <ScrollReveal>
            <div>
              <h2 className="text-3xl mb-8 text-foreground">Fale com a FADARY</h2>
              <p className="text-muted-foreground mb-12 font-light font-body">
                Escolha o canal que fizer mais sentido para você. Estamos disponíveis para
                conversar sobre referências em curadoria, disponibilidade e próximos lançamentos.
              </p>

              <div className="space-y-8">
                <a
                  href="https://wa.me/5511999999999?text=Olá! Quero conhecer a curadoria da FADARY."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-6 group"
                >
                  <div className="w-14 h-14 border border-primary/30 flex items-center justify-center group-hover:bg-primary transition-all duration-400">
                    <MessageCircle className="w-5 h-5 text-foreground group-hover:text-primary-foreground" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase text-muted-foreground tracking-widest font-body">
                      Atendimento
                    </span>
                    <span className="text-lg text-foreground font-body">+55 (11) 99999-9999</span>
                  </div>
                </a>

                <a
                  href="https://instagram.com/fadary.beauty"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-6 group"
                >
                  <div className="w-14 h-14 border border-primary/30 flex items-center justify-center group-hover:bg-primary transition-all duration-400">
                    <Instagram className="w-5 h-5 text-foreground group-hover:text-primary-foreground" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase text-muted-foreground tracking-widest font-body">
                      Instagram
                    </span>
                    <span className="text-lg text-foreground font-body">@fadary.beauty</span>
                  </div>
                </a>

                <a
                  href="tel:+5511999999999"
                  className="flex items-center gap-6 group"
                >
                  <div className="w-14 h-14 border border-primary/30 flex items-center justify-center group-hover:bg-primary transition-all duration-400">
                    <Phone className="w-5 h-5 text-foreground group-hover:text-primary-foreground" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase text-muted-foreground tracking-widest font-body">
                      Contato direto
                    </span>
                    <span className="text-lg text-foreground font-body">+55 (11) 99999-9999</span>
                  </div>
                </a>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <form
              onSubmit={handleSubmit}
              className="space-y-6 bg-surface p-10 border border-border/20"
            >
              <h3 className="text-xl mb-3 text-foreground">Escreva para a FADARY</h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed font-body">
                Ao enviar, abriremos o WhatsApp com sua mensagem preenchida para continuar o
                atendimento.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="SEU NOME"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="bg-transparent border-b border-border py-4 text-xs focus:border-primary outline-none transition-all text-foreground placeholder:text-muted-foreground font-body tracking-widest"
                />
                <input
                  type="email"
                  placeholder="SEU E-MAIL"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-transparent border-b border-border py-4 text-xs focus:border-primary outline-none transition-all text-foreground placeholder:text-muted-foreground font-body tracking-widest"
                />
              </div>
              <textarea
                placeholder="COMO A FADARY PODE TE ATENDER?"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="w-full bg-transparent border-b border-border py-4 text-xs focus:border-primary outline-none transition-all resize-none text-foreground placeholder:text-muted-foreground font-body tracking-widest"
              />
              <button type="submit" className="btn-premium w-full mt-8 text-foreground">
                Continuar no WhatsApp
              </button>
            </form>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Contato;
