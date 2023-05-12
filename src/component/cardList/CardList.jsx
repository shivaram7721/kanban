import styles from "./CardList.module.css";
import { useRecoilValue } from "recoil";
import { addCards } from "../../atom/Atom";
import { Draggable, Droppable } from "react-beautiful-dnd";

export function CardList() {
  const cards = useRecoilValue(addCards);

  console.log(cards);

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
                      <p className={styles.card} key={card.id}>
                        {card.card}
                      </p>
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
