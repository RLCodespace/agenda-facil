import Link from "next/link";
import styles from "./Footer.module.css";

const COLUMNS = [
  {
    title: "Produto",
    links: [
      { href: "/", label: "Início" },
      { href: "/precos", label: "Preços" },
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
        <span className={styles.wordmark}>
          agenda<span className={styles.dot}>·</span>fácil
        </span>
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
        O pagamento das reservas é feito diretamente com o proprietário do
        negócio — não intermediamos nem armazenamos valores.
      </p>
    </footer>
  );
}
