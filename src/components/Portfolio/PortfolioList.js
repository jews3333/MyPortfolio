import React from 'react';
import PortfolioListItem from './PortfolioListItem';

class PortfolioList extends React.Component {
    state = {
        list: [
            {
                id : 1,
                title : "001",
                sumry : "testtesttest",
                date : "20190830",
                image : "001_desktop.jpg"
            },{
                id : 2,
                title : "002",
                sumry : "testtesttest",
                date : "20190831",
                image : "002_desktop.jpg"
            }
        ]
    }

    _renderListItem = () => {
        const list = this.state.list.map((list, index) => {
            return <PortfolioListItem title={list.title} sumry={list.sumry} date={list.date} image={list.image} key={index} />
        })

        return list;
    }

    render(){
        return(
            <div className="portfolioList">
                {this.state.list ? this._renderListItem() : null}
            </div>
        )
    }
}

export default PortfolioList;