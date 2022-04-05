import styles from './card.module.css';

export default function Card({ child, color, isSmallText }) {
  return (
    <div
      className={`${styles.container} ${
        isSmallText ? styles.smallText : styles.bigText
      }`}
      style={{ backgroundColor: color }}
    >
      <div className={styles.child}>{child}</div>
    </div>
  );
}
