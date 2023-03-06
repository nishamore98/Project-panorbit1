import * as React from 'react';
import './style.css';
import { BrowserRouter, Routes, Route ,Switch} from 'react-router-dom';
import Profile from './components/Profile';
import Posts from './components/Posts';
import Gallery from './components/Gallery';
import ToDo from './components/ToDo';
import NavBar from './components/NavBar';

export default function AppRoutes(props) {
const {info} = props
console.log("info",info)
  return <BrowserRouter>
  <NavBar />
  <Routes>
      <Route path="/User/Profile"  element={<Profile userInfo={info}/>} />
      <Route path="/User/Posts" element={<Posts />}/>
      <Route path="/User/Gallery" element={<Gallery/>} />
      <Route path="/User/ToDo" element={<ToDo/>} />
  </Routes>
</BrowserRouter>
}
