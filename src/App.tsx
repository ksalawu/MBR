import React from 'react';

import { MainLayout } from './Layouts/MainLayout'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <MainLayout>
        <Switch>
          <Route path="/schedule">
            <div>SCHEDULE</div>
          </Route>
          <Route path="/residents">
            <div>RESIDENTS</div>
          </Route>
          <Route path="/shop">
            <div>SHOP</div>
          </Route>
          <Route path="/about">
            <div>ABOUT</div>
          </Route>
          <Route path="/">
            <div>TEST</div>
          </Route>
        </Switch>
      </MainLayout>
    </Router> 
  );
}

export default App;
