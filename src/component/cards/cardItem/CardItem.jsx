/* eslint-disable react/prop-types */
import styles from "./CardItem.module.css";
// import { useRecoilValue } from "recoil";
// import { addCards } from "../../../atom/Atom";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { Link } from "react-router-dom";
import { AiTwotoneEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";

export function CardItem({ cardData, index, clickHandler, handleCardDelete }) {
  const { cardTitle, cardId } = cardData;
  // const cards = useRecoilValue(addCards);

  return (
    <div className={styles.card}>
      <Droppable droppableId="todo" type="cards">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
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
                      <MdDelete onClick={handleCardDelete} />
                    </span>
                  </span>
                </div>
              )}
            </Draggable>

            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}
