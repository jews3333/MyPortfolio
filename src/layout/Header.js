import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

import './Header.scss';

class Header extends React.Component{

    constructor(){
        super();
        this.state = {
            nav : false
        }
        this._navReset = this._navReset.bind(this);
        this._handleClick = this._handleClick.bind(this);
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

    _navReset(){
        if (this.state.nav) {
            this.setState({
                nav:false
            });
        }
    }

    _loadReset(){
        document.querySelector('#contents').classList.remove('load');
    }

    _handleClick(e) {
        e.preventDefault();

        this._navReset();
        this._loadReset();

        const path = e.target.href.split("/")[3];
        setTimeout(() => {
            this.props.history.push("/"+path);
        },500)
        
    }

    

    render(){

        return (
            <header className={`header ${this.state.nav ? "open" : ""}`}>
                <button className="navBtn" onClick={this._navOpen} title="메뉴열기"><span></span><span></span><span></span><span></span></button>
                <div className="headerNav">
                    <div>
                        <NavLink exact to="/" activeClassName="active" onClick={(e) => this._handleClick(e)}>Home</NavLink>
                        <NavLink to="/portfolio" activeClassName="active" onClick={(e) => this._handleClick(e)}>Portfolio</NavLink>
                        <NavLink to="/profile" activeClassName="active" onClick={(e) => this._handleClick(e)}>Profile</NavLink>
                        {/* <NavLink to="/test" activeClassName="active" onClick={this._handleClick}>Test</NavLink> */}
                    </div>
                </div>
            </header>
        )
    }
}

export default withRouter(Header);