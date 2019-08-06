import React from 'react';
import { provider, auth } from './firebase/init';

const databaseURL = "https://myportfolio-15261.firebaseio.com";
const masterUID = "eCOjB9cHyCWFLGDIn7velXP9adr1"; 

class Test extends React.Component {

    constructor(){
        super();
        this.state = {
            list: {},
            user: this.login
        }
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
    }

    async login() {
        const result = await auth().signInWithPopup(provider);
        console.log(result.user.uid);
        this.setState({
            user: result.user
        });
    }
    
    async loginCheck(){
        const ck = await auth().currentUser;
        console.log(ck);
    }

    async logout() {
        await auth().signOut();
        this.setState({
            user: false
        });
    }

    _getApi = () => {
        if(this.state.user.uid === masterUID){
            fetch(`${databaseURL}/list.json`)
            .then(res => {
                if(res.status !== 200){
                    throw new Error(res.statusText);
                }

                return res.json();
            })
            .then(list => this.setState({list : list}))
        } else {
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
    }

    shouldComponentUpdate(nextProps, nextState){
        return nextState !== this.state;
    }
    
    componentDidMount(){
        this.loginCheck();
    }

    render(){
        this._getApi();

        return(
            <div>
                {!this.state.user.uid ? <button onClick={this.login}>로그인 테스트</button> : <button onClick={this.logout}>로그아웃 테스트</button>}
                
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