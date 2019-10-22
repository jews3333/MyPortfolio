import React, { Component } from 'react';
import SlickSlider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Portfolio.scss";

import { NavLink } from 'react-router-dom';
import WithLoad from 'WithLoad';

import toast from 'modules/toast';

class Portfolio extends Component {

    render() {

        const settings = {
            dots: true,
            infinite: true,
            speed: 700,
            slidesToShow: 1,
            slidesToScroll: 1
        }
        return (
            <div id="contents" className={this.props.load ? "contents load" : "contents"}>
                <div className="main_protfolio">
                    <h3 className="tit">Portfolio</h3>
                    <p className="sub_tit">대표 포트폴리오입니다</p>
                    <SlickSlider {...settings}>
                        <div className="slide">
                            <div className="mock_pc">
                                <img src={require('res/images/portfolio/mock_pc.png')} alt=""/>
                                <div className="img">
                                    <img src={require('res/images/portfolio/Web/2019_001.jpg')} alt=""/>
                                </div>
                            </div>
                            <div className="mock_mobile">
                                <img src={require('res/images/portfolio/mock_mobile.png')} alt=""/>
                                <div className="img">
                                    <img src={require('res/images/portfolio/Web/thumb/2019_001.jpg')} alt=""/>
                                </div>
                            </div>
                            <div className="link">
                                <a href="http://www.busan.go.kr/" target="_blank" rel="noopener noreferrer" title="새창 열림">부산광역시</a>
                            </div>
                        </div>
                        <div className="slide">
                            <div className="mock_pc">
                                <img src={require('res/images/portfolio/mock_pc.png')} alt=""/>
                                <div className="img">
                                    <img src={require('res/images/portfolio/Web/2019_006.jpg')} alt=""/>
                                </div>
                            </div>
                            <div className="mock_mobile">
                                <img src={require('res/images/portfolio/mock_mobile.png')} alt=""/>
                                <div className="img">
                                    <img src={require('res/images/portfolio/Web/thumb/2019_006.jpg')} alt=""/>
                                </div>
                            </div>
                            <div className="link">
                                <a href="http://www.busan.go.kr/" target="_blank" rel="noopener noreferrer" title="새창 열림">부산도시공사</a>
                            </div>
                        </div>
                        <div className="slide">
                            <div className="mock_pc">
                                <img src={require('res/images/portfolio/mock_pc.png')} alt=""/>
                                <div className="img">
                                    <img src={require('res/images/portfolio/Web/2019_005.jpg')} alt=""/>
                                </div>
                            </div>
                            <div className="mock_mobile">
                                <img src={require('res/images/portfolio/mock_mobile.png')} alt=""/>
                                <div className="img">
                                    <img src={require('res/images/portfolio/Web/thumb/2019_005.jpg')} alt=""/>
                                </div>
                            </div>
                            <div className="link">
                                <a href="http://www.busan.go.kr/" target="_blank" rel="noopener noreferrer" title="새창 열림">상수도사업본부</a>
                            </div>
                        </div>
                        <div className="slide">
                            <div className="mock_pc">
                                <img src={require('res/images/portfolio/mock_pc.png')} alt=""/>
                                <div className="img">
                                    <img src={require('res/images/portfolio/Web/2018_003.jpg')} alt=""/>
                                </div>
                            </div>
                            <div className="mock_mobile">
                                <img src={require('res/images/portfolio/mock_mobile.png')} alt=""/>
                                <div className="img">
                                    <img src={require('res/images/portfolio/Web/thumb/2018_003.jpg')} alt=""/>
                                </div>
                            </div>
                            <div className="link">
                                <a href="http://www.busan.go.kr/mayor" target="_blank" rel="noopener noreferrer" title="새창 열림">부사시청 시장실</a>
                            </div>
                        </div>
                        <div className="slide">
                            <div className="mock_pc">
                                <img src={require('res/images/portfolio/mock_pc.png')} alt=""/>
                                <div className="img">
                                    <img src={require('res/images/portfolio/Web/2019_002.jpg')} alt=""/>
                                </div>
                            </div>
                            <div className="mock_mobile">
                                <img src={require('res/images/portfolio/mock_mobile.png')} alt=""/>
                                <div className="img">
                                    <img src={require('res/images/portfolio/Web/thumb/2019_002.jpg')} alt=""/>
                                </div>
                            </div>
                            <div className="link">
                                <a href="http://www.busan.go.kr/ok2nd" target="_blank" rel="noopener noreferrer" title="새창 열림">OK1번가 시즌2</a>
                            </div>
                        </div>
                        <div className="slide">
                            <div className="mock_pc">
                                <img src={require('res/images/portfolio/mock_pc.png')} alt=""/>
                                <div className="img">
                                    <img src={require('res/images/portfolio/Web/2018_002.jpg')} alt=""/>
                                </div>
                            </div>
                            <div className="mock_mobile">
                                <img src={require('res/images/portfolio/mock_mobile.png')} alt=""/>
                                <div className="img">
                                    <img src={require('res/images/portfolio/Web/thumb/2018_002.jpg')} alt=""/>
                                </div>
                            </div>
                            <div className="link">
                                <a href={(e) => e.preventDefault()} onClick={() => toast("현재 시즌1은 종료되었습니다")} target="_blank" rel="noopener noreferrer" title="새창 열림">OK1번가 시즌1</a>
                            </div>
                        </div>
                    </SlickSlider>
                    <NavLink to={`${window.location.pathname}/list`} className="more">more</NavLink>
                </div>
            </div>
        )
    }
}

export default WithLoad(Portfolio);