// @ts-nocheck
import { useState, useRef, useEffect } from 'react'
import Marquee from "react-fast-marquee";
import './styles.css';

export const Player = ({calendar, getMixcloudPlayer, playerPlaying, setPlayerPlaying}:{calendar?: any, getMixcloudPlayer?: () => Promise<any>, playerPlaying?: boolean, setPlayerPlaying? : Dispatch<SetStateAction<boolean | undefined>> }) => {
    const [playing, setPlaying] = useState(false);
    const [playPercentage, setPlayPercentage] = useState(30)
    const audioRef = useRef()
    
    useEffect(() => {
        if (playing) {
            setPlayerPlaying(true)
            getMixcloudPlayer().then((p: any) => p.pause())
            audioRef.current.play()
        }
        else audioRef.current.pause()
    }, [playing])

    useEffect(() => {
        setPlaying(playerPlaying)
    }, [playerPlaying])

    const currentShow = calendar && calendar.items[0]
    const upNext = calendar && calendar.items[1]
    
    return <div className="player">
        <audio src={process.env.REACT_APP_STREAM_URL} ref={audioRef}/>
        <p>
            <div className="circle flashing" style={{backgroundColor:'red'}}/>
            live now
        </p>
        <div className="marquee-wrap">
            <Marquee
                speed={10}
                gradient={false}
                pauseOnHover
                className="marquee-content"
            >
                {currentShow?.summary}
                <div style={{width: 20, height: 20}}/>
            </Marquee>
        </div>

        <div 
            onClick={() => {
            setPlaying(!playing)
            }}
            className="playWrap"
            style={{backgroundImage: `url('./${ playing ? 'pause' : 'play'}.svg')`}}
        >
        </div>
        {/* <div className="timeline">
            <div className="marker" style={{left: `${playPercentage}%`}}/>
        </div> */}
        <div className="time">
            {
              currentShow && `${new Date(currentShow?.start.dateTime).toLocaleTimeString().replace(':','').slice(0,4)} - ${new Date(currentShow?.end.dateTime).toLocaleTimeString().replace(':','').slice(0,4)}`  
            }
        </div>
        <a className="watch">
            Watch Live {'>'}
        </a>
        <div className="next">
            <div>up next:</div>
            <div>{upNext?.summary}</div>
            <div>
                {
                    upNext && `${new Date(upNext?.start.dateTime).toLocaleTimeString().replace(':','').slice(0,4)} - ${new Date(upNext?.end.dateTime).toLocaleTimeString().replace(':','').slice(0,4)}`  
                }
            </div>
        </div>
    </div>
}