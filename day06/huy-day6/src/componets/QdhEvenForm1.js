import React, { Component } from 'react';

class QdhEventForm1 extends Component {
    constructor(props){
        super(props);
        this.state = {
            QdhStudentName:'tuyenmino',
        }
    }
    // Hàm xử lý sự kiện khi dữ liệu trên textbox (QdhStudentName) thay đổi
    QdhHandleChange = (event)=>{
        // Cập nhật lại state
        this.setState({
            QdhStudentName:event.target.value,
        })
    }
    // Khi submit form, lấy dữ liệu và hiển thị
    QdhHandleSubmit = (ev)=>{
        alert('Xin chào:' + this.state.QdhStudentName);
        ev.preventDefault();
    }
    render() {
        return (
            <div className='alert alert-info'>
                <h2>Form Input</h2>
                <form  onSubmit={this.QdhHandleSubmit}>
                    <label htmlFor='QdhStudentName'>
                        <input type='text' name='QdhStudentName' id='QdhStudentName' 
                            value={this.state.QdhStudentName}
                            onChange={this.QdhHandleChange}
                        />
                    </label>
                    <button className='btn btn-primary'>Click here</button>
                </form>
            </div>
        );
    }
}

export default QdhEventForm1;