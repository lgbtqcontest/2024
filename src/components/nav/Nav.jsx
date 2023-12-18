import "./nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <div className="lgbtq">
        <span className="red"></span>
        <span className="orange"></span>
        <span className="yellow"></span>
        <span className="green"></span>
        <span className="blue"></span>
        <span className="indigo"></span>
        <span className="violet"></span>
      </div>
      <Link to={"/"}>
        <h1 className="logo">
          <span className="lit">Miss</span> Dubai 2024
        </h1>
      </Link>
      <button role="button" className="menu-btn">
        <span className="my">my</span>Vote Account
      </button>
    </nav>
  );
};

export default Nav;
