import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <div className="error">
        <img
          src="https://miro.medium.com/v2/resize:fit:1358/0*33r6_tNhimBS3Giz.jpg"
          alt=""
          className="error-img"
        />
        <div className="error-content">
          <h1 className="error-content__text">
            An unexpected error accured,but you can still go back to the main
            page.
          </h1>
          <Link to="/">
            <button className="error-content__button">
              Go back to main page
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Error;
