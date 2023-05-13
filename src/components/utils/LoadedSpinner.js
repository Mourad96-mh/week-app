import styles from "./LoadedSpinner.module.css";

const LoadedSpinner = () => {
  return (
    <div className={styles["spinner-container"]}>
      <div className={styles["loaded-spinner"]}></div>
    </div>
  );
};

export default LoadedSpinner;
