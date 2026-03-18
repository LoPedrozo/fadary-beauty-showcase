import { afterEach, describe, expect, it } from "vitest";
import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import App from "@/App";
import { CONTACTS, createWhatsAppLink, whatsappMessages } from "@/lib/contact";

const renderAt = (path: string) => {
  window.history.pushState({}, "", path);
  return render(<App />);
};

afterEach(() => {
  cleanup();
});

describe("routing", () => {
  it.each([
    ["/", /^FADARY$/i],
    ["/sobre", /Sobre a FADARY/i],
    ["/produtos", /Seleção FADARY/i],
    ["/contato", /Fale com a Fadary/i],
    ["/rota-inexistente", /^404$/i],
  ])("renders %s", (path, heading) => {
    renderAt(path);

    expect(screen.getByRole("heading", { level: 1, name: heading })).toBeInTheDocument();
  });
});

describe("navigation and links", () => {
  it("uses the registered internal routes in navigation", () => {
    renderAt("/");

    expect(screen.getByRole("link", { name: "Início" })).toHaveAttribute("href", "/");
    expect(screen.getByRole("link", { name: "Sobre" })).toHaveAttribute("href", "/sobre");
    expect(screen.getByRole("link", { name: "Curadoria" })).toHaveAttribute("href", "/produtos");
    expect(screen.getByRole("link", { name: "Contato" })).toHaveAttribute("href", "/contato");
  });

  it("exposes valid external contact links", () => {
    renderAt("/contato");

    expect(screen.getByRole("link", { name: /iniciar conversa/i })).toHaveAttribute(
      "href",
      createWhatsAppLink(whatsappMessages.attendance),
    );
    expect(screen.getByRole("link", { name: /@fadarybeauty/i })).toHaveAttribute(
      "href",
      CONTACTS.instagramUrl,
    );
    expect(screen.getByRole("link", { name: new RegExp(CONTACTS.email, "i") })).toHaveAttribute(
      "href",
      `mailto:${CONTACTS.email}`,
    );
  });

  it("does not render placeholder anchor links", () => {
    renderAt("/");

    expect(document.querySelector('a[href="#"]')).not.toBeInTheDocument();
  });

  it("closes the mobile menu after navigation", async () => {
    renderAt("/");

    const toggle = screen.getByRole("button", { name: /abrir menu/i });
    fireEvent.click(toggle);

    expect(toggle).toHaveAttribute("aria-expanded", "true");

    const contatoLinks = screen.getAllByRole("link", { name: "Contato" });
    fireEvent.click(contatoLinks[contatoLinks.length - 1]);

    await waitFor(() => {
      expect(window.location.pathname).toBe("/contato");
      expect(screen.getByRole("button", { name: /abrir menu/i })).toHaveAttribute(
        "aria-expanded",
        "false",
      );
    });
  });

  it("labels footer social links with their real destinations", () => {
    renderAt("/");

    expect(screen.getByRole("link", { name: /instagram da fadary/i })).toHaveAttribute(
      "href",
      CONTACTS.instagramUrl,
    );
    expect(screen.getByRole("link", { name: /whatsapp da fadary/i })).toHaveAttribute(
      "href",
      createWhatsAppLink(whatsappMessages.attendance),
    );
  });
});
