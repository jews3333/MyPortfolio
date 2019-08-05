import React from 'react';
import LineEllipsis from 'react-lines-ellipsis';
import axios from 'axios';

import './PortfolioListItem.scss';

class PortfolioListItem extends React.Component{

    _axiosView = (e) => {
        e.preventDefault();
        axios.get(`https://myportfolio-15261.firebaseio.com/list/${this.props.id}.json`)
        .then(function(response){
            const div = document.createElement("div");
            const src = require(`res/images/portfolio/${response.data.type}/${response.data.src}`);
            const close = () => {
                div.classList.remove("load");
                setTimeout(() => {
                    document.body.removeChild(div);
                },200);
            }

            const rating = () => {
                if(response.data.type === "Web"){
                    return "<span class='design'><strong>Design</strong> "+response.data.rating.design+"</span><span class='html'><strong>Html</strong> "+response.data.rating.html+"</span><span class='css'><strong>CSS</strong> "+response.data.rating.css+"</span><span class='javascript'><strong>Javascript</strong> "+response.data.rating.javascript+"</span>";
                } else
                if(response.data.type === "App"){
                    const device = () => {
                        if(response.data.rating.android && response.data.rating.ios) {
                            return "Android, IOS";
                        } else 
                        if (response.data.rating.android && !response.data.rating.ios){
                            return "Android";
                        } else
                        if (!response.data.rating.android && response.data.rating.ios) {
                            return "IOS";
                        } else {
                            return null;
                        }
                    }
                    
                    return "<span class='device'><strong>Device</strong> "+device()+"</span><span class='design'><strong>Design</strong> "+response.data.rating.design+"</span><span class='publishing'><strong>Publishing</strong> "+response.data.rating.publishing+"</span>";
                } else
                if(response.data.type === "Templat"){
                    return "<span class='device'><span class='design'><strong>Design</strong> "+response.data.rating.design+"</span>";
                } else {
                    return null;
                }
            }

            div.className = "axiosView";
            div.innerHTML = "<div><div class='img'><img src='"+src+"' alt=''></div><div class='txt'><p class='tit'><span class='type'>"+response.data.type+"</span>"+response.data.title+"</p><p class='date'><strong>Development</strong> "+response.data.date+"</p><div class='rating'>"+rating()+"</div><p class='sumry'>"+response.data.sumry+"</p></div><button class='close'>닫기</button></div>";
            document.body.appendChild(div);

            document.getElementsByClassName("close")[0].addEventListener("click", close);

            setTimeout(() => {
                div.classList.add("load");
            },100);
        })
        .catch(function(err){
            console.log(err);
            alert("데이터를 불러오는데 실패하였습니다.");
        })
    }

    _load = (e) => {
        const t = e.currentTarget;
        setTimeout(() => {
            t.classList.add("load");
        },100);
    }


    render(){

        const category = this.props.mytype;

        if(this.props.type !== 'All'){
            if(this.props.type === this.props.mytype){
                return (
                    <div className="portfolioListItem" onLoad={this._load}>
                        <button onClick={this._axiosView}>
                            <div className="thumb">
                                <img src={require(`res/images/portfolio/${category}/thumb/${this.props.src}`)} alt=""/>
                            </div>
                            <div className="info">
                                <p className="title">{this.props.title}</p>
                                <p className="date">{`${this.props.date.substring(0,4)}-${this.props.date.substring(4,6)}-${this.props.date.substring(6,8)}`}</p>
                                <div className="sumry">
                                    <LineEllipsis
                                        text={this.props.sumry}
                                        maxLine='2'
                                        ellipsis='...'
                                        trimRight
                                    />
                                </div>
                                <p className="type">{this.props.mytype}</p>
                            </div>
                        </button>
                    </div>
                )
            } else {
                return null;
            }
        } else {
            return (
                <div className="portfolioListItem" onLoad={this._load}>
                    <button onClick={this._axiosView}>
                        <div className="thumb">
                            <img src={require(`res/images/portfolio/${category}/thumb/${this.props.src}`)} alt=""/>
                        </div>
                        <div className="info">
                            <p className="title">{this.props.title}</p>
                            <p className="date">{`${this.props.date.substring(0,4)}-${this.props.date.substring(4,6)}-${this.props.date.substring(6,8)}`}</p>
                            <div className="sumry">
                                <LineEllipsis
                                    text={this.props.sumry}
                                    maxLine='2'
                                    ellipsis='...'
                                    trimRight/>
                            </div>
                            <p className="type">{this.props.mytype}</p>
                        </div>
                    </button>
                </div>
            )
        }
    }
}

export default PortfolioListItem;