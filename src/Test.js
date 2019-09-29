import React from 'react';
import Store from 'Store/store'

import WithLoad from 'WithLoad';

class Test extends React.Component {

    render() {
        return (
            <div className={this.props.load ? "contents load" : "contents"}></div>
        );
    }
}

export default WithLoad(Test);