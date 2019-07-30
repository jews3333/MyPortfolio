import React from 'react';
import { NavLink } from 'react-router-dom';

import './Header.scss';

class Header extends React.Component{
    render(){
        return (
            <header className="header">
                <NavLink exact to="/" activeClassName="active">Home</NavLink>
                <NavLink to="/portfolio" activeClassName="active">Portfolio</NavLink>
                <NavLink to="/profile" activeClassName="active">Profile</NavLink>
                <NavLink to="/test" activeClassName="active">Test</NavLink>
            </header>
        )
    }
}

export default Header;