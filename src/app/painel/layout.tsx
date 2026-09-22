"use client";

import type { ReactNode } from "react";
import { useState } from "react";
import { Sidebar } from "@/components/painel/Sidebar";
import { Topbar } from "@/components/painel/Topbar";
import styles from "./layout.module.css";

export default function PainelLayout({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={styles.shell}>
      <Sidebar open={menuOpen} onNavigate={() => setMenuOpen(false)} />
      {menuOpen && (
        <button
          type="button"
          className={styles.overlay}
          aria-label="Fechar menu"
          onClick={() => setMenuOpen(false)}
        />
      )}
      <div className={styles.content}>
        <Topbar menuOpen={menuOpen} onMenuClick={() => setMenuOpen((v) => !v)} />
        <main className={styles.main}>{children}</main>
      </div>
    </div>
  );
}
