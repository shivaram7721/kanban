import { Dialog, DialogContent } from "@mui/material";
import { AiOutlineEye } from "react-icons/ai";
import { dialogBox, watchNotification } from "../../atom/Atom";
import classes from "./Description.module.css";
import CheckBoxTwoToneIcon from "@mui/icons-material/CheckBoxTwoTone";
import Title from "./title/Title";
import Content from "./content/Content";
import Activity from "./acitivity/Activity";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import Comment from "./comment/Comment";

export default function Description() {
  const [isDialog, setIsDialog] = useRecoilState(dialogBox);
  const [isWatch, setIsWatch] = useRecoilState(watchNotification);
  const navigate = useNavigate();

  const changeHandler = () => {
    setIsDialog(false);
    navigate("/");
  };

  return (
    <div>
      <div className={classes.container}>
        <Dialog
          open={isDialog}
          PaperProps={{
            sx: {
              maxWidth: "70vw",
              width: 800,
              height: "90vh",
              backgroundColor: "whitesmoke",
            },
          }}
        >
          <DialogContent>
            <div className={classes.DialogContent}>
              <Title clickHandler={changeHandler} />
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
              <span>
                <Content />
              </span>
              <span>
                <Activity />
              </span>
              <span>
                <Comment />
              </span>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
