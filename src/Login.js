import React from 'react';
import './Login.scss';
import Store from 'Store/store';

class Login extends React.Component {

    renderLogout() {
        return (
            <div className="logout">
                <button onClick={this.props.logout}>
                    <img src={this.props.user.photoURL} alt=""/>
                </button>
            </div>
        )
    }

    renderLogin() {
        return (
            <div className="login">
                <button onClick={this.props.login}>
                    <img src={require('res/images/google.png')} alt=""/>
                </button>
            </div>
        )
    }
    
    render(){
        const { user } = this.props;
        return (
            <div className="loginWrap">
                {!user ? this.renderLogin() : this.renderLogout()}
            </div>
        )
    }
}

export default Login;