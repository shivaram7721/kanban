/* eslint-disable react-refresh/only-export-components */
import { atom } from "recoil";
import { v4 as uuidv4 } from "uuid";

let dashboard = [
  {
    listId: `list-${uuidv4()}`,
    listTitle: "completed",
    cards: [
      {
        cardId: uuidv4(),
        cardTitle: "Do something",
        description: "",
        createdAt: new Date().toLocaleString(),
        activity: [
          {
            changes: "",
            chagedAt: "",
          },
        ],
      },
    ],
    createdAt: new Date().toLocaleString(),
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

export const cardComment = atom({
  key: "cardComment",
  default: [],
});

export const isCardDetail = atom({
  key: "isCardDetail",
  default: true,
});

export const listIndex = atom({
  key: "listIndex",
  default: 0,
});
