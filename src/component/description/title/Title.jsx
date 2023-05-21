/* eslint-disable react/prop-types */
import { MdSubtitles } from "react-icons/md";
import { ImCross } from "react-icons/im";
import style from "./Title.module.css";
import {
  TaskList,
  dashBoardData,
  isShowTitle,
  listIndex,
} from "../../../atom/Atom";
import { useRecoilValue, useRecoilState } from "recoil";
import { useState } from "react";
import { Button } from "@mui/material";
import { setLocalData } from "../../../Utils";

export default function Title({ clickHandler }) {
  const [title, setTitle] = useRecoilState(TaskList);
  const [cardData, setCardData] = useRecoilState(dashBoardData);
  const index = useRecoilValue(listIndex);
  const [input, setInput] = useState(title.cardTitle);
  const [isTitle, setIsTitle] = useRecoilState(isShowTitle);

  const updateTitle = () => {
    const id = title.cardId;
    setIsTitle(!isTitle);

    setCardData((prevData) => {
      console.log(prevData);
      const updatedData = [...prevData];
      const updatedCards = [...updatedData[index].cards];
      const cardIndex = updatedCards.findIndex((card) => card.cardId === id);
      if (cardIndex !== -1) {
        updatedCards[cardIndex] = {
          ...updatedCards[cardIndex],
          cardTitle: input,
        };
        updatedData[index] = { ...updatedData[index], cards: updatedCards };
      }
      setLocalData(updatedData);
      return updatedData;
    });

    // console.log(Local_dashboarddata);
    setTitle((prevTitle) => {
      console.log(prevTitle);
      const updatedTitle = { ...prevTitle, cardTitle: input };
      return updatedTitle;
    });
    console.log(title);
  };

  return (
    <div>
      <div className={style.dialogTitle}>
        <span>
          <MdSubtitles style={{ fontSize: "23px" }} />
        </span>
        <span className={style.para1}>
          {isTitle ? (
            <p
              style={{
                fontSize: "23px",
                margin: 0,
                fontWeight: "530",
              }}
              onClick={() => setIsTitle(false)}
            >
              {title.cardTitle}
            </p>
          ) : (
            <span className={style.updateBox}>
              <input
                className={style.inputBox}
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <Button
                onClick={updateTitle}
                variant="outlined"
                sx={{ color: "black", borderColor: "black" }}
              >
                Update
              </Button>
            </span>
          )}
          <p style={{ margin: "1px" }}>
            in list
            <span style={{ textDecoration: "underline", marginLeft: "5px" }}>
              {cardData[index].listTitle}
            </span>
          </p>
        </span>
        <span className={style.icon2}>
          <ImCross onClick={clickHandler} />
        </span>
      </div>
    </div>
  );
}
