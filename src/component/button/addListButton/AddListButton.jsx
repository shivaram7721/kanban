import style from "./AddListButton.module.css";
import AddIcon from "@mui/icons-material/Add";

export default function AddListButton({ onClick }) {
  return (
    <>
      <button className={style.glassButton} onClick={onClick}>
        <AddIcon />
        Add a List
      </button>
    </>
  );
}
