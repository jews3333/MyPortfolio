import React from 'react';
import './App.scss';

import Header from 'Layout/Header';
import Footer from 'Layout/Footer';
import Router from 'Routes/Router';
import Login from './Login';

import { provider, auth, master } from './firebase/init';

import Store from 'Store/store';

class App extends React.Component {

  constructor(){
    super();
    this.state = {
        user: this.loginCheck(),
        master: this.loginCheck()
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

        if(user.uid === master){
          this.setState({
            master: true
          });
        }
    })
    .catch((err) => {
        console.log(err.code);
        console.log(err.message);
    })
  }

  async logout() {
      await auth().signOut();
      this.setState({
          user: false
      });
      this.toast("로그아웃 되었습니다.");
  }

  async loginCheck() {
      await auth().onAuthStateChanged((user) => {
          if(user) {
              this.setState({
                  user: user
              });
              if(user.uid === master){
                this.setState({
                  master:true
                });
              } else {
                this.setState({
                  master:false
                });
              }
          } else {
              this.setState({
                  user:false
              });
          }
          console.log("loginCheck");
      })
  }

  toast = (message) => {
    const toast = document.createElement("div");
    const text = document.createTextNode(message);
    toast.appendChild(text);
    toast.className = "toast";
    document.body.appendChild(toast);
    setTimeout(()=>{
        toast.classList.add("load");
        setTimeout(()=>{
            toast.classList.remove("load");
            setTimeout(() => {
              document.body.removeChild(toast);
            },2000);
        },2000);
    });
  }

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
      <Store.Provider value={this.state}>
        <div className="App" id="App">
          <div id="grid"></div>
          <Login login={this.login} logout={this.logout} />
          <Header/>
          <Router/>
          <Footer/>
        </div>
      </Store.Provider>
    );
  }
}

export default App;
