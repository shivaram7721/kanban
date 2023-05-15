/* eslint-disable react/prop-types */
import { MdSubtitles } from "react-icons/md";
import { ImCross } from "react-icons/im";
import style from "./Title.module.css";
// import dashBoardData from "../../../atom/Atom";
// import { useRecoilValue } from "recoil";
// import { useParams } from "react-router-dom";

export default function Title({ clickHandler }) {
  // const title = useRecoilValue(dashBoardData);
  // const {title} = useParams();
  return (
    <div>
      <div className={style.dialogTitle}>
        <span>
          <MdSubtitles style={{ fontSize: "23px" }} />
        </span>
        <span className={style.para1}>
          <p
            style={{
              fontSize: "23px",
              margin: 0,
              fontWeight: "530",
            }}
          >
            cook Food
            {/* {title} */}
          </p>
          <p style={{ margin: "1px" }}>
            in list
            <span style={{ textDecoration: "underline", marginLeft: "5px" }}>
              To Do
            </span>
          </p>
        </span>
        <span className={style.icon2}>
          <ImCross onClick={clickHandler} />
        </span>
      </div>
    </div>
  );
}
