import React, {Component} from 'react';

const WithLoad = (LoadComponent) => 

class IsLoad extends Component {
    state = {
        load:false
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                load: true
            });
        }, 10);
    }

    render(){
        return (
            <LoadComponent load={this.state.load}/>
        );
    }
}

export default WithLoad;