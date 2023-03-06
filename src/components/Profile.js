import React from "react";
import GMap from "./GMap";
import Header from "./Header";
import NavBar from "./NavBar";
import UserInfo from "./Posts";

export default function Profile(props) {
  const { userInfo, data, switchAcc } = props;
  return (
    <>
      <div className="d-flex">
        <NavBar />
        <div className="user-profile">
          <Header
            heading="Profile"
            userInfo={userInfo}
            data={data}
            switchAcc={switchAcc}
          />
          <div className="d-flex user-info-container">
            <div className="Profile-user-info">
              <img src={userInfo.profilepicture} />
              <h4>{userInfo.name}</h4>
              <table className="table-border-btm">
                <tbody>
                  <tr>
                    <td className="username">Username </td>
                    <td className="username plr"> : </td>
                    <td>
                      <span>{userInfo.username}</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="username">e-mail </td>
                    <td className="username plr">:</td>
                    <td>
                      <span>{userInfo.email}</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="username">Phone </td>
                    <td className="username plr">:</td>
                    <td>
                      <span>{userInfo.phone}</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="username">Website </td>
                    <td className="username plr">:</td>
                    <td>
                      <span>{userInfo.website}</span>
                    </td>
                  </tr>
                </tbody>
              </table>

              <p className="username text-align-center">Company</p>
              <table>
                <tbody>
                  <tr>
                    <td className="username">Company </td>
                    <td className="username plr"> : </td>
                    <td>
                      <span>{userInfo.company.name}</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="username">catchphrase </td>
                    <td className="username plr">:</td>
                    <td>
                      <span>{userInfo.company.catchPhrase}</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="username">bs </td>
                    <td className="username plr">:</td>
                    <td>
                      <span>{userInfo.company.bs}</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="add-container d-flex">
              <div className="address-info">
                <p className="username address-section">Address :</p>
                <table>
                  <tbody>
                    <tr>
                      <td className="username">Street </td>
                      <td className="username plr"> : </td>
                      <td>
                        <span>{userInfo.address.street}</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="username">Suite </td>
                      <td className="username plr">:</td>
                      <td>
                        <span>{userInfo.address.suite}</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="username">City</td>
                      <td className="username plr">:</td>
                      <td>
                        <span>{userInfo.address.city}</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="username">Zipcode</td>
                      <td className="username plr">:</td>
                      <td>
                        <span>{userInfo.address.zipcode}</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <GMap
                lat={userInfo.address.geo.lat}
                lng={userInfo.address.geo.lng}
              />
              <div className="lat-lng">
                <span>Lat :</span>
                {userInfo.address.geo.lat}
                <span>Long :</span>
                {userInfo.address.geo.lng}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
