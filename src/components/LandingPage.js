import * as React from "react";
import "../style.css";
import { Link } from "react-router-dom";
import GMap from "./GMap";

export default function LandingPage(props) {
  const { data, getUserInfo } = props;

  const userInfo = (info) => {
    getUserInfo(info);
  };
  return (
    <>
      <div className="wrapper d-flex align-center justify-center">
        <div className="container">
          <div className="header d-flex align-center justify-center">
            <h4>Select an account</h4>
          </div>
          <div className="Emp-list">
            {data.length &&
              data.map((item, index) => {
                return (
                  <Link
                    to={`/User/Profile`}
                    onClick={() => userInfo(item)}
                    key={index}
                  >
                    <div className="user-container d-flex align-center">
                      <img width="30" src={item.profilepicture} />
                      {item.name}
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}
