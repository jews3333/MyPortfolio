import React from 'react';
import './Auth.scss';
import Store from 'Store/store';

import toast from 'modules/toast';

class Auth extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        }
    }

    inputChange = (e) => {
        this.setState({
            email: document.getElementById("email").value,
            password: document.getElementById("password").value
        })
    }

    signin_handler = () => {
        this.props.signin(this.state.email, this.state.password);
    }

    signup_handler = () => {
        if(this.state.password === document.getElementById("password2").value){
            this.props.signup(this.state.email, this.state.password);
        } else {
            toast("패스워드가 일치하지 않습니다");
        }
    }

    signopen = () => {
        if(document.getElementsByClassName("signin").length === 0){
            const el = document.createElement("div");
            const email = document.createElement("input");
            const password = document.createElement("input");
            const button = document.createElement("button");
            const close = document.createElement("button");
            const signup = document.createElement("button");

            email.setAttribute("type","text");
            email.setAttribute("placeholder", "이메일을 입력하세요");
            email.name = "email";
            email.id = "email";
            email.addEventListener("change",() => this.inputChange());

            password.setAttribute("type","password");
            password.setAttribute("placeholder", "패스워드를 입력하세요");
            password.name = "password";
            password.id = "password";
            password.addEventListener("change",() => this.inputChange());

            button.id = "btn_signin";
            button.innerText = "Sign In";
            button.addEventListener("click", this.signin_handler);

            signup.id = "btn_signup";
            signup.innerText = "Sign Up";
            signup.addEventListener("click", () => {
                const password2 = document.createElement("input");
                
                password2.setAttribute("type","password");
                password2.setAttribute("placeholder", "패스워드를 다시 입력해주세요.");
                password2.name = "password2";
                password2.id = "password2";

                email.setAttribute("autocomplete","false");
                email.value ="";
                password.setAttribute("autocomplete","new-password");
                password.value = "";
                button.innerText = "Sign Up"
                button.removeEventListener("click", this.signin_handler);
                button.addEventListener("click", this.signup_handler);

                signup.remove();

                this.setState({
                    email : "",
                    password : "",
                    password2 : ""
                });

                document.querySelector(".signin").insertBefore(password2, document.querySelector(".signin").childNodes[2]);
            })

            close.id = "btn_close";
            close.innerText = "close";
            close.addEventListener("click", () => {
                document.querySelector(".signin").classList.remove("show");
                setTimeout(() => {
                    document.querySelector(".signin").remove();
                },300);
            });
            
            el.classList.add("signin");
            el.appendChild(email);
            el.appendChild(password);
            el.appendChild(button);
            el.appendChild(signup);
            el.appendChild(close);

            document.getElementById("App").appendChild(el);
            setTimeout(() => {
                el.classList.add("show");
            });
        }
    }


    render() {
        return (
            <Store.Consumer>
                {store => !store.user ?
                    <div className="auth_wrap">
                        <button onClick={() => this.signopen()}>Sign In</button>
                    </div>
                    :
                    <div className="auth_wrap">
                        <strong className="user_email">{store.user.email}</strong>
                        <button onClick={() => this.props.signout()}>Sign Out</button>
                    </div>
                }

            </Store.Consumer>
        )
    }
}

export default Auth;