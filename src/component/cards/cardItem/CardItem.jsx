/* eslint-disable react/prop-types */
import styles from "./CardItem.module.css";
import { Draggable } from "react-beautiful-dnd";
import { Link } from "react-router-dom";
import { AiTwotoneEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { useState } from "react";
import { dashBoardData } from "../../../atom/Atom";
import { useRecoilState } from "recoil";
import { setLocalData } from "../../../Utils";

export function CardItem({
  cardData,
  index,
  clickHandler,
  handleCardDelete,
  listIndex,
}) {
  const { cardTitle, cardId } = cardData;
  const [setTitle, setCardTitleChange] = useState(false);
  const [dummy, setDummy] = useState("");
  const [data, setData] = useRecoilState(dashBoardData);

  function handleTitleSave() {
    if (!dummy) {
      return;
    }

    console.log("Lis Index  -", listIndex);
    console.log("CardIndex ", index);

    const updatedData = data.map((list, listInd) => {
      if (listInd === listIndex) {
        const updatedCards = list.cards.map((card, cardIndex) => {
          if (cardIndex === index) {
            return { ...card, cardTitle: dummy };
          }
          return card;
        });
        return { ...list, cards: updatedCards };
      }
      return list;
    });

    setData(updatedData);
    setLocalData(updatedData);
    setCardTitleChange(false);
  }
  return (
    <div className={styles.card}>
      <Draggable draggableId={cardId} key={cardId} index={index}>
        {(provided, snapshot) => (
          <div
            {...provided.dragHandleProps}
            {...provided.draggableProps}
            ref={provided.innerRef}
            // className={styles.card}
            className={`${styles.card} ${snapshot.isDragging ? styles.dragging : ""}`}
          >
            {setTitle ? (
              <span>
                <input
                  onChange={(e) => setDummy(e.target.value)}
                  className={styles.title__input}
                />
                <button
                  className={styles.title__saveBtn}
                  onClick={handleTitleSave}
                >
                  save
                </button>
              </span>
            ) : (
              <span className={`${styles.containerCard} ${snapshot.isDragging ? styles.dragging : ""}`}>
                <Link to={`?id=${cardId}`} className={styles.link}>
                  <p className={styles.cardTitle} onClick={clickHandler}>
                    {cardTitle}
                  </p>
                </Link>
                <span className={styles.icons}>
                  <AiTwotoneEdit onClick={() => setCardTitleChange(true)} />{" "}
                  <MdDelete
                    style={{ cursor: "pointer" }}
                    onClick={handleCardDelete}
                  />
                </span>
              </span>
            )}
          </div>
        )}
      </Draggable>
    </div>
  );
}
