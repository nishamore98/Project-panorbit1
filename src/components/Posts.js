import React from "react";
import Header from "./Header";
import NavBar from "./NavBar";

export default function Posts(props) {
  const { userInfo, data, switchAcc } = props;
  return (
    <div className="d-flex">
      <NavBar />
      <div className="user-profile">
        <Header
          heading="Posts"
          userInfo={userInfo}
          data={data}
          switchAcc={switchAcc}
        />
        <div className="d-flex align-center justify-center coming-soon-container">
          Coming Soon
        </div>
      </div>
    </div>
  );
}
