import React, {Component} from 'react';
import PortfolioList from './PortfolioList';

class Portfolio extends Component {

    state = {
        load: false
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({
                load : true
            });
        },10);
    }

    render(){
        return (
            <div className={this.state.load ? "contents load" : "contents"}>
                <div className="content">
                    <p>{this.props.master}</p>
                    <PortfolioList/>
                </div>
            </div>
        )
    }
}

export default Portfolio;