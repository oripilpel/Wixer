import React from 'react';
import { connect } from 'react-redux';
import { NavLink, Link, withRouter } from 'react-router-dom';
import { onLogout } from '../store/user.actions';

class _Header extends React.Component {
    state = {
        isMenuOpen: false
    }

    toggleMenu = (isMenuOpen = !this.state.isMenuOpen) => {
        this.setState({ isMenuOpen })
    }

    onLogout = () => {
        this.props.onLogout()
        this.props.history.push('/login')
    }

    render() {
        const { user } = this.props
        const { pathname } = this.props.ownProps.location
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
                    {user && <NavLink className="link flex align-center" onClick={() => this.toggleMenu(false)} to="/dashboard">Dashboard</NavLink>}

                    {!user && (
                        <div className="link flex align-center header-login-signup">
                            <Link onClick={() => this.toggleMenu(false)} to="/login">login</Link>
                            <span>/</span>
                            <Link onClick={() => this.toggleMenu(false)} to="/signup">signup</Link>
                        </div>
                    )}
                    {user && <button className="link flex align-center" onClick={this.onLogout}>Logout</button>}
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

function mapStateToProps(state, ownProps) {
    return {
        user: state.userModule.user,
        ownProps
    }
}

const mapDispatchToProps = {
    onLogout
}

export const Header = withRouter(connect(mapStateToProps, mapDispatchToProps)(_Header));