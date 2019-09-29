import React from 'react';
import './Form.scss';
import WithAuth from 'WithAuth';

import toast from 'modules/toast';

import { database } from 'firebase/init';

class Form extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            title: "",
            type: "Web",
            year: "2019",
            sumry: "",
            url: "",
            image: "",
            time: ""
        }
    }


    _submit = () => {
        const date = new Date();
        const time = date.getTime();

        try{
            database.ref().child("list").push({
                title: this.state.title,
                type: this.state.type,
                year: this.state.year,
                sumry: this.state.sumry,
                url: this.state.url,
                image: this.state.image,
                time: time
            });
            toast("저장되었습니다");
        } catch(e) {
            console.log(e);
            toast("저장에 실패하였습니다");
        }

        window.location.reload();
    }

    _changeState = () => {
        this.setState({
            title: document.getElementById("title").value,
            type: document.getElementById("type").value,
            year: document.getElementById("year").value,
            sumry: document.getElementById("sumry").value,
            url: document.getElementById("url").value
        })
    }

    _fileInput(e) {
        this.setState({
            image: e.target.files[0].name
        })
    }

    render() {
        return (
            <div className="contents load">
                <div class="form_wrap">
                    <dl>
                        <dt><strong>제목</strong></dt>
                        <dd><input type="text" name="title" id="title" placeholder="제목을 입력하세요" onChange={() => this._changeState()} /></dd>
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
                        <dt><strong>년도</strong></dt>
                        <dd>
                            <select name="year" id="year" onChange={() => this._changeState()}>
                                <option defaultValue value="2019">2019</option>
                                <option value="2018">2018</option>
                                <option value="2017">2017</option>
                            </select>
                        </dd>
                    </dl>
                    <dl>
                        <dt><strong>내용</strong></dt>
                        <dd>
                            <textarea name="sumry" id="sumry" placeholder="내용을 입력하세요" onChange={() => this._changeState()}></textarea>
                        </dd>
                    </dl>
                    <dl>
                        <dt><strong>링크</strong></dt>
                        <dd>
                            <input type="text" name="url" id="url" placeholder="url을 입력하세요" onChange={() => this._changeState()} />
                        </dd>
                    </dl>
                    <dl>
                        <dt><strong>첨부 이미지</strong></dt>
                        <dd>
                            <input type="file" name="image" id="image" placeholder="미완성" onChange={e => this._fileInput(e)} />
                        </dd>
                    </dl>
                    <button id="submit" onClick={() => this._submit()}>등록</button>
                </div>
            </div>
        );
    }
}

export default WithAuth(Form);