import React, { Component } from 'react';
import MainList from './MainList';

import './MainList.scss';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const databaseURL = "https://myportfolio-15261.firebaseio.com";

class Main extends Component {
    state = {
        load: false
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({
                load : true
            });
        },10);
    }

    render(){

        return (
            <div className={this.state.load ? "main load" : "main"}>
                <h3 class="hidden">Main</h3>
            </div>
        )
    }
}

export default Main;