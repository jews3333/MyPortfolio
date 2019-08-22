import React, { Component } from 'react';
import './Profile.scss';

class Profile extends Component {

    state = {
        load: false
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                load: true
            });
        }, 10);
    }

    render() {
        return (
            <div className={this.state.load ? "contents load" : "contents"}>
                <div className="profile">
                    <h3 className="tit">Profile</h3>
                    <div className="infomation">
                        <div className="photo">
                            <img src="" alt="" />
                        </div>
                        <div className="about">
                            <h4 className="tit">Me?</h4>
                            <dl>
                                <dt>My Name is</dt>
                                <dd>Cho SeungHyeon 조승현</dd>
                            </dl>
                            <dl>
                                <dt>My Birthday is</dt>
                                <dd>1993.10.27</dd>
                            </dl>
                            <dl>
                                <dt>My Number is</dt>
                                <dd>010.9***.8***</dd>
                            </dl>
                            <dl>
                                <dt>My E-mail is</dt>
                                <dd>jews333333@gmail.com</dd>
                            </dl>
                            <dl>
                                <dt>My Address is</dt>
                                <dd>부산광역시 수영구</dd>
                            </dl>
                            <dl>
                                <dt>Introduction</dt>
                                <dd>안녕하세요</dd>
                            </dl>
                        </div>
                        <div className="skills">
                            <h4 className="tit">I can do it!</h4>
                            <div className="skillList">

                            </div>
                        </div>
                        <div className="experiences">
                            <h4 className="tit">My Personal History</h4>
                            <div className="experiencesList">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile;