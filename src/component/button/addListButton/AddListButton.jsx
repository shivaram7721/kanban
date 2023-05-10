import React from "react";
import style from "./AddListButton.module.css";
import AddIcon from "@mui/icons-material/Add";

export default function AddListButton() {
  return (
    <>
      <button className={style.glassButton}>
        <AddIcon />
        Add a List
      </button>
    </>
  );
}
