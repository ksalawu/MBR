import React from 'react';

import { MainLayout } from './Layouts/MainLayout'
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { About } from '../src/Screens/About'
import { Home } from '../src/Screens/Home'
import { Schedule } from '../src/Screens/Schedule'
import { Latest } from '../src/Screens/Latest'
import { Residents } from '../src/Screens/Residents'

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <MainLayout>
        <Switch>
          <Route path="/schedule">
            <Schedule />
          </Route>
          <Route path="/residents">
            <Residents />
          </Route>
          <Route path="/shop">
            <div>SHOP</div>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/latest">
            <Latest/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </MainLayout>
    </Router> 
  );
}

export default App;
