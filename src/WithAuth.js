import React, {Component} from 'react';

import Store from 'Store/store';

import toast from 'modules/toast';

const WithAuth = (WarpperComponent) => 

class IsAuth extends Component {
    render(){
        return (
            <Store.Consumer>
                {store => store.user ?
                    <WarpperComponent/> :
                    toast("로그인이 필요한 서비스입니다")
                }
            </Store.Consumer>
        );
    }
}

export default WithAuth;