import "./user.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

export default function User() {
  return (
    <>
      <Topbar />
      <div className="profile">
        {/* <Sidebar /> */}
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src="https://upload.wikimedia.org/wikipedia/en/2/27/Dokuz_Eylul_University_logo.png"
                alt=""
              />
              <img
                className="profileUserImg"
                src="https://upload.wikimedia.org/wikipedia/en/2/27/Dokuz_Eylul_University_logo.png"
                alt=""
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">YALIIM GÜRBÜZ ARKADAŞ OLAN</h4>
              <button className="addSkillButton">Arkadaş Ekle</button>
              <button className="deleteFriendButton">Arkadaş sil </button>

              {/* <span className="profileInfoDesc">Hello my friends!</span> */}
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
}
