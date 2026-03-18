export const APP_PATHS = {
  home: "/",
  about: "/sobre",
  products: "/produtos",
  contact: "/contato",
} as const;

export const NAV_LINKS = [
  { label: "Início", path: APP_PATHS.home },
  { label: "Sobre", path: APP_PATHS.about },
  { label: "Curadoria", path: APP_PATHS.products },
  { label: "Contato", path: APP_PATHS.contact },
] as const;
