import React from 'react';
import './PortfolioListItem.scss';
import {Link} from 'react-router-dom';

class PortfolioListItem extends React.Component{

    render(){
        if(this.props.type != 'All'){
            if(this.props.type === this.props.mytype){
                return (
                    <div className="portfolioListItem">
                       <Link to={{
                        pathname : `/portfolio/${this.props.id}`,
                        state: {
                            imgSrc: require(`res/images/portfolio/${this.props.src}`),
                            title: this.props.title,
                            date: this.props.date,
                            sumry: this.props.sumry,
                            type: this.props.mytype
                        }
                    }}>
                            <div className="thumb">
                                <img src={require(`res/images/portfolio/${this.props.src}`)} alt=""/>
                            </div>
                            <div className="info">
                                <p className="title">{this.props.title}</p>
                                <p className="date">{this.props.date}</p>
                                <p className="sumry">{this.props.sumry}</p>
                                <p className="type">{this.props.mytype}</p>
                            </div>
                        </Link>
                    </div>
                )
            } else {
                return null;
            }
        } else {
            return (
                <div className="portfolioListItem">
                    <Link to={{
                        pathname : `/portfolio/${this.props.id}`,
                        state: {
                            imgSrc: require(`res/images/portfolio/${this.props.src}`),
                            title: this.props.title,
                            date: this.props.date,
                            sumry: this.props.sumry,
                            type: this.props.mytype
                        }
                    }}>
                        <div className="thumb">
                            <img src={require(`res/images/portfolio/${this.props.src}`)} alt=""/>
                        </div>
                        <div className="info">
                            <p className="title">{this.props.title}</p>
                            <p className="date">{this.props.date}</p>
                            <p className="sumry">{this.props.sumry}</p>
                            <p className="type">{this.props.mytype}</p>
                        </div>
                    </Link>
                </div>
            )
        }
    }
}

export default PortfolioListItem;