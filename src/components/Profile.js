import React, {Component} from 'react';

class Profile extends Component {

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
            <div className={this.state.load ? "contents load" : "contents"}>
                <div className="content">
                    <h3>Profile</h3>
                </div>
            </div>
        )
    }
}

export default Profile;