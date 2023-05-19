/* eslint-disable react/prop-types */
import styles from "./CardInput.module.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
// import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { useRecoilState } from "recoil";
import { dashBoardData } from "../../../atom/Atom";
import { v4 as uuidv4 } from "uuid";
import { setLocalData } from "../../../Utils";

export function CardInput({ show, index }) {
  const [cardData, setCardData] = useRecoilState(dashBoardData);
  const [input, setInput] = useState("");
  // const [input3, setInput3] = useState([]);

  function handleChange(e) {
    setInput(e.target.value);
  }

  function handleAddCard() {
    if (!input) {
      return;
    }
    const temp = [...cardData[index].cards];
    console.log("index is " + index);
    const newCard = {
      cardId: uuidv4(),
      cardTitle: input,
      description: "",
      createdAt: new Date().toLocaleString(),
      activity: [
        {
          changes: "xyz added this card to todo",
          chagedAt: new Date().toLocaleString(),
        },
      ],
    };
    temp.push(newCard);
    const updated = { ...cardData[index], cards: temp };
    const final = [...cardData];
    final[index] = updated;
    console.log(updated);
    setCardData(final);
    setLocalData(final);
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
            sx={{ width: "18vw", backgroundColor: "white" }}
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
              Add Card
            </Button>
            {/* <RxCross2 style={{fontSize:"1rem"}}/> */}
            <CloseIcon onClick={show} style={{ cursor: "poiner" }} />
          </div>
          {/* <HiOutlineDotsHorizontal /> */}
        </div>
      </div>
    </div>
  );
}
