import React from 'react';
import './PortfolioView.scss';

class PortfolioView extends React.Component {
    render(){
        return(
            <div class="portfolioView">
                <div class="poster">
                    <img src={this.props.location.state.imgSrc} alt=''/>
                </div>
                <div class="info">
                    <span>{this.props.location.state.type}</span>
                    <h4 class="title">{this.props.location.state.title}</h4>
                    <p class="date">{this.props.location.state.date}</p>
                    <p class="sumry">{this.props.location.state.sumry}</p>
                </div>
            </div>
        )
    }
}

export default PortfolioView;