// components/NavBar.js
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            <Link to="/profile">Profile</Link>
        </nav>
    );
};

export default NavBar;
