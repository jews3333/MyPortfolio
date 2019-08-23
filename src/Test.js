import React from 'react';
import Store from 'Store/store'

class Test extends React.Component {
    
    state = {
        category : ""
    }

    categorySelected = () => {
        this.setState({
            category : document.getElementById("type").value
        });
    }

    componentDidMount(){
    }

    render() {
        return (
            <Store.Consumer>
                {store => {
                    if(store.user){
                        return (
                            <div className="write">
                                <select name="type" id="type" onChange={this.categorySelected}>
                                    <option value="" selected>카테고리</option>
                                    <option value="Web">Web</option>
                                    <option value="App">App</option>
                                    <option value="Templat">Templat</option>
                                </select>
                                <input type="text" id="title" name="title"/>
                                <input type="text" id="date" name="date"/>
                                
                                {
                                    this.state.category === "Web" ?
                                    <div className="rating">
                                        <input type="text" id="design" name="design"/>
                                        <input type="text" id="html" name="html"/>
                                        <input type="text" id="css" name="css"/>
                                        <input type="text" id="javascript" name="javascript"/>
                                        <input type="text" id="site" name="site"/>
                                    </div>
                                    : this.state.category === "App" ?
                                    <div className="rating">
                                        <input type="text" id="device" name="device"/>
                                        <input type="text" id="design" name="design"/>
                                        <input type="text" id="coding" name="coding"/>
                                    </div>
                                    : this.state.category === "Templat" ?
                                    <div className="rating">
                                        <input type="text" id="design" name="design"/>
                                    </div>
                                    : null
                                }

                                <textarea id="sumry" name="sumry">

                                </textarea>

                                <button id="btn_write">등록</button>

                            </div>
                        )
                    }
                }}
            </Store.Consumer>
        );
    }
}

export default Test;