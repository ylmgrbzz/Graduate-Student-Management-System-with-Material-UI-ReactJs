import "./online.css";
import { useNavigate } from "react-router-dom";
export default function Online({ user }) {
  const Navigate = useNavigate();
  return (
    <div>
      <li className="rightbarFriend">
        <div className="rightbarProfileImgContainer">
          <img
            className="rightbarProfileImg"
            src={user.profilePicture}
            alt=""
          />
          {/* <span className="rightbarOnline"></span> */}
        </div>
        <div className="rightbarUsername" onClick={() => Navigate("/user")}>
          {user.username}
        </div>
      </li>
      <div>
        {" "}
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">SOFTWARE TEKNOLOJİ</span>
          <span className="rightbarInfoValue">FULL STACK DEVELOPER</span>
          <button className="addSkillButton ">Arkadaş Ekle</button>
        </div>
      </div>
    </div>
  );
}
