import React from 'react';
import './App.scss';

import Header from 'Layout/Header';
import Footer from 'Layout/Footer';
import Router from 'Routes/Router';

import Store from 'Store/store';

class App extends React.Component {

  grid = () => {
    const deviceWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const deviceHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

    const div = document.createElement('div');

    div.className = "gridItem";
    
    div.style.width = deviceWidth / 20+"px";
    div.style.height = deviceWidth / 20+"px";

    document.getElementById("grid").innerHTML = "";

    for(var j = 0; j < deviceHeight/(deviceWidth/20); j++){
      for(var i = 0; i < 20; i++){
        const cloned = div.cloneNode();
        document.getElementById("grid").appendChild(cloned);
        cloned.addEventListener("mouseenter", () => {
          cloned.style.background = "#000";
        });
        cloned.addEventListener("mouseleave", () => {
          cloned.style.background = "transparent";
        });
      }
    }

    
  }

  componentDidMount(){
    this.grid();

    window.addEventListener('resize', () => {
      this.grid();
    });
  }

  render(){
    return (
      <Store.Provider>
        <div className="App" id="App">
          <div id="grid"></div>
          <Header/>
          <Router/>
          <Footer/>
        </div>
      </Store.Provider>
    );
  }
}

export default App;
