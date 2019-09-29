import React from 'react';
import './PortfolioView.scss';

class PortfolioView extends React.Component {


    //뷰페이지 현재 사용하지 않음. axios로 대체함

    state={}

    _getApi = () => {
        const match = this.props.match;
        const databaseURL = `https://myportfolio-15261.firebaseio.com/list/${match.params.id}.json`;
        fetch(databaseURL)
        .then(res => res.json())
        .then(info => this.setState(info))
    }

    componentDidMount(){
        this._getApi();
    }


    render(){
        return(
            <div className="portfolioView">
                <div className="poster">
                    <img src={this.state.src ? require(`res/images/portfolio/${this.state.src}`) : null} alt=''/>
                </div>
                <div className="info">
                    <span>{this.state.type}</span>
                    <h4 className="title">{this.state.title}</h4>
                    <p className="date">{this.state.date}</p>
                    <p className="sumry">{this.state.sumry}</p>
                </div>
            </div>
        )
    }
}

export default PortfolioView;