import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllRast from './components/allRast.js';
import EditRast from './components/editRast.js';
import FindId from './components/findId.js';

class App extends Component {
  render() {

    return (
      <BrowserRouter>
        <Routes>
          { /* Aufpassen: siehe Syntax mit element, component ist nicht das gleiche */}
          <Route path='/locations' exact={true} element={<AllRast />} />
          <Route path='/locations/:id' element={<EditRast />} />
          <Route path='/' element={<FindId />} />
        </Routes >
      </BrowserRouter>
    )
  }
}

export default App;
