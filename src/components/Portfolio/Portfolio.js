import React, { Component } from 'react';
import PortfolioList from './PortfolioList';
import { NavLink } from 'react-router-dom';

import Store from 'Store/store';

class Portfolio extends Component {

    state = {
        load: false
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                load: true
            });
        }, 10);
    }

    render() {
        return (
            <div className={this.state.load ? "contents load" : "contents"}>
                <Store.Consumer>
                    {store => store.user ? <NavLink to="/portfolio/form">Write</NavLink> : null}
                </Store.Consumer>
                <PortfolioList />
            </div>
        )
    }
}

export default Portfolio;