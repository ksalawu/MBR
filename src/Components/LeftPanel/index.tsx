import { Player } from '../Player'
import './styles.css';
import Logo from './MBR.png'

import fb from './socials/fb.png'
import insta from './socials/insta.png'
import mix from './socials/mix.png'
import tune from './socials/tune.png'
import twitter from './socials/twitter.png'
import { NavLink } from "react-router-dom";

export const LeftPanel = () => {
    return <div className="leftPanel">
        <NavLink to="/">
            <div className="logo">
                <img src={Logo}/>
            </div>
        </NavLink>
        <Player />
        <div className="socials">
            <div className="left">
                <a href="">
                    <img src={mix}/>
                </a>
                <a href="">
                    <img src={tune}/>
                </a>
            </div>
            <div className="right">
                <a href="">
                    <img src={twitter}/>
                </a>
                <a href="">
                    <img src={fb}/>
                </a>
                <a href="">
                    <img src={insta}/>
                </a>
            </div>
        </div>
    </div>
}