import './styles.css';

import { Nav } from '../Components/Nav'
import { LeftPanel } from  '../Components/LeftPanel'
export const MainLayout = ({children, calendar} : { children: React.ReactNode, calendar?: any }) => {
    return <div className="mainLayout">
        <LeftPanel calendar={calendar}/>
        <div className="rightPanel">
            <Nav />
            <div className="page">
                {children}
            </div>
        </div>
    </div>
}