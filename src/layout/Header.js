import React from 'react';
import { NavLink } from 'react-router-dom';

import './Header.scss';

class Header extends React.Component {
    render(){
        return (
            <header className="header">
                <NavLink exact to="/" activeClassName="active">Home</NavLink>
                <NavLink to="/sub1" activeClassName="active">Sub1</NavLink>
                <NavLink to="/sub2" activeClassName="active">Sub2</NavLink>
            </header>
        )
    }
}

export default Header;