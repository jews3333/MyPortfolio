import React from 'react';
import './App.scss';

import Header from './Layout/Header';
import Footer from './Layout/Footer';
import Router from './Routes/Router';

import Store from './Store/store';

class App extends React.Component {
  render(){
    return (
      <Store.Provider>
        <div className="App">
          <Header/>
          <Router/>
          <Footer/>
        </div>
      </Store.Provider>
    );
  }
}

export default App;
