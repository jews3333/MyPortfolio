import React, { Component } from 'react';
import './Profile.scss';

import WithLoad from 'WithLoad';

class Profile extends Component {

    render() {
        return (
            <div className={this.props.load ? "contents load" : "contents"}>
                <div className="profile">
                    <h3 className="tit">Profile</h3>
                    <p className="sub_tit">프로필 방문에 감사합니다</p>
                    <div className="information">
                        <div className="thumb">

                        </div>
                        <div className="list">
                            <p>웹 디자인&프론트엔드 개발자 조승현입니다.</p>
                            <div>
                                <dl>
                                    <dt>탄생일:</dt>
                                    <dd>1993.10.27</dd>
                                </dl>
                                <dl>
                                    <dt>거주지:</dt>
                                    <dd>부산광역시 수영구</dd>
                                </dl>
                                <dl>
                                    <dt>E-mail:</dt>
                                    <dd>jews333333@gmail.com</dd>
                                </dl>
                                <dl>
                                    <dt>E자격증:</dt>
                                    <dd>GTQ포토샵2급(2010)<br />정보기기운용기능사(2011)<br />웹디자인기능사(2017)</dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                    <h4 className="tit2">Skill</h4>
                    <div className="skill">
                        <div><img src={require("res/images/profile/html.png")} alt=""/></div>
                        <div><img src={require("res/images/profile/css.png")} alt=""/></div>
                        <div><img src={require("res/images/profile/javascript.png")} alt=""/></div>
                        <div><img src={require("res/images/profile/jquery.png")} alt=""/></div>
                        <div><img src={require("res/images/profile/react.png")} alt=""/></div>
                        <div><img src={require("res/images/profile/sass.png")} alt=""/></div>
                        <div><img src={require("res/images/profile/eclipse.png")} alt=""/></div>
                        <div><img src={require("res/images/profile/git.png")} alt=""/></div>
                        <div><img src={require("res/images/profile/photoshop.png")} alt=""/></div>
                        <div><img src={require("res/images/profile/illustrator.png")} alt=""/></div>
                    </div>
                    <h4 className="tit2">Education</h4>
                    <div className="education">
                        <div className="list">
                            <dl>
                                <dt>2012.2</dt>
                                <dd>부산정보고등학교 사이버정보통신과 졸업</dd>
                            </dl>
                            <dl>
                                <dt>2017</dt>
                                <dd>경남정보대학교 산업디자인과 졸업
                                    <ul>
                                        <li>2016 대선주조 마케팅 공모전 은상 수상</li>
                                    </ul>
                                </dd>
                            </dl>
                            <dl>
                                <dt>2017.1</dt>
                                <dd>앤시정보기술(주) 입사
                                    <ul>
                                        <li>국립부산과학관 홈페이지 유지보수 관리용역</li>
                                        <li>남구도서관 홈페이지 유지보수</li>
                                        <li>창원대학교 홈페이지 유지보수관리</li>
                                        <li>대저생태공원 캠핑장 홈페이지 구축 용역</li>
                                        <li>청소년여가문화 모바일 앱(이락) 개편 용역</li>
                                        <li>부산도시공사 홈페이지 유지보수</li>
                                        <li>부산교통공사 정보자원시스템 통합유지보수 용역</li>
                                        <li>㈜벡스코 정보시스템 개선 및 통합유지관리</li>
                                        <li>부산시청 홈페이지 유지보수</li>
                                    </ul>
                                </dd>
                            </dl>
                            <dl>
                                <dt>2018.2 ~ 현재</dt>
                                <dd>부산시청 통합 홈페이지 유지보수 요원
                                    <ul>
                                        <li>부산시청 오거돈 시장실 홈페이지 개설</li>
                                        <li>OK1번가 홈페이지 개설</li>
                                        <li>OK1번가 시즌2 홈페이지 개설</li>
                                        <li>시민참여예산 홈페이지 개설</li>
                                        <li>부산아이다가치키움 사업 홈페이지 개설</li>
                                        <li>2030엑스포 홈페이지 리뉴얼</li>
                                        <li>2019부산광역시 홈페이지 리뉴얼</li>
                                        <li>상수도사업본부 홈페이지 리뉴얼</li>
                                    </ul>
                                </dd>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default WithLoad(Profile);