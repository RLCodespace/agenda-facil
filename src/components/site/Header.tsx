"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "./Button";
import styles from "./Header.module.css";

const NAV_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/precos", label: "Precos" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.row}>
        <Link href="/" className={styles.wordmark} onClick={() => setOpen(false)}>
          agenda-facil
        </Link>
        <nav className={styles.nav}>
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className={styles.navLink}>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className={styles.desktopCta}>
          <Button href="/contato" variant="sm">
            Falar com a gente
          </Button>
        </div>
        <button
          type="button"
          className={styles.menuTrigger}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Fechar" : "Menu"}
        </button>
      </div>
      {open && (
        <nav className={styles.mobileNav}>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={styles.navLink}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Button href="/contato" variant="sm">
            Falar com a gente
          </Button>
        </nav>
      )}
    </header>
  );
}
