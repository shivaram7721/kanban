import { atom } from "recoil";

let dashboard = [
  {
    id: 123,
    title: "completed",
    list: [
      {
        taskId: 12345,
        title: "Do something",
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
