// @ts-nocheck
import { useState } from 'react'
import Marquee from "react-smooth-marquee"
import './styles.css';

export const Player = () => {
    const [playing, setPlaying] = useState(false);
    const [playPercentage, setPlayPercentage] = useState(30)

    return <div className="player">
        <p>
            <div className="circle flashing" style={{backgroundColor:'red'}}/>
            live now
        </p>
        <Marquee>
            This is a long show title name
        </Marquee>
        <div 
            onClick={() => {
            setPlaying(!playing)
            }}
            className="playWrap"
            style={{backgroundImage: `url('./${ playing ? 'play' : 'pause'}.svg')`}}
        >
        </div>
        <div className="timeline">
            <div className="marker" style={{left: `${playPercentage}%`}}/>
        </div>
        <div className="time">
            1900 - 2000
        </div>
        <a className="watch">
            Watch Live {'>'}
        </a>
        <div className="next">
            <div>up next:</div>
            <div>Show Name</div>
            <div>1900 - 2000</div>
        </div>
    </div>
}