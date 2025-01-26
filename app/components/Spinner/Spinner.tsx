import styles from "./Spinner.module.css";

export default function Spinner() {
  return (
    <div className={styles["loader-container"]}>
      <span className={styles["loader"]}></span>
    </div>
  );
}
