/* eslint-disable react/prop-types */

import style from "./AddListButton.module.css";
import AddIcon from "@mui/icons-material/Add";

export default function AddListButton(props) {
  return (
    <>
      <button className={style.glassButton} onClick={props.onClick}>
        <AddIcon />
        Add a List
      </button>
    </>
  );
}
