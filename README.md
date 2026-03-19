# Fadary Beauty Showcase

Site institucional de apresentação de marca, desenvolvido como projeto de portfólio com foco em design sofisticado, identidade visual consistente e boas práticas de desenvolvimento front-end.

**Deploy:** [fadary-beauty-showcase.vercel.app](https://fadary-beauty-showcase.vercel.app)

---

## Sobre o projeto

O Fadary Beauty Showcase simula a presença digital de uma marca de beleza e autocuidado feminino. O objetivo foi construir uma interface com nível de acabamento próximo ao de um projeto profissional real — com animações, responsividade, acessibilidade e testes automatizados.

O projeto foi criado para fins de portfólio e estudo, sem operação comercial ativa.

---

## Páginas

| Rota | Descrição |
|------|-----------|
| `/` | Hero, seção de destaque da curadoria e valores da marca |
| `/sobre` | História, missão e valores da FADARY |
| `/produtos` | Produto em destaque e grade de curadoria |
| `/contato` | Canais de contato: WhatsApp, Instagram e e-mail |

---

## Tecnologias

- **React 18** + **TypeScript**
- **Vite** — bundler e servidor de desenvolvimento
- **Tailwind CSS** — estilização por classes utilitárias
- **React Router v6** — roteamento client-side
- **Framer Motion** — animações declarativas
- **Vitest** + **Testing Library** — testes automatizados

---

## Como executar localmente

**Pré-requisitos:** Node.js 18+

```bash
# Clone o repositório
git clone https://github.com/pedrozo/fadary-beauty-showcase.git
cd fadary-beauty-showcase

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

Acesse `http://localhost:5173`.

### Scripts disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Build de produção |
| `npm run preview` | Prévia do build localmente |
| `npm test` | Executa os testes |
| `npm run lint` | Análise estática com ESLint |

---

## Testes

Testes automatizados com Vitest + Testing Library, cobrindo:

- Renderização correta de cada rota
- Integridade dos links de navegação internos
- Validade dos links externos de contato (WhatsApp, Instagram, e-mail)
- Comportamento do menu mobile (abertura, fechamento e acessibilidade)

```bash
npm test
```

---

## Estrutura do projeto

```
src/
├── assets/          # Imagens e recursos estáticos
├── components/      # Navbar, Footer, ScrollReveal, SiteToaster
├── config/          # Rotas centralizadas (navigation.ts)
├── lib/             # Links de contato centralizados (contact.ts)
├── pages/           # Index, Sobre, Produtos, Contato, NotFound
└── test/            # Testes de navegação e links
```

---

## Autor

**Lorenzo Garcia Pedrozo** — Estudante de Engenharia de Software

[LinkedIn](https://linkedin.com/in/lorenzo-pedrozo) · [GitHub](https://github.com/pedrozo)
