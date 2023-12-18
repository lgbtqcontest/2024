import "./det.css";

// eslint-disable-next-line react/prop-types
const Details = ({ img, title, text }) => {
  return (
    <div className="ev-detts">
      <img src={img} alt="" className="ev-img" />
      <article>
        <h2>{title}</h2>
        <p>{text}</p>
      </article>
    </div>
  );
};

export default Details;
