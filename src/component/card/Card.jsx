import styles from "./Card.module.css";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
// import AddListButton from '../button/addListButton/AddListButton';
import { IoMdAdd } from "react-icons/io";
import { TbTemplate } from "react-icons/tb";
import { Tooltip } from "@mui/material";
import { useState } from "react";

export function Card() {

    const [input, setInput] = useState('add Title');

    function handleTitle(e) {
        setInput(e.target.value);
    }
    console.log(input)


  return (
    <div className={styles.cardContainer}>
      <div className={styles.titleContainer}>
        <p className={styles.cardTitle} onChange={handleTitle} >{input}</p>
        <HiOutlineDotsHorizontal className={styles.dotsIcon}/>
      </div>

      <div className={styles.addCardBtn}>
        <div className={styles.cardBtn}>
          <IoMdAdd className={styles.addIcon} />
          <p className={styles.addBtn}>Add a card</p>
        </div>
        <Tooltip title="create from template">
          <div className={styles.templateBtn}>
            <TbTemplate />
          </div>
        </Tooltip>
      </div>
    </div>
  );
}
