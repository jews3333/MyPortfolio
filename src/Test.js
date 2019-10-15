import React from 'react';
import { storage } from 'firebase/init';

import WithLoad from 'WithLoad';

class Test extends React.Component {

    constructor(){
        super();
        this.state = {
            file:""
        }

        this.upload_test = this.upload_test.bind(this);
        this.change_file = this.change_file.bind(this);
        this.download_test = this.download_test.bind(this);
    }

    upload_test(){
        const metadata = {
            contentType: 'image/jpeg'
        };
        try {
            storage.ref('portfolio/').child('Web/' + this.state.file.name).put(this.state.file, metadata);
        } catch(err){
            console.log(err)
        }

    }

    change_file(){
        this.setState({
            file : document.getElementById("file").files[0]
        });
        console.log(this.state)
    }

    download_test(){
        storage.ref('portfolio/').child('Web/2017_001.jpg').getDownloadURL().then((url) => {
            console.log(url)
        })
    }

    componentDidMount(){
        this.download_test()
    };

    render() {
        return (
            <div className={this.props.load ? "contents load" : "contents"}>
                <input type='file' name="file" id="file" onChange={this.change_file}/>
                <button onClick={this.upload_test}>submit</button>
            </div>
        );
    }
}

export default WithLoad(Test);