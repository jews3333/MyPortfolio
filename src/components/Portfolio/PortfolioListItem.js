import React from 'react';
import './PortfolioListItem.scss';
import {Link} from 'react-router-dom';
import LineEllipsis from 'react-lines-ellipsis';

class PortfolioListItem extends React.Component{

    render(){
        if(this.props.type !== 'All'){
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
                                <img src={require(`res/images/portfolio/thumb/${this.props.src}`)} alt=""/>
                            </div>
                            <div className="info">
                                <p className="title">{this.props.title}</p>
                                <p className="date">{`${this.props.date.substring(0,4)}-${this.props.date.substring(4,6)}-${this.props.date.substring(6,8)}`}</p>
                                <p className="sumry">
                                    <LineEllipsis
                                        text={this.props.sumry}
                                        maxLine='2'
                                        ellipsis='...'
                                        trimRight
                                        baseOn='letters'
                                    />
                                </p>
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
                            <img src={require(`res/images/portfolio/thumb/${this.props.src}`)} alt=""/>
                        </div>
                        <div className="info">
                            <p className="title">{this.props.title}</p>
                            <p className="date">{`${this.props.date.substring(0,4)}-${this.props.date.substring(4,6)}-${this.props.date.substring(6,8)}`}</p>
                            <p className="sumry">
                                <LineEllipsis
                                    text={this.props.sumry}
                                    maxLine='2'
                                    ellipsis='...'
                                    trimRight
                                    baseOn='letters'/>
                            </p>
                            <p className="type">{this.props.mytype}</p>
                        </div>
                    </Link>
                </div>
            )
        }
    }
}

export default PortfolioListItem;