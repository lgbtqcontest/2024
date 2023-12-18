import "./card.css";
import { Link } from "react-router-dom";

const Card = ({ img, title, text, btntext, btntext2 }) => {
  return (
    <div className="how-to-p">
      <img src={img} className="h-img" alt="" />
      <div className="how">
        <h1>{title}</h1>
        <p>{text}</p>
        <button className="register">{btntext}</button>
        {btntext2 && (
          <Link to="/contestants">
            <button className="register models">{btntext2}</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Card;
