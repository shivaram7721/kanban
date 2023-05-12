import {useState} from "react";
import style from "./AddListButton.module.css";
import AddIcon from "@mui/icons-material/Add";
import { Card } from "../../card/Card";

export default function AddListButton() {
  const [show, setShow] = useState(true);

  function handleAddList() {
    setShow(false);
  }
  return (
    <>
      <button className={style.glassButton} onClick={handleAddList}>
        <AddIcon />
        Add a List
      </button>

      {show?"":<Card />}
    </>
  );
}
