import React, { Component } from 'react';

import './Main.scss';

// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";

class Main extends Component {
    state = {
        load: false,
        animation: {
            D : false,
            E : false,
            S : false,
            I : false,
            G : false,
            N : false
        }
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({
                load : true,
                animation: {
                    ...this.state.animation,
                    D: true
                }
            });

            setTimeout(() => {
                this.setState({
                    animation: {
                        ...this.state.animation,
                        E:true
                    }
                });

                setTimeout(() => {
                    this.setState({
                        animation: {
                            ...this.state.animation,
                            S:true
                        }
                    });

                    setTimeout(() => {
                        this.setState({
                            animation: {
                                ...this.state.animation,
                                I:true
                            }
                        });

                        setTimeout(() => {
                            this.setState({
                                animation: {
                                    ...this.state.animation,
                                    G:true
                                }
                            });

                            setTimeout(() => {
                                this.setState({
                                    animation: {
                                        ...this.state.animation,
                                        N:true
                                    }
                                });
                            }, 1000);

                        }, 600);

                    },1000);

                },600);

            },1000);

        },10);
    }

    render(){

        return (
            <div className={this.state.load ? "main load" : "main"}>
                <h3 className="hidden">Main</h3>
                <div className="animation">
                    {this.state.animation.D ?
                        <div className="D">
                            <div className="d1"></div>
                            <div className="d2"></div>
                            <div className="d3"></div>
                            <div className="d4"></div>
                            <div className="d5"></div>
                        </div>
                    : <div className="D"/>}

                    {this.state.animation.E ?
                        <div className="E">
                            <div className="e1"></div>
                            <div className="e2"></div>
                            <div className="e3"></div>
                        </div>
                    : <div className="E"/>}

                    {this.state.animation.S ?
                        <div className="S">
                            <div className="s1"></div>
                            <div className="s2"></div>
                            <div className="s3"></div>
                            <div className="s4"></div>
                            <div className="s5"></div>
                        </div>
                    : <div className="S"/>}

                    {this.state.animation.I ?
                        <div className="I">
                            <div className="i1"></div>
                            <div className="i2"></div>
                            <div className="i3"></div>
                        </div>
                    : <div className="I"/>}

                    {this.state.animation.G ?
                        <div className="G">
                            <div className="g1"></div>
                            <div className="g2"></div>
                            <div className="g3"></div>
                            <div className="g4"></div>
                            <div className="g5"></div>
                        </div>
                    : <div className="G"/>}

                    {this.state.animation.N ?
                        <div className="N">
                            <div className="n1"></div>
                            <div className="n2"></div>
                            <div className="n3"></div>
                        </div>
                    : <div className="N"/>}
                </div>
            </div>
        )
    }
}

export default Main;