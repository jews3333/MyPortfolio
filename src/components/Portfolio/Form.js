import React from 'react';
import './Form.scss';
import WithAuth from 'WithAuth';

import toast from 'modules/toast';

import { database, storage } from 'firebase/init';

class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: "",
            type: "Web",
            year: "2019",
            sumry: "",
            url: "",
            thumb: "",
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
                thumb: this.state.thumb.name,
                image: this.state.image.name,
                time: time
            });

            const metadata = {
                contentType: 'image/jpeg'
            };
    
            try {
                storage.ref('portfolio/').child(this.state.type + '/thumb/' + this.state.thumb.name).put(this.state.thumb, metadata);
            } catch(err){
                console.log(err)
            }
            
            try {
                storage.ref('portfolio/').child(this.state.type + '/' + this.state.image.name).put(this.state.image, metadata);
            } catch(err){
                console.log(err)
            }

            toast("저장되었습니다");

            // document.location.reload();
        } catch(e) {
            console.log(e);
            toast("저장에 실패하였습니다");
        }

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

    _thumbInput(e) {
        this.setState({
            thumb: e.target.files[0]
        });
    }

    _imageInput(e) {
        this.setState({
            image: e.target.files[0]
        });
    }

    render() {
        return (
            <div id="contents" className="contents load">
                <div className="form_wrap">
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
                        <dt><strong>썸네일</strong></dt>
                        <dd>
                            <input type="file" name="thumb" id="thumb" placeholder="" onChange={e => this._thumbInput(e)} />
                        </dd>
                    </dl>
                    <dl>
                        <dt><strong>이미지</strong></dt>
                        <dd>
                            <input type="file" name="image" id="image" placeholder="" onChange={e => this._imageInput(e)} />
                        </dd>
                    </dl>
                    <button id="submit" onClick={() => this._submit()}>등록</button>
                </div>
            </div>
        );
    }
}

export default WithAuth(Form);