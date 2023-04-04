import "./rightbar.css";
import { Users } from "../../dummyData";
import { useState } from "react";
import Online from "../online/Online";
// import { WorkIcon } from "@mui/icons-material/Work";

export default function Rightbar({ profile }) {
  const HomeRightbar = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const filteredUsers = Users.filter((user) =>
      user.username.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
      <>
        <input
          className="rightbarSearch"
          type="text"
          placeholder="Search for graduates..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <h4 className="rightbarTitle">GRADUATES</h4>
        <ul className="rightbarFriendList">
          {filteredUsers.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    const [editMode, setEditMode] = useState(false);
    const [email, setEmail] = useState("ylmgrbz@gmail.com");
    const [occupation, setOccupation] = useState("developer");
    const [phone, setPhone] = useState("987654321");
    const [location, setLocation] = useState("İstanbul");
    const [website, setWebsite] = useState("www.google.com");
    const [skills, setSkills] = useState([
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node.js",
    ]);
    const [newSkill, setNewSkill] = useState("");
    const [experiences, setExperiences] = useState([
      { company: "SOFTWARE YAZILIM TEKNOLOJİLERİ", duration: "2 AY" },
      { company: "SOFTWARE YAZILIM TEKNOLOJİLERİ2", duration: "21 AY" },
    ]);
    const [newExperience, setNewExperience] = useState({
      company: "",
      duration: "",
    });

    function handleAddExperience() {
      setExperiences([...experiences, newExperience]);
      setNewExperience({ company: "", duration: "" });
    }

    function handleAddSkill() {
      if (newSkill.trim() === "") {
        return;
      }

      setSkills([...skills, newSkill]);
      setNewSkill("");
    }

    function handleDeleteExperience(experienceToDelete) {
      const filteredExperiences = experiences.filter(
        (experience) => experience !== experienceToDelete
      );
      setExperiences(filteredExperiences);
    }

    function handleDeleteSkill(skill) {
      setSkills(skills.filter((s) => s !== skill));
    }

    const handleEditClick = () => {
      if (editMode) {
        setEditMode(false);
        setEmail(document.getElementById("email").value);
        setOccupation(document.getElementById("occupation").value);
        setPhone(document.getElementById("phone").value);
        setLocation(document.getElementById("location").value);
        setWebsite(document.getElementById("website").value);
      } else {
        setEditMode(true);
      }
    };
    return (
      <>
        <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Email:</span>
            {editMode ? (
              <input type="text" id="email" defaultValue={email} />
            ) : (
              <span className="rightbarInfoValue">{email}</span>
            )}
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">meslek:</span>
            {editMode ? (
              <input type="text" id="occupation" defaultValue={occupation} />
            ) : (
              <span className="rightbarInfoValue">{occupation}</span>
            )}
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Telefon:</span>
            {editMode ? (
              <input type="text" id="phone" defaultValue={phone} />
            ) : (
              <span className="rightbarInfoValue">{phone}</span>
            )}
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Lokasyon:</span>
            {editMode ? (
              <input type="text" id="location" defaultValue={location} />
            ) : (
              <span className="rightbarInfoValue">{location}</span>
            )}
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Website:</span>
            {editMode ? (
              <input type="text" id="website" defaultValue={website} />
            ) : (
              <span className="rightbarInfoValue">{website}</span>
            )}
          </div>
          <button className="addSkillButton" onClick={handleEditClick}>
            {editMode ? "Kaydet" : "Bilgilerini düzenle"}
          </button>
        </div>
        {/* <h4 className="rightbarTitle">Yetkinlikler</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="right barInfoKey">HTML</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">CSS</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">JAVASCRİPT</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">REACT</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">NODEJS</span>
          </div>
          <button className="addSkillButton">Yetkinlik Ekle</button>
        </div> */}
        <h4 className="rightbarTitle">Yetkinlikler</h4>
        <div className="rightbarInfo">
          {skills.map((skill) => (
            <div className="rightbarInfoItem">
              <span className="rightbarInfoKey">{skill}</span>
              <button
                className="deleteSkillButton"
                onClick={() => handleDeleteSkill(skill)}
              >
                Sil
              </button>
            </div>
          ))}
          <div className="rightbarInfoItem">
            <input
              className="addSkillInput"
              type="text"
              placeholder="Yeni yetkinlik ekle"
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
            />
            <button className="addSkillButton" onClick={handleAddSkill}>
              Yetkinlik Ekle
            </button>
          </div>
        </div>
        <h4 className="rightbarTitle">Deneyimler</h4>
        <div className="rightbarInfo">
          {experiences.map((experience) => (
            <div className="rightbarInfoItem">
              <span className="rightbarInfoKey">{experience.company}</span>
              <span className="rightbarInfoValue">{experience.duration}</span>
              <button
                className="deleteSkillButton"
                onClick={() => handleDeleteExperience(experience)}
              >
                Sil
              </button>
            </div>
          ))}
          <div className="rightbarInfoItem">
            <input
              className="addSkillInput"
              type="text"
              placeholder="Firma"
              value={newExperience.company}
              onChange={(e) =>
                setNewExperience({
                  ...newExperience,
                  company: e.target.value,
                })
              }
            />
            <input
              className="addSkillInput"
              type="text"
              placeholder="Deneyim Süresi"
              value={newExperience.duration}
              onChange={(e) =>
                setNewExperience({
                  ...newExperience,
                  duration: e.target.value,
                })
              }
            />
            <button className="addSkillButton" onClick={handleAddExperience}>
              Deneyim Ekle
            </button>
          </div>
        </div>

        <h4 className="rightbarTitle">User Gradute Friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              src="assets/person/1.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">yalım gürbüz</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/2.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">yalım gürbüz</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/3.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">yalım gürbüz</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/4.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">yalım gürbüz</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/5.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">yalım gürbüz</span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}
