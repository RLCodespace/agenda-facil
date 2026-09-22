import styles from "./SectionEyebrow.module.css";

export function SectionEyebrow({ children }: { children: string }) {
  return <p className={styles.eyebrow}>{children}</p>;
}
