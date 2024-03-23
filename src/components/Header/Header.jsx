import { Link, NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav>
                <h5>My website</h5>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/users">Users</NavLink>
                <NavLink to="/posts">Posts</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact us</NavLink>
            </nav>
        </div>
    );
};

export default Header;