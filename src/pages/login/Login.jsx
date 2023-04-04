import "./login.css";
import { useNavigate } from "react-router-dom";

export default function Login() {
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
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <button className="loginButton" onClick={() => Navigate("/home")}>
              Log In
            </button>
            <span className="loginForgot">Forgot Password?</span>
            <button
              className="loginRegisterButton"
              onClick={() => Navigate("/register")}
            >
              Create a New Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
