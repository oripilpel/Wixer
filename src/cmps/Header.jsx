import React from 'react';

import Logo from '../assets/img/logo.png';
import { NavLink } from 'react-router-dom';

export class Header extends React.Component {
    state = {
        isMenuOpen: false
    }

    toggleMenu = () => {
        let isMenuOpen = !this.state.isMenuOpen
        this.setState({ isMenuOpen })
    }

    render() {
        const { pathname } = this.props.location
<<<<<<< HEAD
        const { isMenuOpen } = this.state
=======
>>>>>>> 3a6a69eef076028a0638969b176320b2620ad6a3
        return (
            <header className={`header flex align-center justify-between ${pathname.includes("editor") ? "min" : ""}`}>

                <div className={`screen ${isMenuOpen ? "active" : ""}`} onClick={this.toggleMenu}></div>
                <div className="logo">
                    <NavLink to="/">
                        <img src={Logo} height="40px" />
                        Wixer
                    </NavLink>
                </div>

                <nav className={`links flex ${isMenuOpen ? "active" : ""}`}>
                    <NavLink className="link flex align-center" onClick={this.toggleMenu} to="/editor">Editor</NavLink>
                    <NavLink className="link flex align-center" onClick={this.toggleMenu} to="/templates">Templates</NavLink>
                    <NavLink className="link flex align-center" onClick={this.toggleMenu} to="/about">About</NavLink>
                </nav>
                <div className={`hamb-icon ${isMenuOpen ? "active" : ""}`} onClick={this.toggleMenu}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

            </header>
        )
    }
}