import React from 'react';
import {Link} from 'react-router-dom';

const NavBar =  () => {
    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <button className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="nvbarNavAltMarkup">
                <ul className="navbar-nav m-auto">
                    <li className="nav-item">
                        <Link to="/Profile" className="nav-link">Profile</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Keys" className="nav-link">LLaves</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/SignPage" className="nav-link">Firma Digital</Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/Register" className="nav-link">Registrarse</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/Login" className="nav-link">Login</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;