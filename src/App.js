import React from 'react';
import './App.scss';

import Header from 'Layout/Header';
import Footer from 'Layout/Footer';
import Router from 'Routes/Router';
import Auth from './Auth';

import toast from 'modules/toast';
import grid from 'modules/grid';

import { auth } from './firebase/init';

import Store from 'Store/store';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: this.authState()
    }
    this.signin = this.signin.bind(this);
    this.signout = this.signout.bind(this);
    this.signup = this.signup.bind(this);
  }

  async signin(email, password) {
    await auth().signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.setState({
          user: result.user
        });
        toast("로그인되었습니다");
        document.querySelector(".signin").classList.remove("show");
        setTimeout(() => {
          document.querySelector(".signin").remove();
        }, 300);
      })
      .catch((err) => {
        console.log(err.code);
        console.log(err.message);
      })
  }

  async signout() {
    await auth().signOut();
    this.setState({
      user: false
    });
    toast("로그아웃 되었습니다");
  }

  async signup(email, password) {
    await auth().createUserWithEmailAndPassword(email, password)
      .then((result) => {
        this.setState({
          user: result.user
        })
        // document.location.href = "/";
        toast("회원가입을 환영합니다");
        document.querySelector(".signin").classList.remove("show");
        setTimeout(() => {
          document.querySelector(".signin").remove();
        }, 300);
      })
      .catch((err) => {
        console.log(err)
        if (err.code === 'auth/invalid-email') {
          toast("이메일 형식이 아닙니다");
        }

        if (err.code === 'auth/weak-password') {
          toast("패스워드는 6자리 이상 작성해주세요");
        }

        if (err.code === 'auth/email-already-in-use') {
          toast("이미 사용중인 이메일입니다");
        }
      });
  }

  async authState() {
    await auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          user: user
        });
      } else {
        this.setState({
          user: false
        });
      }
    });
  }

  componentDidMount() {
    grid();
    window.addEventListener('resize', () => {
      grid();
    });
  }

  render() {
    return (
      <Store.Provider value={this.state}>
        <div className="App" id="App">
          <div id="grid"></div>
          <Auth signin={this.signin} signout={this.signout} signup={this.signup} />
          <Header />
          <Router />
          <Footer />
        </div>
      </Store.Provider>
    );
  }
}

export default App;
