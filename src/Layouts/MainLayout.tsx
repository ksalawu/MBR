import './styles.css';

import { Nav } from '../Components/Nav'
import { LeftPanel } from  '../Components/LeftPanel'
export const MainLayout = ({children} : { children: React.ReactNode }) => {
    return <div className="mainLayout">
        <LeftPanel />
        <div className="rightPanel">
            <Nav />
            <div className="page">
                {children}
            </div>
        </div>
    </div>
}