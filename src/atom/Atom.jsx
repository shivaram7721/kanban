/* eslint-disable react-refresh/only-export-components */
import { atom } from "recoil";
import { v4 as uuidv4 } from "uuid";
import { getLocalData } from "../Utils";

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

const localData = getLocalData();

export const addCards = atom({
  key: "addCards",
  default: [],
});

export const dashBoardData = atom({
  key: "dashBoardData",
  default: [...localData],
});

export const dragListIndex = atom({
  key: "dragListIndex",
  default: 0,
});

// Description Atoms

export const isCardDetail = atom({
  key: "isCardDetail",
  default: true,
});

export const isShowTitle = atom({
  key: "isShowTitle",
  default: true,
});

// export const cardTitle = atom({
//   key: "cardTitle",
//   default: "",
// });
export const listIndex = atom({
  key: "listIndex",
  default: 0,
});
export const cardComment = atom({
  key: "cardComment",
  default: [],
});
export const dialogBox = atom({
  key: "dialogBox",
  default: false,
});
export const TaskList = atom({
  key: "TaskList",
  default: {},
});

export const watchNotification = atom({
  key: "watchNotification",
  default: true,
});
