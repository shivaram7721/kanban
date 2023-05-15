import styles from "./CardList.module.css";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { addCards } from "../../atom/Atom";
import { Draggable, Droppable } from "react-beautiful-dnd";
// import TaskCard from "../taskCard/TaskCard";
import { dialogBox, TaskList } from "../../atom/Atom";
import { Link } from "react-router-dom";

export function CardList() {
  const cards = useRecoilValue(addCards);
  const setIsDialog = useSetRecoilState(dialogBox);
  const setList = useSetRecoilState(TaskList);

  // console.log(cards);

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
            {cards &&
              cards.map((card, index) => (
                <Draggable draggableId={card.id} key={card.id} index={index}>
                  {(provided) => (
                    <div
                      {...provided.dragHandleProps}
                      {...provided.draggableProps}
                      ref={provided.innerRef}
                    >
                      <Link to={`?id=${card.id}`} className={styles.link}>
                        <p
                          className={styles.card}
                          key={card.id}
                          onClick={() => clickHandler(card)}
                        >
                          {card.card}
                        </p>
                      </Link>
                    </div>
                  )}
                </Draggable>
              ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}
