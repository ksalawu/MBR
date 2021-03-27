import { Dispatch, SetStateAction} from 'react'
import './styles.css';

import { Nav } from '../Components/Nav'
import { LeftPanel } from  '../Components/LeftPanel'
export const MainLayout = ({children, calendar, getMixcloudPlayer, playerPlaying, setPlayerPlaying} : { children: React.ReactNode, calendar?: any, getMixcloudPlayer?: () => Promise<any>, playerPlaying?: boolean, setPlayerPlaying? : Dispatch<SetStateAction<boolean | undefined>> }) => {
    return <div className="mainLayout">
        <LeftPanel 
            calendar={calendar}
            getMixcloudPlayer={getMixcloudPlayer}
            playerPlaying={playerPlaying}
            setPlayerPlaying={setPlayerPlaying}
        />
        <div className="rightPanel">
            <Nav />
            <div className="page">
                {children}
            </div>
        </div>
    </div>
}