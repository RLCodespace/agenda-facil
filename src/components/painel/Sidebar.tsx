"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Sidebar.module.css";

const NAV_LINKS = [
  { href: "/painel", label: "Dashboard" },
  { href: "/painel/agendamentos", label: "Agendamentos" },
  { href: "/painel/financeiro", label: "Financeiro" },
  { href: "/painel/clientes", label: "Clientes" },
];

interface SidebarProps {
  open: boolean;
  onNavigate?: () => void;
}

export function Sidebar({ open, onNavigate }: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside className={`${styles.sidebar} ${open ? styles.open : ""}`}>
      <Link href="/" className={styles.wordmark}>
        agenda-fácil
      </Link>
      <nav className={styles.nav}>
        {NAV_LINKS.map((link) => {
          const active =
            link.href === "/painel"
              ? pathname === "/painel"
              : pathname.startsWith(link.href);

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.navLink} ${active ? styles.active : ""}`}
              onClick={onNavigate}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
