import styles from "./CardItem.module.css";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { addCards } from "../../../atom/Atom";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { dialogBox, TaskList } from "../../../atom/Atom";
import { Link } from "react-router-dom";
import { AiTwotoneEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";

export function CardItem({ cardData, index, handleCardDelete }) {
  const { cardTitle, cardId } = cardData;
  const cards = useRecoilValue(addCards);
  const setIsDialog = useSetRecoilState(dialogBox);
  const setList = useSetRecoilState(TaskList);

  function clickHandler(card) {
    setIsDialog(true);
    setList(card);
    console.log("hello");
  }

  return (
    <div>
      <Draggable draggableId={cardId} key={cardId} index={index}>
        {(provided) => (
          <div
            {...provided.dragHandleProps}
            {...provided.draggableProps}
            ref={provided.innerRef}
          >
            <Link to={`?id=${cardId}`} className={styles.link}>
              <p
                className={styles.card}
                // key={card.id}
                // onClick={() => clickHandler(card)}
              >
                {cardTitle}
              </p>
            </Link>
          </div>
        )}
      </Draggable>
    </div>
  );
}
