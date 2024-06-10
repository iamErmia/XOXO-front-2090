import "../styles/login.css";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  return (
    <>
      <div className="body">
        <h1 className="headTxt">Tic-Tac-Toe</h1>
        <div className="form-place">
          <p className="fill-out">Fill out the form</p>
          <form className="name-form">
            <input type="text" name="user1" placeholder="Enter Player One" className="form-input"/>
            <input type="text" name="user2" placeholder="Enter Player Two" className="form-input"/>
            <button type="submit" className="start-game">START GAME</button>
          </form>
        </div>
        <p className="provedBy">Proved By Ermia Zavari 2024</p>
      </div>
    </>
  );
};

export default LoginPage;
