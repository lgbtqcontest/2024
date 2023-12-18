import { useState } from "react";
import Modal from "../../components/modal/Modal";
import { galContestants } from "../../utils/card";
import "./pro.css";
import { useParams } from "react-router-dom";

localStorage.setItem("gallery", JSON.stringify(galContestants));
const Profile = () => {
  const contestants = JSON.parse(localStorage.getItem("gallery"));
  const [open, setOpen] = useState(false);
  const { id } = useParams();

  const contestant = contestants.find((a) => a.id === id);
  const { img, name, age, bio, country } = contestant ? contestant : false;

  return (
    <div className="parent-container">
      <h1>Profile</h1>
      {contestant ? (
        <div className="profile">
          <img src={img} className="prof-pic" alt="" />
          <div className="text">
            <h1 className="cname">
              🏳️‍🌈{name}, {age}
            </h1>
            <p className="country">{country}</p>
            <p className="bio">{bio}</p>
          </div>
          <button className="vote" onClick={() => setOpen(!open)}>
            Vote {name}
          </button>
          <Modal open={open} setOpen={setOpen} />
        </div>
      ) : (
        <p>Contestant not found</p>
      )}
    </div>
  );
};

export default Profile;
