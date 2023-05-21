/* eslint-disable react/prop-types */
import { GrSort } from "react-icons/gr";
import styles from "./Activity.module.css";

export default function Activity({ showCardDetail, isComment }) {
  return (
    <div className={styles.container4}>
      <span className={styles.div2}>
        <GrSort style={{ fontSize: "1.3rem", marginRight: "1.7rem" }} />
        <p className={styles.para2}>Activity</p>
      </span>
      <span className={styles.btn3}>
        <button onClick={showCardDetail} style={{ padding: "0.7rem", cursor:"pointer" }}>
          {isComment ? "Show Details" : "Hide Details"}
        </button>
      </span>
    </div>
  );
}
