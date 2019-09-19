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
            const image = require(`res/images/portfolio/${response.data.type}/${response.data.image}`);
            const close = () => {
                div.classList.remove("load");
                setTimeout(() => {
                    document.body.removeChild(div);
                },200);
            }

            div.className = "axiosView";
            div.innerHTML = "<div><div class='img'><img src='"+image+"' alt=''></div><div class='txt'><p class='tit'><span class='type'>"+response.data.type+"</span>"+response.data.title+"</p><p class='sumry'>"+response.data.sumry+"</p></div><button class='close'>닫기</button></div>";
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

        if(this.props.type !== 'All'){
            if(this.props.type === this.props.mytype){
                return (
                    <div className="portfolioListItem" onLoad={this._load}>
                        <button onClick={this._axiosView}>
                            <div className="thumb">
                                <img src={require(`res/images/portfolio/${this.props.mytype}/thumb/${this.props.image}`)} alt=""/>
                            </div>
                            <div className="info">
                                <p className="title">{this.props.title}</p>
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
                            <img src={require(`res/images/portfolio/${this.props.mytype}/thumb/${this.props.image}`)} alt=""/>
                        </div>
                        <div className="info">
                            <p className="title">{this.props.title}</p>
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