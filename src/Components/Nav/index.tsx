import { NavLink, useLocation } from "react-router-dom";
import './styles.css';

export const Nav = () => {
    const location = useLocation()
    const white = location.pathname === '/'
    console.log('white', white)
    return <div className={`nav ${white ? 'white' : ''}`}>
        <NavLink exact activeClassName="active" to="/latest">latest</NavLink>
        <NavLink exact activeClassName="active" to="/schedule">schedule</NavLink>
        <NavLink exact activeClassName="active" to="/residents">residents</NavLink>
        <NavLink exact activeClassName="active" to="/shop">shop</NavLink>
        <NavLink exact activeClassName="active" to="/about">about</NavLink>
    </div>
}