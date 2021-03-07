import React, {useEffect, useState, useRef} from 'react';
import ReactPlayer from 'react-player'
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
  const [calendar, setCalendar] = useState<any>()
  const [playingShow, setPlayingShow] = useState<string>()
  const mixcloudPlayerRef = useRef<any>()
  let now = new Date()

  useEffect(() => {
    const urlstring = `${process.env.REACT_APP_CALENDAR_URL}?key=${process.env.REACT_APP_GOOGLE_API_KEY}&timeMin=${now.toISOString()}&singleEvents=true&orderBy=startTime`
    fetch(urlstring)
    .then(response => response.json())
    .then(data => setCalendar(data))
  }, [])


  useEffect(() => {
    // const internalPlayer = mixcloudPlayerRef.current?.getInternalPlayer()
  }, [playingShow])
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <MainLayout calendar={calendar}>
        <Switch>
          <Route path="/schedule">
            <Schedule calendar={calendar}/>
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
            <Latest setPlayingShow={setPlayingShow}/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
        {playingShow && <div
        className="mixcloudWrap">
          <ReactPlayer
          onReady={(p: any) => {
            //WORK OUT PLAYER
          }}
          ref={mixcloudPlayerRef}
          url={playingShow}
          config={{
            mixcloud: { 
              options: {
                mini: true,
                light: true
              }
            }
          }}
        /></div>}
      </MainLayout>
    </Router> 
  );
}

export default App;
