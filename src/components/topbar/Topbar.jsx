import "./topbar.css";
import {
  Search,
  Person,
  Chat,
  Notifications,
  Logout,
} from "@material-ui/icons";
import { IconButton } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";

export default function Topbar() {
  const Navigate = useNavigate();
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">Mezun platform</span>
      </div>
      {/* <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div> */}
      <div className="d-flex align-items-center">
        <div className="">
          <IconButton>
            <LogoutIcon />
          </IconButton>
        </div>
        <img
          src="/assets/person/1.jpeg  "
          onClick={() => Navigate("/profile")}
          alt=""
          className="topbarImg"
        />
      </div>
    </div>
  );
}
