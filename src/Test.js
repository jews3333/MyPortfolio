import React from 'react';
import { provider, auth } from './firebase/init';

const databaseURL = "https://myportfolio-15261.firebaseio.com";
const masterUID = "eCOjB9cHyCWFLGDIn7velXP9adr1"; 

class Test extends React.Component {

    constructor(){
        super();
        this.state = {
            list: {},
            user: false,
            token: false
        }
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
    }

    async login() {
        await auth().signInWithRedirect(provider)
        .then((result) => {
            const user = result.user;
            const token = result.credential.accessToken;
            
            this.setState({
                user: user
            });
            console.log(user);
            console.log(token);
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
            token: false
        });
    }

    async loginCeck() {
        await auth().getRedirectResult()
        .then(result => {
            this.setState({
                token : result.credential.accessToken
            })
            console.log(this.state.token);
        })
        .catch((err) => {
            console.log(err.code);
            console.log(err.message);
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
        if(this.state.token || this.state.user.uid === masterUID){
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
        this.loginCeck();
    }

    render(){
        this._getApi();

        return(
            <div>
                {!this.state.token ? <button onClick={this.login}>로그인 테스트</button> : <button onClick={this.logout}>로그아웃 테스트</button>}

                {Object.keys(this.state.list).map(list => {
                    const item = this.state.list[list];
                    return (
                        <div key={list}>
                            <p>{item.title}</p>
                            <p>{list}</p>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default Test;