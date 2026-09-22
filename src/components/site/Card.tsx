import type { ReactNode } from "react";
import styles from "./Card.module.css";

type CardVariant = "feature" | "pricing";

interface CardProps {
  variant?: CardVariant;
  children: ReactNode;
}

export function Card({ variant = "feature", children }: CardProps) {
  return <div className={`${styles.card} ${styles[variant]}`}>{children}</div>;
}
