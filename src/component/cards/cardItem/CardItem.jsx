import styles from "./CardItem.module.css";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { addCards } from "../../../atom/Atom";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { dialogBox, TaskList } from "../../../atom/Atom";
import { Link } from "react-router-dom";

export function CardItem({ cardData, index, onClick }) {
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
                  <Link to={`?id=${cardId}`} className={styles.link}>
                    <p
                      className={styles.card}
                      // onClick={onClick}
                      // key={card.id}
                      // onClick={() => clickHandler(card)}
                    >
                      {cardTitle}
                    </p>
                  </Link>
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
