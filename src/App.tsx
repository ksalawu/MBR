import React, {useEffect, useState, useRef} from 'react';
import Papa from 'papaparse'
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
  const [playerPlaying, setPlayerPlaying] = useState<boolean | undefined>()
  const [residents, setResidents] = useState<{[key:string]:string}[]>()
  let now = new Date()

  const getMixcloudPlayer = (): Promise<any> => {
    // @ts-ignore
    const mx = window.Mixcloud.PlayerWidget(document.getElementById("mixcloud-widget"))
    return mx.ready
  }

  useEffect(() => {
    const urlstring = `${process.env.REACT_APP_CALENDAR_URL}?key=${process.env.REACT_APP_GOOGLE_API_KEY}&timeMin=${now.toISOString()}&singleEvents=true&orderBy=startTime`
    fetch(urlstring)
    .then(response => response.json())
    .then(data => setCalendar(data))

    process.env.REACT_APP_RESIDENTS_SHEET && fetch(process.env.REACT_APP_RESIDENTS_SHEET)
    // @ts-ignore
    .then(response => response.text())
    .then(text => {
      const data = Papa.parse(text).data
      setResidents(
        data.reduce((acc: any[], cur:any, index) => {
          const keys = data[0] as string[]
          if (index) {
            const row = {} as {[key:string]:string}
            keys.forEach((key, index) => row[key] = cur[index])
            acc.push(row)
          }
          return acc
        }, [] as any[])
      )
    })
  }, [])

  useEffect(() => {
    // @ts-ignore
    if (playingShow ) {
      setPlayerPlaying(false)
      getMixcloudPlayer().then((p: any) => p.load(playingShow, true))
    }  
  }, [playingShow])

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <MainLayout 
        calendar={calendar}
        getMixcloudPlayer={getMixcloudPlayer}
        playerPlaying={playerPlaying}
        setPlayerPlaying={setPlayerPlaying}
      >
        <Switch>
          <Route path="/schedule">
            <Schedule calendar={calendar}/>
          </Route>
          <Route path="/residents">
            <Residents residents={residents}/>
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
        <div className="mixcloudWrap">
          <iframe
            style={{display: playingShow ? undefined : 'none'}}
            id="mixcloud-widget"
            allow="autoplay"
            width="100%"
            height="60"
            src={`https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&light=1&feed=${encodeURIComponent('/MusicBoxRadioUK/the-mbr-breakfast-show-friday-26th-march-2021/')}?autoPlay=true`}
            frameBorder="0" 
          />
        </div>
      </MainLayout>
    </Router> 
  );
}

export default App;
