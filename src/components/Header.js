import React from "react";
import { Link } from "react-router-dom";

export default function Header(props) {
  const { heading, userInfo, data, switchAcc } = props;
  const [isSwitchAccClicked, setIsSwitchAccClicked] = React.useState(false);
  console.log(userInfo);
  function switchAccount(item) {
    switchAcc(item);
    setIsSwitchAccClicked(false);
  }
  function switchAccPopup() {
    setIsSwitchAccClicked(!isSwitchAccClicked);
  }

  return (
    <div className="profile-header d-flex">
      <h4>{heading}</h4>
      <div
        onClick={() => switchAccPopup()}
        className="d-flex align-center user-box"
      >
        <img src={userInfo.profilepicture} />
        {userInfo.name}
      </div>
      {isSwitchAccClicked && (
        <div className="switch-account d-flex align-center">
          <div className="acc-user-info d-flex align-center">
            <img src={userInfo.profilepicture} />
            <p>{userInfo.name}</p>
          </div>
          <div className="switch-acc-user-list-wrapper">
            {data.length &&
              data.map((item, index) => {
                return (
                  <div key={index} className="switch-acc-user-list">
                    <hr />
                    <div
                      onClick={() => switchAccount(item)}
                      key={index}
                      className="d-flex align-center user-box header-user-box"
                    >
                      <img src={item.profilepicture} />
                      {item.name}
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="d-flex align-center sign-out-btn justify-center">
            <Link to="/">
              <button>Sign out</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
