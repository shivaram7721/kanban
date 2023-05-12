import { useState } from "react";
import style from "./AddListButton.module.css";
import AddIcon from "@mui/icons-material/Add";

export default function AddListButton(props) {
  const [show, setShow] = useState(true);

  return (
    <>
      <button className={style.glassButton} onClick={props.onClick}>
        <AddIcon />
        Add a List
      </button>
    </>
  );
}
