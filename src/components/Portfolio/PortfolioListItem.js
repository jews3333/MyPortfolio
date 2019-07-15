import React from 'react';

class PortfolioListItem extends React.Component{

    render(){

        const url = "/res/images/Portfolio/";

        return (
            <div className="portfolioListItem">
                <a href="">
                    <img src={url + this.props.image} alt=""/>
                    <p className="title">{this.props.title}</p>
                    <p className="date">{this.props.date}</p>
                    <p className="sumry">{this.props.sumry}</p>
                </a>
            </div>
        )
    }
}

export default PortfolioListItem;