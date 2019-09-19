import React from 'react';
import './App.scss';

import Header from 'layout/Header';
import Footer from 'layout/Footer';
import Router from 'Routes/Router';
import Login from './Login';

import toast from 'modules/toast';
import grid from 'modules/grid';

import { provider, auth } from './firebase/init';

import Store from 'Store/store';

const databaseURL = "https://myportfolio-15261.firebaseio.com";

class App extends React.Component {

  constructor(){
    super();
    this.state = {
        user: this.loginCheck(),
        master: false
    }
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.loginCheck = this.loginCheck.bind(this);
  }

  async login() {
    await auth().signInWithRedirect(provider)
    .then((result) => {
        const user = result.user;
        this.setState({
            user: user
        });
    })
    .catch((err) => {
        console.log(err.code);
        console.log(err.message);
    })
  }

  async logout() {
      await auth().signOut();
      this.setState({
          user: false,
          master: false
      });
      toast("로그아웃 되었습니다");
  }

  async loginCheck() {
      await auth().onAuthStateChanged((user) => {
          if(user) {
            this.setState({
              user: user
            });
            this.master();
          } else {
            this.setState({
              user: false
            });
          }
          console.log("loginCheck");
      });
  }

  master = () => {
    fetch(`${databaseURL}/master.json`)
    .then(response => response.text())
    .then(text => {
      if(this.state.user.uid === text.replace(/"/g,"")){
        toast("하이 마스터");
        this.setState({
          master: true
        });
      } else {
        this.setState({
          master: false
        });
      }
    })
    .catch(err => {
      console.log(err)
    })
  }

  test(){
    const lang = Store;
    console.log(lang);
  }

  componentDidMount(){

    this.test();
    grid();

    window.addEventListener('resize', () => {
      grid();
    });
  }

  render(){
    return (
      <Store.Provider value={this.state}>
        <Store.Consumer>
          {store => 
            <div className="App" id="App">
              <div id="grid"></div>
              <Login login={this.login} logout={this.logout} store={store} />
              <Header/>
              <Router/>
              <Footer/>
            </div>
          }
        </Store.Consumer>
      </Store.Provider>
    );
  }
}

export default App;
