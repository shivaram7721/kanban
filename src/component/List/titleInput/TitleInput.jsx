/* eslint-disable react/prop-types */
import styles from "./TitleInput.module.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";

export default function TitleInput({ onChange, onClick }) {
  return (
    <div className={styles.addCardContainer}>
      <div className={styles.textBox}>
        <TextField
          type="text"
          placeholder="add card"
          onChange={onChange}
          //   value={input}
          sx={{
            width: "15rem",
            backgroundColor: "white",
            borderRadius: "5px",
            border: "none",
          }}
          size="small"
          multiline
        />
      </div>
      <div className={styles.addCardBtn}>
        <span className={styles.btnContainer}>
          <Button
            onClick={onClick}
            variant="contained"
            sx={{
              backgroundColor: "rgb(58, 121, 238)",
              color: "white",
              fontSize: "0.8rem",
              padding: "0.2rem",
              height: "2rem",
            }}
            className={styles.addBtn}
          >
            Add card
          </Button>
          <CloseIcon />
        </span>
      </div>
    </div>
  );
}
