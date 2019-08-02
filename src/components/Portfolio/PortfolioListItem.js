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
                document.body.removeChild(div);
            }
            div.className = "axiosView";
            div.innerHTML = "<div><div class='img'><img src='"+src+"' alt=''></div><div class='txt'><p class='tit'><span class='type'>"+response.data.type+"</span>"+response.data.title+"</p><p class='date'><strong>Development</strong> "+response.data.date+"</p><div class='rating'><span class='html'><strong>Design</strong> "+response.data.design+"</span><span class='html'><strong>Html</strong> "+response.data.html+"</span><span class='css'><strong>CSS</strong> "+response.data.html+"</span><span class='javascript'><strong>Javascript</strong> "+response.data.html+"</span></div><p class='sumry'>"+response.data.sumry+"</p></div><button class='close'>닫기</button></div>";
            document.body.appendChild(div);

            document.getElementsByClassName("close")[0].addEventListener("click", close);
        })
        .catch(function(err){
            console.log(err);
            alert("데이터를 불러오는데 실패하였습니다.");
        })
    }


    render(){

        const category = this.props.mytype;

        if(this.props.type !== 'All'){
            if(this.props.type === this.props.mytype){
                return (
                    <div className="portfolioListItem">
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
                <div className="portfolioListItem">
                    <button onClick={this._axiosView}>
                        <div className="thumb">
                            {console.log(category)}
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