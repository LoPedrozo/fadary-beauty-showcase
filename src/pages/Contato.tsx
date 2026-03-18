import { ArrowRight, Instagram, Mail, MessageCircle } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { CONTACTS, createWhatsAppLink, whatsappMessages } from "@/lib/contact";

const Contato = () => {
  return (
    <div className="pt-20">
      <section className="section-spacing bg-surface-elevated">
        <div className="max-w-5xl mx-auto px-5 sm:px-6">
          <ScrollReveal>
            <div className="panel-premium mx-auto max-w-4xl border border-border/20 bg-surface px-5 py-10 text-center sm:px-8 sm:py-12 md:px-14 md:py-16">
              <h1 className="text-3xl text-foreground sm:text-4xl md:text-6xl">Fale com a Fadary</h1>
              <div className="w-12 h-[1px] bg-primary mx-auto my-8" />
              <p className="max-w-2xl mx-auto text-muted-foreground font-light leading-[1.82] font-body">
                Escolha o canal que fizer mais sentido para você. Estamos disponíveis para tirar
                dúvidas, apresentar a curadoria e acompanhar seu atendimento com proximidade.
              </p>

              <div className="mt-10 space-y-4 sm:mt-12 sm:space-y-5">
                <a
                  href={createWhatsAppLink(whatsappMessages.attendance)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-card contact-card-primary group block border border-primary/40 bg-gradient-to-br from-primary/15 via-primary/8 to-transparent px-5 py-7 sm:px-8 sm:py-8 md:px-10 md:py-10"
                >
                  <div className="contact-card-icon mx-auto mb-5 flex h-16 w-16 items-center justify-center border border-primary/30 bg-primary/10 group-hover:bg-primary">
                    <MessageCircle className="h-6 w-6 text-primary transition-colors duration-400 group-hover:text-primary-foreground" />
                  </div>
                  <div className="space-y-3">
                    <span className="block text-[10px] uppercase text-primary tracking-[0.35em] font-body">
                      WhatsApp
                    </span>
                    <span className="block break-words text-xl text-foreground font-body sm:text-2xl md:text-3xl">
                      {CONTACTS.whatsappDisplay}
                    </span>
                    <p className="text-sm text-muted-foreground font-body">
                      Atendimento rápido via WhatsApp
                    </p>
                    <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-foreground font-body">
                      Iniciar conversa <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </a>

                <div className="grid gap-4 sm:gap-5 md:grid-cols-2">
                  <a
                    href={CONTACTS.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-card group border border-border/30 bg-background/40 px-5 py-6 sm:px-6 sm:py-7"
                  >
                    <div className="contact-card-icon mx-auto mb-4 flex h-14 w-14 items-center justify-center border border-primary/20 group-hover:bg-primary group-hover:border-primary">
                      <Instagram className="h-5 w-5 text-foreground transition-colors duration-400 group-hover:text-primary-foreground" />
                    </div>
                    <span className="block text-[10px] uppercase text-muted-foreground tracking-[0.3em] font-body">
                      Instagram
                    </span>
                    <span className="mt-3 block text-base text-foreground font-body sm:text-lg">
                      {CONTACTS.instagramHandle}
                    </span>
                  </a>

                  <a
                    href={`mailto:${CONTACTS.email}`}
                    className="contact-card group border border-border/30 bg-background/40 px-5 py-6 sm:px-6 sm:py-7"
                  >
                    <div className="contact-card-icon mx-auto mb-4 flex h-14 w-14 items-center justify-center border border-primary/20 group-hover:bg-primary group-hover:border-primary">
                      <Mail className="h-5 w-5 text-foreground transition-colors duration-400 group-hover:text-primary-foreground" />
                    </div>
                    <span className="block text-[10px] uppercase text-muted-foreground tracking-[0.3em] font-body">
                      E-mail
                    </span>
                    <span className="mt-3 block break-all text-base text-foreground font-body sm:text-lg">
                      {CONTACTS.email}
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Contato;
