import React, { Component } from 'react';
import './Main.scss';

import WithLoad from 'WithLoad';

// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";

class Main extends Component {

    render(){
        return (
            <div id="contents" className={this.props.load ? "main load" : "main"}>
                <h3 className="hidden">Main</h3>
                <div>
                    <p>CHO SEONGHYUN'S</p>
                    <p>PORTFOLIO</p>
                    <p>웹 포트폴리오 사이트에 오신것을 환영합니다</p>
                </div>
            </div>
        )
    }
}

export default WithLoad(Main);