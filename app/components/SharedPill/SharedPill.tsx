import styles from "./SharedPill.module.css";

type PillType = {
  text: string;
};

export function SharedPill(pill: PillType) {
  return <div className={styles["container"]}>{pill.text}</div>;
}
