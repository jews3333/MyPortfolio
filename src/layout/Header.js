import React from 'react';
import { NavLink } from 'react-router-dom';

import './Header.scss';

class Header extends React.Component{
    render(){
        return (
            <header className="header">
                <NavLink exact to="/" activeClassName="active">Home</NavLink>
                <NavLink to="/portfolio" activeClassName="active">portfolio</NavLink>
                <NavLink to="/profile" activeClassName="active">Profile</NavLink>
            </header>
        )
    }
}

export default Header;