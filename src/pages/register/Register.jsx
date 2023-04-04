import "./register.css";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const Navigate = useNavigate();

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">DOKUZ EYLÜL ÜNİVERSİTESİ</h3>
          <span className="loginDesc">
            Connect with your friends who graduated from Dokuz Eylül University.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Username" className="loginInput" />
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <input placeholder="Password Again" className="loginInput" />
            <button className="loginButton" onClick={() => Navigate("/login")}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
