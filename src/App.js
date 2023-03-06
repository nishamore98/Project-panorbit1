import * as React from "react";
import "./style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Profile from "./components/Profile";
import Posts from "./components/Posts";
import Gallery from "./components/Gallery";
import ToDo from "./components/ToDo";
import NavBar from "./components/NavBar";

export default function App() {
  const [userInfo, setUserInfo] = React.useState(null);
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch("https://panorbit.in/api/users.json")
      .then((res) => res.json())
      .then((json) => {
        setData(json.users);
      });
  }, []);

  function switchAcc(item) {
    setUserInfo(item);
  }

  function getUserInfo(data) {
    setUserInfo(data);
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<LandingPage data={data} getUserInfo={getUserInfo} />}
        />
        <Route
          path="/User/Profile"
          element={
            <Profile userInfo={userInfo} data={data} switchAcc={switchAcc} />
          }
        />
        <Route
          path="/User/Posts"
          element={
            <Posts userInfo={userInfo} data={data} switchAcc={switchAcc} />
          }
        />
        <Route
          path="/User/Gallery"
          element={
            <Gallery userInfo={userInfo} data={data} switchAcc={switchAcc} />
          }
        />
        <Route
          path="/User/ToDo"
          element={
            <ToDo userInfo={userInfo} data={data} switchAcc={switchAcc} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
