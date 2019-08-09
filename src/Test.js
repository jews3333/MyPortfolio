import React from 'react';
import { provider, auth } from './firebase/init';

const databaseURL = "https://myportfolio-15261.firebaseio.com";

class Test extends React.Component {

    constructor(){
        super();
        this.state = {
            list: {},
            user: this.loginCheck()
        }
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.loginCheck = this.loginCheck.bind(this);
    }

    async login() {
        await auth().signInWithPopup(provider)
        .then((result) => {
            const user = result.user;
            
            this.setState({
                user: user,
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
            user: false
        });
    }

    async loginCheck() {
        await auth().onAuthStateChanged((user) => {
            if(user) {
                this.setState({
                    user: user
                });
            } else {
                this.setState({
                    user:false
                });
            }
            console.log("loginCheck");
        })
    }

    toast = () => {
        const toast = document.createElement("div");
        const text = document.createTextNode("권한이 없습니다");
        toast.appendChild(text);
        toast.className = "toast";
        document.body.appendChild(toast);
        setTimeout(()=>{
            toast.classList.add("load");
            setTimeout(()=>{
                toast.classList.remove("load");
            },2000);
        });
    }

    _getApi = () => {
        if(this.state.user){
            fetch(`${databaseURL}/list.json`)
            .then(res => {
                if(res.status !== 200){
                    throw new Error(res.statusText);
                }

                return res.json();
            })
            .then(list => this.setState({list : list}));
        } else {
            this.toast();
        }
    }

    // shouldComponentUpdate(nextProps, nextState){
    //     return nextState !== this.state;
    // }

    componentDidMount(){
        console.log("componentDidMount")
    }

    render(){
        console.log("render")
        return(
            <div>
                {!this.state.user ? <button onClick={this.login}>로그인 테스트</button> : <button onClick={this.logout}>로그아웃 테스트</button>}
                
                <button onClick={this._getApi}>GET!</button>
                {this.state.user ? Object.keys(this.state.list).map(list => {
                    const item = this.state.list[list];
                    return (
                        <div key={list}>
                            <p>{item.title}</p>
                            <p>{list}</p>
                        </div>
                    )
                }) : null}
            </div>
        );
    }
}

export default Test;