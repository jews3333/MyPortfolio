import React from 'react';

const databaseURL = "https://myportfolio-15261.firebaseio.com";

class Test extends React.Component {

    state = {
        list : {}
    }

    _getApi = () => {
        fetch(`${databaseURL}/list.json`)
        .then(res => {
            if(res.status !== 200){
                throw new Error(res.statusText);
            }

            return res.json();
        })
        .then(list => this.setState({list : list}))
    }

    shouldComponentUpdate(nextProps, nextState){
        return nextState.list !== this.state.list;
    }

    componentDidMount(){
        this._getApi();
    }

    render(){
        return(
            <div>
                {Object.keys(this.state.list).map(list => {
                    const item = this.state.list[list];
                    return (
                        <div key={list}>
                            <p>{item.title}</p>
                            <p>{list}</p>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default Test;