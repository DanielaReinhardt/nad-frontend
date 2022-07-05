import React, { Component, useEffect } from 'react';
import AllRast from './components/allRast.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import{Switch} from 'react';
import FindId from './components/findId.js';
import EditRast from './components/editRast.js';
import react from 'react';


class App extends Component {
  render() { 

  return(
      <Routes>
        <Switch>
            
            {/* <Route path='/locations' exact={true} component={AllRast} />
            <Route path='/locations/:id' component={EditRast} /> */}
            <Route path='/' component={FindId} />
      </Switch>
        
      </Routes >

    )
}
}

export default App;
