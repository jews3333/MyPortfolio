import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';

import Header from './layout/Header';
import Footer from './layout/Footer';

import Main from './components/Main';
import Sub1 from './components/Sub1';
import Sub2 from './components/Sub2';

class App extends React.Component {
  render(){
    return (
        <div className="App">
          <Router>
            <Header/>
            <Switch>
              <div className="container">
                <Route exact path="/" component={Main}/>
                <Route path="/sub1" component={Sub1}/>
                <Route path="/sub2" component={Sub2}/>
              </div>
            </Switch>
            <Footer/>
          </Router>
        </div>
    );
  }
}

export default App;
