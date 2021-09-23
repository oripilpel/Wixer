import Logo from '../assets/img/logo.png';
import { NavLink } from 'react-router-dom';

export function Header() {
    return (
        <header className="header flex align-center justify-between">

            <div className="logo">
                <NavLink to="/">
                    <img src={Logo} height="40px" />
                    Wixer
                </NavLink>
            </div>
            <nav className="links flex">
                <div className="link flex align-center">
                    <NavLink to="/editor">Editor</NavLink>
                </div>
                <div className="link flex align-center">
                    <NavLink to="/templates">Templates</NavLink>
                </div>
                <div className="link flex align-center">
                    <NavLink to="/about">About</NavLink>
                </div>
            </nav>
        </header>
    )
}