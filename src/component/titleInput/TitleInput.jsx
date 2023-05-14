import styles from "./TitleInput.module.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

export default function TitleInput({ onChange, onClick }) {
  return (
    <div className={styles.addCardContainer}>
      <div className={styles.textBox}>
        <TextField
          type="text"
          placeholder="add card"
          onChange={onChange}
          //   value={input}
          sx={{ width: "18vw" }}
          size="small"
          multiline
        />
      </div>
      <div className={styles.addCardBtn}>
        <div className={styles.btnContainer}>
          <Button
            onClick={onClick}
            variant="contained"
            sx={{
              backgroundColor: "rgb(58, 121, 238)",
              color: "white",
              fontSize: ".72rem",
            }}
            className={styles.addBtn}
          >
            Add card
          </Button>
          {/* <RxCross2 style={{fontSize:"1rem"}}/> */}
          <CloseIcon />
        </div>
        <HiOutlineDotsHorizontal />
      </div>
    </div>
  );
}
