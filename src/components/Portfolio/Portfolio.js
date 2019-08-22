import React, { Component } from 'react';
import PortfolioList from './PortfolioList';

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
                <p>{this.props.master}</p>
                <PortfolioList />
            </div>
        )
    }
}

export default Portfolio;