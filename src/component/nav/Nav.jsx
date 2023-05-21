/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "./Nav.module.css";
import { AiOutlineStar } from "react-icons/ai";
import { AiOutlineLock } from "react-icons/ai";
import { AiOutlineUnlock } from "react-icons/ai";
import { BiRocket } from "react-icons/bi";
import { AiFillThunderbolt } from "react-icons/ai";
import { BsFilter } from "react-icons/bs";
import { BsFillImageFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { RiUserShared2Line } from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";

export default function Nav(props) {
  const [lock, setLock] = useState(true);
  function handleLock() {
    setLock(!lock);
  }

  return (
    <nav className={styles.navContainer}>
      <div className={styles.leftSide}>
        <h3 contentEditable>Home task Managment</h3>
        <AiOutlineStar cursor="pointer" fontSize="1.4rem" color="white" />
        {lock ? (
          <button onClick={handleLock} className={styles.pBtn}>
            <AiOutlineLock fontSize="1.2rem" color="white" />
            <p>Private</p>
          </button>
        ) : (
          <button onClick={handleLock} className={styles.pBtn}>
            <AiOutlineUnlock fontSize="1.2rem" color="white" />
            <p>Public</p>
          </button>
        )}
        <button className={styles.boardBtn}>Board</button>
        <button className={styles.backGbtn} onClick={props.changeImg}>
          Change Background <BsFillImageFill />{" "}
        </button>
      </div>
      <div className={styles.rightSide}>
        <button className={`${styles.pBtn} ${styles.powerUp}`}>
          <BiRocket fontSize="1.4rem" /> <p>Power-Ups</p>
        </button>
        <button className={`${styles.pBtn} ${styles.bolt}`}>
          <AiFillThunderbolt fontSize="1.4rem" /> <p>Automation</p>
        </button>
        <button className={styles.pBtn}>
          <BsFilter fontSize="1.4rem" color="white" /> <p>Filter</p>
        </button>
        <div className={styles.vl}></div>
        <CgProfile fontSize="1.6rem" color="white" />
        <button
          style={{ backgroundColor: "white", marginLeft: "0.8rem" }}
          className={styles.shareBtn}
        >
          {" "}
          <RiUserShared2Line /> Share{" "}
        </button>
        <BsThreeDots
          fontSize="1.4rem"
          className={styles.threeDots}
          color="white"
        />
      </div>
    </nav>
  );
}
