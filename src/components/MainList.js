import React from 'react';

class MainList extends React.Component {
    render(){
        return(
            <img src={require(`res/images/portfolio/${this.props.src}`)} alt="" />
        );
    }
}

export default MainList;