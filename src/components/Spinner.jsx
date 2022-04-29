import React from "react";
import styles from "../styles/Spinner.module.css";
import { ImSpinner10 } from "react-icons/im";

const Spinner = () => {
  return (
    <div className={styles.spinner} style={{ height: "32rem" }}>
      <ImSpinner10 className={styles.spinning} size="130px" color="#e91e63" />
    </div>
  );
};

export default Spinner;
