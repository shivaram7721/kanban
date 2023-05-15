import React from "react";
import styles from "./Nav.module.css";
import { AiOutlineStar } from "react-icons/ai";
import { AiOutlineLock } from "react-icons/ai";
import { BiRocket } from "react-icons/bi";
import { AiFillThunderbolt } from "react-icons/ai";
import { BsFilter } from "react-icons/bs";

export default function Nav() {
  return (
    <nav className={styles.navContainer}>
      <div className={styles.leftSide}>
        <h3 contentEditable>Home task Managment</h3>
        <AiOutlineStar cursor='pointer' fontSize='1.4rem' color="white" />
        <button className={styles.pBtn}>
          <AiOutlineLock fontSize='1.4rem' color="white"/>
          <p>Private</p>
        </button>
        <button className={styles.boardBtn}>Board</button>
      </div>
      <div className={styles.rightSide}>
        <button className={styles.pBtn}>
          <BiRocket fontSize='1.4rem' color="white" /> <p>Power-Ups</p>
        </button>
        <button className={styles.pBtn}>
          <AiFillThunderbolt fontSize='1.4rem' color="white" /> <p>Automation</p>
        </button>
        <button className={styles.pBtn}>
          <BsFilter fontSize='1.4rem' color="white" /> <p>Filter</p>
        </button>
      </div>
    </nav>
  );
}
