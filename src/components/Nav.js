import React from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom'
import './Nav.css'
 
const Nav = () => {
    return (
        <nav className="nav-wrapper transparentBG">
            <div className="container">
                <a className="brand-logo"><i className="fa fa-ticket" aria-hidden="true"></i></a>
                <ul className="right">
                    <li><Link className="home-link" to="/">Home</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default withRouter(Nav)