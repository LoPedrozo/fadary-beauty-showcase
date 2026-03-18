export const CONTACTS = {
  whatsappNumber: "5541997349187",
  whatsappDisplay: "+55 (41) 99734-9187",
  phoneHref: "tel:+5541997349187",
  instagramUrl: "https://www.instagram.com/fadarybeauty/",
  instagramHandle: "@fadarybeauty",
  email: "mayara2204@gmail.com",
} as const;

export const whatsappMessages = {
  general: "Olá! Vim pelo site da FADARY e quero saber mais sobre a marca.",
  curadoria: "Olá! Vim pelo site da FADARY e quero conhecer a curadoria.",
  selectionHighlight:
    "Olá! Vim pelo site da FADARY e quero saber mais sobre a seleção em destaque.",
  attendance: "Olá! Vim pelo site da FADARY e gostaria de atendimento.",
  product: (productName: string) =>
    `Olá! Vim pelo site da FADARY e quero saber mais sobre ${productName}.`,
} as const;

export const createWhatsAppLink = (message: string) =>
  `https://wa.me/${CONTACTS.whatsappNumber}?text=${encodeURIComponent(message)}`;
