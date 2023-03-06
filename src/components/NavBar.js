import React from "react";
import "../style.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="nav-wrapper d-flex align-center justify-center">
      <div className="nav-links d-flex justify-center">
        <div className=" d-flex">
          <Link
            to="/User/Profile"
            className={
              window.location.href.includes("/User/Profile") && "active"
            }
          >
            Profile
          </Link>
          {/* <div className="active-tab-indicator d-flex align-center justify-center">
            {" "}
            <span>&gt; </span>{" "}
          </div> */}
        </div>
        <hr />
        <Link
          to="/User/Posts"
          className={window.location.href.includes("/User/Posts") && "active"}
        >
          Posts
        </Link>{" "}
        <hr />
        <Link
          to="/User/Gallery"
          className={window.location.href.includes("/User/Gallery") && "active"}
        >
          Gallery
        </Link>
        <hr />
        <Link
          to="/User/ToDo"
          className={window.location.href.includes("/User/ToDo") && "active"}
        >
          ToDo
        </Link>
      </div>
    </div>
  );
}
