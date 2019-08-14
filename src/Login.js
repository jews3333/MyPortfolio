import React from 'react';
import './Login.scss';
import Store from 'Store/store';

class Login extends React.Component {

    renderLogout(url) {
        return (
            <div className="logout">
                <button onClick={this.props.logout}>
                    <img src={url} alt=""/>
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
        return (
            <div className="loginWrap">
                <Store.Consumer>
                    {store => !store.user ? this.renderLogin() : this.renderLogout(store.user.photoURL)}
                </Store.Consumer>
            </div>
        )
    }
}

export default Login;