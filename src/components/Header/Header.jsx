import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar">
      <p className="logo">
        <Link to="/">
          <i className="fa-solid fa-house"></i> Home<strong></strong>
        </Link>
      </p>
    </div>
  );
};

export default Header;