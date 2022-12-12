import "./Body.css";
// import yan from "../../imgs/yan.png";
import { Link } from "react-router-dom";

const Body = () => {
  return (
    <div className="body-bg">
      <div className="body-container">
        <div className="body-left">
          <div className="body-title">
            <u>Yan</u>
          </div>
            <i className="fa-regular fa-handshake"></i>
         
          <Link to="/about">
            <button className="body-btn refresh-btn">About me </button>
          </Link>
          <Link to="/experience">
            <button className="body-btn refresh-btn">Experience</button>
          </Link>
          <Link to="/education">
            <button className="body-btn refresh-btn">Education</button>
          </Link>
          <Link to="/contact">
            <button className="body-btn refresh-btn">Contact me</button>
          </Link>
        </div>
        <div className="body-right">
          {/* <img src={yan} alt="y"/> */}
          
        </div>
      </div>
    </div>
  );
};

export default Body;
