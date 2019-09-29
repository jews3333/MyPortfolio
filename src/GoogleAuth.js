import React from 'react';
import './GoogleAuth.scss';

import Store from 'Store/store';

class GoogleAuth extends React.Component {

    render () {
        return (
            <Store.Consumer>
                {store => !store.user ?
                    <div className="auth_wrap">
                        <button onClick={() => this.props.signin()}><img src={require('res/images/google.png')} alt="Sign In"/></button>
                    </div>
                    :
                    <div className="auth_wrap">
                        <button onClick={() => this.props.signout()}><img src={store.user.photoURL ? store.user.photoURL : require('res/images/google.png')} alt="Sign Out"/></button>
                    </div>
                }

            </Store.Consumer>
        );
    }
    
}

export default GoogleAuth;