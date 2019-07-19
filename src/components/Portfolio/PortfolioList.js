import React from 'react';
import PortfolioListItem from './PortfolioListItem';

import './PortfolioList.scss';

class PortfolioList extends React.Component {
    state = {
        type: "All",
        list: [
            {
                id : 1,
                title : "001",
                sumry : "testtesttest",
                date : "20190830",
                src : "001_desktop.jpg",
                type : "Web"
            },{
                id : 2,
                title : "002",
                sumry : "testtesttest",
                date : "20190831",
                src : "002_desktop.jpg",
                type : "App"
            },{
                id : 3,
                title : "003",
                sumry : "testtesttest",
                date : "20190831",
                src : "001_desktop.jpg",
                type : "Templat"
            },{
                id : 4,
                title : "004",
                sumry : "testtesttest",
                date : "20190831",
                src : "002_desktop.jpg",
                type : "Package"
            },{
                id : 5,
                title : "005",
                sumry : "testtesttest",
                date : "20190831",
                src : "001_desktop.jpg",
                type : "Web"
            },{
                id : 6,
                title : "006",
                sumry : "testtesttest",
                date : "20190831",
                src : "002_desktop.jpg",
                type : "App"
            }
        ]
    }

    _renderListItem = () => {
        const list = this.state.list.map((list, index) => {
            return <PortfolioListItem title={list.title} sumry={list.sumry} date={list.date} src={list.src} mytype={list.type} type={this.state.type} key={index} />
        })

        return list;
    }

    _listChangeHandler = (e) => {
        this.setState({
            type: e.target.innerText
        });
    }

    componentDidMount(){
        
    }

    render(){
        return(
            <div>
                <div className="portfolioTab">
                    <button className={this.state.type == "All" ? "active" : null} onClick={this._listChangeHandler}>All</button>
                    <button className={this.state.type == "Web" ? "active" : null} onClick={this._listChangeHandler}>Web</button>
                    <button className={this.state.type == "App" ? "active" : null} onClick={this._listChangeHandler}>App</button>
                    <button className={this.state.type == "Templat" ? "active" : null} onClick={this._listChangeHandler}>Templat</button>
                    <button className={this.state.type == "Package" ? "active" : null} onClick={this._listChangeHandler}>Package</button>
                </div>
                <div className="portfolioList">
                    {this.state.list ? this._renderListItem() : null}
                </div>
            </div>
        )
    }
}

export default PortfolioList;