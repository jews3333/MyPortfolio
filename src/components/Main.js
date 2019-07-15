import React, { Component } from 'react';

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
                <h3>Main</h3>
            </div>
        )
    }
}

export default Main;