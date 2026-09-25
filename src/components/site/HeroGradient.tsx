import styles from "./HeroGradient.module.css";

export function HeroGradient() {
  return (
    <div className={styles.backdrop} aria-hidden="true">
      <span className={`${styles.glow} ${styles.glowPrimary}`} />
      <span className={`${styles.glow} ${styles.glowHoney}`} />
      <span className={`${styles.glow} ${styles.glowSoft}`} />
      <span className={styles.grain} />
    </div>
  );
}
