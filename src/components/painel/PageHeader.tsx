import { SectionEyebrow } from "@/components/site/SectionEyebrow";
import styles from "./PageHeader.module.css";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
}

export function PageHeader({ eyebrow, title }: PageHeaderProps) {
  return (
    <div className={styles.header}>
      <SectionEyebrow>{eyebrow}</SectionEyebrow>
      <h1 className={styles.title}>{title}</h1>
    </div>
  );
}
