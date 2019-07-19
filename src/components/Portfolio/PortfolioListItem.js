import React from 'react';
import './PortfolioListItem.scss';

class PortfolioListItem extends React.Component{

    _listItemHandler = (e) => {
        e.preventDefault();
        console.log(e);
    }

    render(){
        if(this.props.type != 'All'){
            if(this.props.type === this.props.mytype){
                return (
                    <div className="portfolioListItem">
                        <a href="#" onClick={this._listItemHandler}>
                            <div className="thumb">
                                <img src={require(`res/images/portfolio/${this.props.src}`)} alt=""/>
                            </div>
                            <div className="info">
                                <p className="title">{this.props.title}</p>
                                <p className="date">{this.props.date}</p>
                                <p className="sumry">{this.props.sumry}</p>
                                <p className="type">{this.props.mytype}</p>
                            </div>
                        </a>
                    </div>
                )
            } else {
                return null;
            }
        } else {
            return (
                <div className="portfolioListItem">
                    <a href="#" onClick={this._listItemHandler}>
                        <div className="thumb">
                            <img src={require(`res/images/portfolio/${this.props.src}`)} alt=""/>
                        </div>
                        <div className="info">
                            <p className="title">{this.props.title}</p>
                            <p className="date">{this.props.date}</p>
                            <p className="sumry">{this.props.sumry}</p>
                            <p className="type">{this.props.mytype}</p>
                        </div>
                    </a>
                </div>
            )
        }
    }
}

export default PortfolioListItem;