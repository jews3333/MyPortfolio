import React from 'react';
import './Form.scss';

import axios, { post } from 'axios';

import { database } from 'firebase/init';
import toast from 'modules/toast';
import Store from 'Store/store';

class Form extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            title: "",
            type: "Web",
            sumry: "",
            image:"",
            time:""
        }
    }
    

    _submit = () => {
        const date = new Date();
        const time = date.getTime();

        database.ref().child("list").push({
            title: this.state.title,
            type: this.state.type,
            sumry: this.state.sumry,
            image: this.state.image,
            time: time
        });
    }

    _changeState = () => {
        this.setState({
            title: document.getElementById("title").value,
            type: document.getElementById("type").value,
            sumry: document.getElementById("sumry").value,
        })
    }

    _fileInput(e){
        this.setState({
            image: e.target.files[0].name
        })
    }

    render(){
        return (
            <Store.Consumer>
                {store => store.user ?
                <div className="form_warp">
                    <dl>
                        <dt><strong>제목</strong></dt>
                        <dd><input type="text" name="title" id="title" placeholder="제목을 입력하면되" onChange={() => this._changeState()}/></dd>
                    </dl>
                    <dl>
                        <dt><strong>타입</strong></dt>
                        <dd>
                            <select name="type" id="type" onChange={() => this._changeState()}>
                                <option defaultValue value="Web">Web</option>
                                <option value="App">App</option>
                                <option value="Templat">Templat</option>
                            </select>
                        </dd>
                    </dl>
                    <dl>
                        <dt><strong>내용</strong></dt>
                        <dd>
                            <textarea name="sumry" id="sumry" placeholder="내용입력해라" onChange={() => this._changeState()}></textarea>
                        </dd>
                    </dl>
                    <dl>
                        <dt><strong>첨부 이미지</strong></dt>
                        <dd>
                            <input type="file" name="image" id="image" placeholder="이미지를 첨부하세요" onChange={e => this._fileInput(e)}/>
                        </dd>
                    </dl>
                    <button id="submit" onClick={() => this._submit()}>등록</button>
                </div>
                : toast("권한이 없습니다")}
            </Store.Consumer>
        );
    }
}

export default Form;