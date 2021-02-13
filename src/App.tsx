import React from 'react';

import { MainLayout } from './Layouts/MainLayout'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { About } from '../src/Screens/About'
import { Home } from '../src/Screens/Home'
import { Schedule } from '../src/Screens/Schedule'

function App() {
  return (
    <Router>
      <MainLayout>
        <Switch>
          <Route path="/schedule">
            <Schedule />
          </Route>
          <Route path="/residents">
            <div>RESIDENTS</div>
          </Route>
          <Route path="/shop">
            <div>SHOP</div>
          </Route>
          <Route path="/about">
            <About/>
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
