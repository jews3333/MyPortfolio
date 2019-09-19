import React from 'react';
import PortfolioListItem from './PortfolioListItem';
import './PortfolioList.scss';

import toast from 'modules/toast';
import { database } from 'firebase/init';

class PortfolioList extends React.Component {
    state = {
        type: "All",
        list: null
    }

    _getData = () => {
        database.ref("list").orderByChild("time").on("value", snapshot => {
            console.log(snapshot.val());
            if(snapshot.val() != null){
                this.setState({
                    list: snapshot.val()
                });
            } else {
                toast("데이터가 없습니다");
            }
        });
    }

    _renderListItem = () => {
        const lists = Object.keys(this.state.list).map((id, index) => {
            const list = this.state.list[id];
            return (
                <PortfolioListItem title={list.title} sumry={list.sumry} image={list.image} mytype={list.type} type={this.state.type} id={id} key={index} />
            )
        })
        return lists;

    }

    _listChangeHandler = (e) => {
        const etarget = e.target;
        for (let i = 0; i < document.querySelectorAll(".portfolioListItem").length; i++) {
            document.querySelectorAll(".portfolioListItem")[i].classList.remove("load");
        }
        setTimeout(() => {
            this.setState({
                type: etarget.innerText
            });
            for (let i = 0; i < document.querySelectorAll(".portfolioListItem").length; i++) {
                document.querySelectorAll(".portfolioListItem")[i].classList.add("load");
            }
        }, 200);
    }

    // componentDidUpdate(prevProps, prevState){
    //     if(this.state.type !== prevState.type){
    //         document.getElementsByClassName("portfolioList")[0].className = "portfolioList";
    //         setTimeout(() => {
    //             document.getElementsByClassName("portfolioList")[0].className = "portfolioList load";
    //         },300);
    //     }
    // }

    componentDidMount() {
        this._getData();
        document.getElementsByClassName("portfolioList")[0].className = "portfolioList load";
    }

    render() {
        return (
            <div className="portfolio">
                <div className="portfolioTab">
                    <button className={this.state.type === "All" ? "active" : null} onClick={this._listChangeHandler}>All</button>
                    <button className={this.state.type === "Web" ? "active" : null} onClick={this._listChangeHandler}>Web</button>
                    <button className={this.state.type === "App" ? "active" : null} onClick={this._listChangeHandler}>App</button>
                    <button className={this.state.type === "Templat" ? "active" : null} onClick={this._listChangeHandler}>Templat</button>
                </div>
                <div className="portfolioList">
                    {this.state.list ? this._renderListItem() : <img src={require('res/images/loading.svg')} alt="loading" className="loading" />}
                </div>
            </div>
        )
    }
}

export default PortfolioList;