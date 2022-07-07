import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllRast from './components/allRast.js';
import EditRast from './components/editRast.js';
import FindId from './components/findId.js';
import Appbar from './components/Appbar.js';
import "./App.css";
import Locations from "./components/Locations.js";
import Location from "./components/Location.js";
import Loc from "./components/Loc.js";

function App() {
 return <div className ="App">
 {/* <Location />
 <Appbar />  */}
 <Loc />
 {/* <FindId /> */}
 {/* <EditRast /> */}

 {/* <Locations /> */}

 </div>
}

export default App;
