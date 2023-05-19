import { Dialog, DialogContent } from "@mui/material";
import { AiOutlineEye } from "react-icons/ai";
import classes from "./Description.module.css";
import CheckBoxTwoToneIcon from "@mui/icons-material/CheckBoxTwoTone";
import Title from "./title/Title";
import Content from "./content/Content";
import Activity from "./acitivity/Activity";
import { useRecoilState, useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";
import Comment from "./comment/Comment";
import {
  isCardDetail,
  dashBoardData,
  listIndex,
  dialogBox,
  watchNotification,
  TaskList,
} from "../../atom/Atom";
import { CgProfile } from "react-icons/cg";
// import { setLocalData } from "../../Utils";
// import { useState } from "react";

export default function Description() {
  const [isDialog, setIsDialog] = useRecoilState(dialogBox);
  const [isWatch, setIsWatch] = useRecoilState(watchNotification);
  const [isComment, setComment] = useRecoilState(isCardDetail);
  const [listData, setListData] = useRecoilState(dashBoardData);
  const [card, setCard] = useRecoilState(TaskList);
  // const [activity, setActivity] = useState([]);
  const index = useRecoilValue(listIndex);
  const navigate = useNavigate();

  const closeDialogHandle = () => {
    setIsDialog(false);
    navigate("/");
  };

  // console.log("dashboard index ", listData[index].listTitle);

  const activityData = [
    {
      changes: card.cardTitle,
      changesAt: card.createdAt,
    },
  ];

  // console.log(activityData);

  const showCardDetail = () => {
    setComment(!isComment);

    // setActivity([...activity, activityData]);
    // const id = card.cardId;
    // const updatedCardData = [...listData]; // Create a copy of cardData

    // const updateActivity = [...updatedCardData[index].cards]; // Create a copy of the cards array for the specified index

    // const cardIndex = updateActivity.findIndex((card) => card.cardId === id); // Find the index of the card to update

    // if (cardIndex !== -1) {
    //   updateActivity[cardIndex] = {
    //     ...updateActivity[cardIndex],
    //     activity: activityData,
    //   };
    // }

    // updatedCardData[index] = {
    //   ...updatedCardData[index],
    //   cards: updateActivity,
    // };

    // setListData(updatedCardData);
    // setLocalData(updatedCardData);
  };

  console.log(listData[index]);

  return (
    <div>
      <div className={classes.container}>
        <Dialog
          open={isDialog}
          PaperProps={{
            sx: {
              maxWidth: "70vw",
              width: 800,
              minHeight: "90vh",
              backgroundColor: "whitesmoke",
              overflow: "auto",
            },
          }}
        >
          <DialogContent>
            <div className={classes.DialogContent}>
              <Title clickHandler={closeDialogHandle} />
              <div className={classes.container2}>
                <p style={{ margin: 0, paddingBottom: "0.5rem" }}>
                  Notifications
                </p>

                <button onClick={() => setIsWatch(!isWatch)}>
                  <span className={classes.btn1}>
                    <AiOutlineEye />
                    <span style={{ display: "flex", gap: "5px" }}>
                      {isWatch ? (
                        <span
                          style={{
                            fontSize: "0.9rem",
                            marginTop: "0.3rem",
                            paddingRight: "0.8rem",
                          }}
                        >
                          Watch
                        </span>
                      ) : (
                        <>
                          <span
                            style={{ marginTop: "0.5rem", fontSize: "0.9rem" }}
                          >
                            Watching
                          </span>
                          <CheckBoxTwoToneIcon
                            onClick={() => setIsWatch(true)}
                            sx={{ fontSize: "2rem", padding: 0 }}
                          />
                        </>
                      )}
                    </span>
                  </span>
                </button>
              </div>
              <Content />
              <Activity showCardDetail={showCardDetail} isComment={isComment} />
              <Comment />
              {isComment ? (
                ""
              ) : (
                <div className={classes.div2}>
                  <CgProfile className={classes.icons} />
                  <span className={classes.container5}>
                    {activityData.map((ele, index) => (
                      <span key={index}>
                        <p>user added {ele.changes} card </p>
                        {ele.changesAt}
                      </span>
                    ))}
                  </span>
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
