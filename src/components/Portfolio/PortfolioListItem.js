import React from 'react';
import LineEllipsis from 'react-lines-ellipsis';
import axios from 'axios';

import toast from 'modules/toast';

import { storage, database } from 'firebase/init';

import './PortfolioListItem.scss';

class PortfolioListItem extends React.Component{

    constructor(){
        super();
        this.state = {
            thumb: "",
            image: ""
        }

        this._thumbLoad = this._thumbLoad.bind(this);
        this._viewLoad = this._viewLoad.bind(this);
    }

    _viewLoad(){
        database.ref("list").child(this.props.id).on("value", snapshot => {
            // console.log(snapshot.val());
            if(snapshot.val() != null){
                storage.ref('portfolio/').child(`${snapshot.val().type}/${snapshot.val().image}`).getDownloadURL().then((url) => {
                    this.setState({
                        image: url
                    });

                    const div = document.createElement("div");

                    const close = () => {
                        div.classList.remove("load");
                        setTimeout(() => {
                            document.body.removeChild(div);
                        },200);
                    }
                    div.innerHTML = "<div><div class='img'><img src='"+this.state.image+"' alt='' class='view_img'></div><div class='txt'><p class='tit'><span class='type'>"+snapshot.val().type+"</span>"+snapshot.val().title+"</p><p class='sumry'>"+snapshot.val().sumry+"</p></div><button class='close'>닫기</button></div>";
                    div.className = "view";
                    document.body.appendChild(div);
    
                    document.getElementsByClassName("close")[0].addEventListener("click", close);
                    
                    setTimeout(() => {
                        div.classList.add("load");
                        
                        document.querySelector(".view_img").onload = (img) => {
                            let imgheight = img.currentTarget.clientHeight;
                            let maxheight = window.innerHeight || document.documentElement.clientHeight;
                            let txtheight = document.querySelector(".txt").offsetHeight;

                            if(imgheight > maxheight - 60) {
                                document.querySelector(".img").style.height = maxheight - 60 - txtheight + "px"; //
                            }
                        }
                        
                    },100);
                });

            } else {
                toast("데이터가 없습니다");
            }
        });
    }

    _load = (e) => {
        const t = e.currentTarget;
        setTimeout(() => {
            t.classList.add("load");
        },100);
    }

    _thumbLoad() {
        storage.ref('portfolio/').child(`${this.props.mytype}/thumb/${this.props.image}`).getDownloadURL().then((url) => {
            this.setState({
                thumb: url
            })
        });
    }

    componentDidMount(){
        this._thumbLoad();
    }


    render(){
        if(this.props.type !== 'All'){
            if(this.props.type === this.props.mytype){
                return (
                    <div className="portfolioListItem" onLoad={this._load}>
                        <button onClick={this._viewLoad}>
                            <div className="thumb">
                                {/* <img src={require(`res/images/portfolio/${this.props.mytype}/thumb/${this.props.image}`)} alt=""/> */}
                                <img src={this.state.thumb} alt=""/>
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
                    <button onClick={this._viewLoad}>
                        <div className="thumb">
                            {/* <img src={require(`res/images/portfolio/${this.props.mytype}/thumb/${this.props.image}`)} alt=""/> */}
                            <img src={this.state.thumb} alt=""/>
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
        }
    }
}

export default PortfolioListItem;