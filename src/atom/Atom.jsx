import { atom } from "recoil";
import { v4 as uuidv4 } from "uuid";

let dashboard = [
  {
    listId: uuidv4(),
    listTitle: "completed",
    cards: [
      {
        cardId: 12345,
        cardTitle: "Do something",
        description: "This is description",
        createdAt: "2pm",
        activity: [
          {
            changes: "xyz added this card to todo",
            chagedAt: "2pm",
          },
        ],
      },
    ],
    createdAt: "2pm",
    activity: [
      {
        changes: "xyz added this card to todo",
        chagedAt: "2pm",
      },
    ],
  },
];

export const addCards = atom({
  key: "addCards",
  default: [],
});

export const dashBoardData = atom({
  key: "dashBoardData",
  default: [...dashboard],
});

export const dialogBox = atom({
  key: "dialogBox",
  default: false,
});

export const TaskList = atom({
  key: "TaskList",
  default: {},
});

///
// dashboard => list (map)
// list => card (map)

// list

// list title
// map Card
// input area

// card
// title
