import { useState } from "react";
import { GrSort } from "react-icons/gr";
import styles from "./Activity.module.css";

export default function Activity() {
  const [isComment, setComment] = useState(true);
  return (
    <div className={styles.container4}>
      <span className={styles.div2}>
        <GrSort style={{ fontSize: "1.3rem", marginRight: "1.1rem" }} />
        <p className={styles.para2}>Activity</p>
      </span>
      <span className={styles.btn3}>
        <button
          onClick={() => setComment(!isComment)}
          style={{ padding: "0.7rem" }}
        >
          {isComment ? "Show Details" : "Hide Details"}
        </button>
      </span>
    </div>
  );
}
