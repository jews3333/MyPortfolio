import React from 'react';
import { NavLink } from 'react-router-dom';

import './Header.scss';

class Header extends React.Component{

    state = {
        nav : false
    }

    _navOpen = () => {
        const header = document.querySelector(".header");
        if(!this.state.nav){
            this.setState({
                nav: true
            });
            setTimeout(() => {
                header.classList.add("show");
            },10);
        } else {
            header.classList.remove("show");
            setTimeout(() => {
                this.setState({
                    nav: false
                });
            },300);
        }
    }

    render(){

        return (
            <header className={`header ${this.state.nav ? "open" : ""}`}>
                <button className="navBtn" onClick={this._navOpen} title="메뉴열기"><span></span><span></span><span></span><span></span></button>
                <div className="headerNav">
                    <div>
                        <NavLink exact to="/" activeClassName="active">Home</NavLink>
                        <NavLink to="/portfolio" activeClassName="active">Portfolio</NavLink>
                        <NavLink to="/profile" activeClassName="active">Profile</NavLink>
                        <NavLink to="/test" activeClassName="active">Test</NavLink>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;