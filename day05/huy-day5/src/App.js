import React, { Component } from 'react';
import QdhFuncCompEvent1 from './components/QdhFuncCompEvent1';
import QdhClassCompEvent1 from './components/QdhClassCompEvent1';
import QdhFuncCompEventProps from './components/QdhFuncCompEventProps';
import QdhClassCompEventProps from './components/QdhClassCompEventProps';
import QdhClassCompEventState from './components/QdhClassCompEventState';
import QdhClassCompEventPostData from './components/QdhClassCompEventPostData';

class QdhApp extends Component {
    constructor(props){
        super(props);
        this.state = {
            QdhNoiDung:"Chưa có gì",
        }
    }
    // Hàm xử lý sự kiện khi component con chuyển dữ liệu lên
    QdhHandleDataToApp = (content)=>{
        alert(content);
        this.setState({
            QdhNoiDung:content,
        })
    }
    render() {
        return (
            <div className='container border mt-3'>
                <h1 className='text-center alert alert-info my-2'>K23CNT1 -nguyen huu tuyen </h1>
                <hr/>
                <div>
                    <h2>Function Component  - Event</h2>
                    <QdhFuncCompEvent1 />
                </div>
                <hr/>
                <div>
                    <h2>Class Component - Event</h2>
                    <QdhClassCompEvent1 />
                </div>
                <hr/>
                <div>
                    <h2>Function Component - Event; props</h2>
                    <QdhFuncCompEventProps QdhRenderName="nguyen huu tuyen" />
                </div>
                <hr/>
                <div>
                    <h2>Class Component - Event; props</h2>
                    <QdhClassCompEventProps QdhRenderTitle = "Welcome to Chung Chunng"/>
                </div>

                <div>
                    <h2>Class Component - Event; state</h2>
                    <QdhClassCompEventState />
                </div>
                <div>
                    <h1>{this.state.QdhNoiDung}</h1>
                    <h2>Class Component - Event; Post Data to App </h2>
                    <QdhClassCompEventPostData onQdhDataToApp={this.QdhHandleDataToApp} />
                </div>
            </div>
        );
    }
}

export default QdhApp;