import "./ccard.css";

const ContestantCard = () => {
  return (
    <div className="c-card">
      <div className="small-event">
        <img src="/public/model.png" className="ev-img" alt="" />
        <div className="ev-dets">
          <h1 className="ev-title">🏳️‍🌈Prizes Fit for Royalty</h1>
          <p>
            Our esteemed winners will not only be crowned with the title but
            will also receive luxurious prizes that redefine opulence. Prepare
            to be dazzled
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContestantCard;
