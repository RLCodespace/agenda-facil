"use client";

import styles from "./Topbar.module.css";

interface TopbarProps {
  onMenuClick: () => void;
  menuOpen: boolean;
}

export function Topbar({ onMenuClick, menuOpen }: TopbarProps) {
  return (
    <header className={styles.topbar}>
      <button
        type="button"
        className={styles.menuTrigger}
        aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
        aria-expanded={menuOpen}
        onClick={onMenuClick}
      >
        {menuOpen ? "Fechar" : "Menu"}
      </button>
      <span className={styles.businessName}>Seu Negocio</span>
      <span className={styles.avatar} aria-hidden="true">
        SN
      </span>
    </header>
  );
}
