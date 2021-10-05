import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';


class _Header extends React.Component {
    state = {
        isMenuOpen: false
    }

    toggleMenu = (isMenuOpen = !this.state.isMenuOpen) => {
        this.setState({ isMenuOpen })
    }

    render() {
        const { pathname } = this.props.location
        const { isMenuOpen } = this.state
        if (pathname.includes('publish')) return <></>
        return (
            <header className={`header flex align-center justify-between ${pathname.includes("editor") ? "min" : ""}`}>

                <div className={`screen ${isMenuOpen ? "active" : ""}`} onClick={() => this.toggleMenu(false)}></div>
                <div className="logo">
                    <NavLink to="/">
                        Wixer
                    </NavLink>
                </div>

                <nav className={`links flex ${isMenuOpen ? "active" : ""}`}>
                    <NavLink className="link flex align-center" onClick={() => this.toggleMenu(false)} to="/" exact>Home</NavLink>
                    <NavLink className="link flex align-center" onClick={() => this.toggleMenu(false)} to="/editor">Editor</NavLink>
                    <NavLink className="link flex align-center" onClick={() => this.toggleMenu(false)} to="/templates">Templates</NavLink>
                    <NavLink className="link flex align-center" onClick={() => this.toggleMenu(false)} to="/about">About</NavLink>
                </nav>
                <div className={`hamb-icon ${isMenuOpen ? "active" : ""}`} onClick={() => this.toggleMenu()}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

            </header>
        )
    }
}

export const Header = withRouter(_Header);