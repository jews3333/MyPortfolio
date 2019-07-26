import React from 'react';
import PortfolioListItem from './PortfolioListItem';
import './PortfolioList.scss';

const databaseURL = "https://myportfolio-15261.firebaseio.com";

class PortfolioList extends React.Component {
    state = {
        type: "All"
    }
    
    _getApi = () => {
        fetch(`${databaseURL}/list.json`)
        .then(res => {
            if(res.status !== 200){
                throw new Error(res.statusText);
            }

            return res.json();
        })
        .then(list => this.setState({list : list}))
    }

    _renderListItem = () => {
        const lists = Object.keys(this.state.list).map((id, index) => {
            const list = this.state.list[id];
            return (
                <PortfolioListItem title={list.title} sumry={list.sumry} date={list.date} src={list.src} mytype={list.type} type={this.state.type} id={id} key={index} />
            )
        })
        return lists;
       
    }

    _listChangeHandler = (e) => {
        this.setState({
            type: e.target.innerText
        });
    }
    
    // shouldComponentUpdate(nextProps, nextState){
    //     return nextState.list !== this.state.list;
    // }

    componentDidMount(){
        this._getApi();
    }

    render(){
        return(
            <div>
                <div className="portfolioTab">
                    <button className={this.state.type === "All" ? "active" : null} onClick={this._listChangeHandler}>All</button>
                    <button className={this.state.type === "Web" ? "active" : null} onClick={this._listChangeHandler}>Web</button>
                    <button className={this.state.type === "App" ? "active" : null} onClick={this._listChangeHandler}>App</button>
                    <button className={this.state.type === "Templat" ? "active" : null} onClick={this._listChangeHandler}>Templat</button>
                    <button className={this.state.type === "Package" ? "active" : null} onClick={this._listChangeHandler}>Package</button>
                </div>
                <div className="portfolioList">
                    {this.state.list ? this._renderListItem() : '...Loading'}
                </div>
            </div>
        )
    }
}

export default PortfolioList;