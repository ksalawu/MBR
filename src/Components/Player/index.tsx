// @ts-nocheck
import { useState, useRef, useEffect } from 'react'
import Marquee from "react-fast-marquee";
import './styles.css';
import ReactGA from 'react-ga'

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
                if (!playing) audioRef.current.play()
                setPlaying(!playing)
                ReactGA.event({
                    category: 'Click',
                    action: 'Play Live',
                    label: currentShow?.summary
                });
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
        <ReactGA.OutboundLink className="watch" to={process.env.REACT_APP_WATCH_LINK} target="_blank" eventLabel={`watch-live-clickout`}>
            Watch Live {'>'}
        </ReactGA.OutboundLink>
        <div style={{padding: '10px'}}>
            <a style={{backgroundColor: 'black', color: 'white', padding: '10px'}} href="https://ko-fi.com/musicboxradiouk" target="_blank">Donate!</a>
        </div>
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
