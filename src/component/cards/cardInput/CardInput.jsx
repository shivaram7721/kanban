import styles from "./CardInput.module.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { useRecoilState } from "recoil";
import { addCards } from "../../../atom/Atom";
import { v4 as uuidv4 } from "uuid";

export function CardInput({ show }) {
  const [card, setCard] = useRecoilState(addCards);
  const [input, setInput] = useState("");

  console.log(card);

  function handleChange(e) {
    setInput(e.target.value);
  }

  function handleAddCard() {
    const cardInput = input;
    // setInput(cardInput);
    console.log(cardInput);
    if (cardInput) {
      setCard([
        ...card,
        {
          id: uuidv4(),
          title: "todo",
          card: input,
        },
      ]);
    }
    setInput("");
    show(!show);
  }

  return (
    <div className={styles.container}>
      <div className={styles.addCardContainer}>
        <div className={styles.textBox}>
          <TextField
            type="text"
            placeholder="add card"
            onChange={handleChange}
            value={input}
            sx={{ width: "18vw" }}
            size="small"
            multiline
          />
        </div>
        <div className={styles.addCardBtn}>
          <div className={styles.btnContainer}>
            <Button
              onClick={handleAddCard}
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
    </div>
  );
}
