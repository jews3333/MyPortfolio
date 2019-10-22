import React, { Component } from 'react';

import WithLoad from 'WithLoad';

class Error extends Component {

    render(){
        return (
            <div id="contents" className={this.props.load ? "contents load" : "main"}>
                <h3 className="hidden">Error</h3>
                <div className="error">
                    <p>페이지를 찾을 수 없습니다.</p>
                </div>
            </div>
        )
    }
}

export default WithLoad(Error);