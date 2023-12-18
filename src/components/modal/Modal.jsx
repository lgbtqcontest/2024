import { Link } from "react-router-dom";
import { gl as Google } from "./../../assets/svg/gl.jsx";
import { ig as Instagram } from "./../../assets/svg/ig";
import { fb as Facebook } from "./../../assets/svg/fb";
import { cl as Close } from "./../../assets/svg/cl";
import "./md.css";
import { useState } from "react";
// eslint-disable-next-line react/prop-types
const Modal = ({ open, setOpen }) => {
  open
    ? (document.lastChild.style.overflow = "hidden")
    : (document.lastChild.style.overflow = "scroll");

  return (
    <div className={`${open ? "open" : ""} p-modal`}>
      <div className="inner-modal">
        <div className="md-top">
          <div className="left">
            <h1 className="logo md-logo">
              <span className="lit">Miss</span> Dubai 2024
            </h1>
            <h1>Vote</h1>
          </div>
          <button
            role="button"
            className="close"
            onClick={() => {
              setOpen(false);
            }}
          >
            <Close />
          </button>
        </div>
        <div className="content">
          <p className="md-txt">
            To vote we need to verify that you are human and not a robot by
            creating an account using options below.
          </p>
          <div className="buttons">
            <h2>Create my account with</h2>
            <div className="btns">
              <a
                href="http://localhost:8080/facebook"
                target="_self"
                className="fb"
              >
                <Facebook />
                <p className="btn-txt">Facebook</p>
              </a>
              <a
                href="http://localhost:8080/instagram"
                target="_parent"
                className="ig"
              >
                <Instagram /> <p className="btn-txt">Instagram</p>
              </a>
              <div className="sepe">
                <hr />
                <sub>Or</sub> <hr />
              </div>
              <a
                className="gl"
                href="http://localhost:8080/google"
                target="_parent"
              >
                <Google /> <p className="btn-txt">Google</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
