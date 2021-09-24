import React from 'react';
import Logo from '../assets/img/logo.png';
import { NavLink } from 'react-router-dom';

export class Header extends React.Component {
    render() {
        const { pathname } = this.props.location
        return (
            <header className={`header flex align-center justify-between ${pathname === "/editor" && "min"}`}>

                <div className="logo">
                    <NavLink to="/">
                        <img src={Logo} height="40px" />
                        Wixer
                    </NavLink>
                </div>
                <nav className="links flex">
                    <NavLink className="link flex align-center" to="/editor">Editor</NavLink>
                    <NavLink className="link flex align-center" to="/templates">Templates</NavLink>
                    <NavLink className="link flex align-center" to="/about">About</NavLink>
                </nav>
            </header>
        )
    }
}