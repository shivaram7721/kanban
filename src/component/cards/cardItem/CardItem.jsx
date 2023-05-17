/* eslint-disable react/prop-types */
import styles from "./CardItem.module.css";
import { Draggable } from "react-beautiful-dnd";
import { Link } from "react-router-dom";
import { AiTwotoneEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";

export function CardItem({ cardData, index, clickHandler, handleCardDelete }) {
  const { cardTitle, cardId } = cardData;

  return (
    <div className={styles.card}>
      <Draggable draggableId={cardId} key={cardId} index={index}>
        {(provided) => (
          <div
            {...provided.dragHandleProps}
            {...provided.draggableProps}
            ref={provided.innerRef}
          >
            <span className={styles.containerCard}>
              <Link to={`?id=${cardId}`} className={styles.link}>
                <p onClick={clickHandler}>{cardTitle}</p>
              </Link>
              <span className={styles.icons}>
                <AiTwotoneEdit />
                <MdDelete
                  style={{ cursor: "pointer" }}
                  onClick={handleCardDelete}
                />
              </span>
            </span>
          </div>
        )}
      </Draggable>
    </div>
  );
}
