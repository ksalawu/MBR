import { Dispatch, SetStateAction} from 'react'
import { Player } from '../Player'
import './styles.css';
import Logo from './MBR.png'

import fb from './socials/fb.png'
import insta from './socials/insta.png'
import mix from './socials/mix.png'
import tune from './socials/tune.png'
import twitter from './socials/twitter.png'
import { NavLink } from "react-router-dom";
import ReactGA from 'react-ga'

export const LeftPanel = ({calendar, getMixcloudPlayer, playerPlaying, setPlayerPlaying}:{calendar?: any, getMixcloudPlayer?: () => Promise<any>, playerPlaying?: boolean, setPlayerPlaying? : Dispatch<SetStateAction<boolean | undefined>> }) => {
    
    return <div className="leftPanel">
        <NavLink to="/">
            <div className="logo">
                <img src={Logo}/>
            </div>
        </NavLink>
        <Player 
            calendar={calendar}
            getMixcloudPlayer={getMixcloudPlayer}
            playerPlaying={playerPlaying}
            setPlayerPlaying={setPlayerPlaying}
        />
        <div className="socials">
            <div className="left">
                <ReactGA.OutboundLink to={process.env.REACT_APP_MIXCLOUD_LINK!} target="_blank" eventLabel="social-click-mix">
                    <img src={mix}/>
                </ReactGA.OutboundLink>
                <ReactGA.OutboundLink to={process.env.REACT_APP_TUNEIN_LINK!} target="_blank" eventLabel="social-click-tune">
                    <img src={tune}/>
                </ReactGA.OutboundLink>
            </div>
            <div className="right">
                <ReactGA.OutboundLink to={process.env.REACT_APP_TWITTER_LINK!} target="_blank" eventLabel="social-click-twitter">
                    <img src={twitter}/>
                </ReactGA.OutboundLink>
                <ReactGA.OutboundLink to={process.env.REACT_APP_FACEBOOK_LINK!} target="_blank" eventLabel="social-click-fb">
                    <img src={fb}/>
                </ReactGA.OutboundLink>
                <ReactGA.OutboundLink to={process.env.REACT_APP_INSTA_LINK!} target="_blank" eventLabel="social-click-insta">
                    <img src={insta}/>
                </ReactGA.OutboundLink>
            </div>
        </div>
    </div>
}