import { NavLink } from "react-router-dom";
import './styles.css';

export const Nav = () => {
    return <div className="nav">
        <NavLink exact activeClassName="active" to="/">latest</NavLink>
        <NavLink exact activeClassName="active" to="/schedule">schedule</NavLink>
        <NavLink exact activeClassName="active" to="/residents">residents</NavLink>
        <NavLink exact activeClassName="active" to="/shop">shop</NavLink>
        <NavLink exact activeClassName="active" to="/about">about</NavLink>
    </div>
}