import { atom } from "recoil";

let dashboard = [
  {
    listId: 123,
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

// export const listData = atom({
//   key : "listData",
//   default : []
// })
