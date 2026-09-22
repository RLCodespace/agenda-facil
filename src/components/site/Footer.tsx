import Link from "next/link";
import styles from "./Footer.module.css";

const COLUMNS = [
  {
    title: "Produto",
    links: [
      { href: "/", label: "Inicio" },
      { href: "/precos", label: "Precos" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { href: "/sobre", label: "Sobre" },
      { href: "/contato", label: "Contato" },
    ],
  },
];

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span className={styles.wordmark}>agenda-facil</span>
        <div className={styles.columns}>
          {COLUMNS.map((column) => (
            <div key={column.title} className={styles.column}>
              <span className={styles.columnTitle}>{column.title}</span>
              {column.links.map((link) => (
                <Link key={link.href} href={link.href} className={styles.link}>
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <p className={styles.legal}>
        agenda-facil e self-hosted. O pagamento das reservas e feito
        diretamente com o dono do negocio — nao intermediamos nem
        armazenamos valores.
      </p>
    </footer>
  );
}
