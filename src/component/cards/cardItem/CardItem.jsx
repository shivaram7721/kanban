import styles from "./CardItem.module.css";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { addCards } from "../../../atom/Atom";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { dialogBox, TaskList } from "../../../atom/Atom";
import { Link } from "react-router-dom";
import { AiTwotoneEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";

export function CardItem({ cardData, index }) {
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
                      <p
                      // key={card.id}
                      // onClick={() => clickHandler(card)}
                      >
                        {cardTitle}
                      </p>
                    </Link>
                    <span className={styles.icons}>
                      <AiTwotoneEdit />
                      <MdDelete />
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
