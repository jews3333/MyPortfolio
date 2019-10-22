import React from 'react';
import './App.scss';

import Header from 'layout/Header';
import Footer from 'layout/Footer';
import Router from 'Routes/Router';
import GoogleAuth from './GoogleAuth';

import toast from 'modules/toast';
// import grid from 'modules/grid';

import { auth, provider } from './firebase/init';

import Store from 'Store/store';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: this.authState()
    }

    this.signin = this.signin.bind(this);
    this.signout = this.signout.bind(this);
    // this.signup = this.signup.bind(this);

  }

  async signin() {
    await auth().signInWithRedirect(provider)
      .then((result) => {
        this.setState({
          user: result.user
        });
      })
      .catch((err) => {
        console.log(err);
      })
  }

  async signout() {
    await auth().signOut();
    this.setState({
      user: false
    });
    toast("반가웠어요");
  }

  

  async authState() {
    await auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          user: user
        });
        toast("반갑습니다 " + user.displayName + "님");
      } else {
        this.setState({
          user: false
        });
      }
    });
  }

  deviceCheck() {
    let filter = "win16|win32|win64|mac";
    if (navigator.platform) {
      if (filter.indexOf(navigator.platform.toLowerCase()) < 0) {
        return "Mobile";

      } else {
        return "PC";

      }
    }
  }

 

  componentDidMount() {
    this.deviceCheck();
  }

  render() {
    return (
      <Store.Provider value={this.state}>
        <div className="App" id="App">
          <div id="video">
            <video src={this.deviceCheck === "Moblie" ? require('res/video/background_video_infinite_mobile.mp4') : require('res/video/background_video_infinite_pc.mp4')} muted loop autoPlay></video>
          </div>
          <GoogleAuth signin={this.signin} signout={this.signout} />
          <Header />
          <Router />
          <Footer />
        </div>
      </Store.Provider>
    );
  }
}

export default App;
