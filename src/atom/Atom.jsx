/* eslint-disable react-refresh/only-export-components */
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
        createdAt: new Date().toLocaleString(),
        activity: [
          {
            changes: "xyz added this card to todo",
            chagedAt: "2pm",
          },
        ],
      },
    ],
    createdAt: new Date().toLocaleString(),
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

// export const dialogBox = atom({
//   key: "dialogBox",
//   default: false,
// });

export const TaskList = atom({
  key: "TaskList",
  default: {},
});

export const watchNotification = atom({
  key: "watchNotification",
  default: true,
});

export const dialogBox = atom({
  key: "dialogBox",
  default: false,
});
