import React, { Component } from 'react';

class QdhEventForm2 extends Component {
    constructor(props){
        super(props);
        this.state={
            QdhCourse: 'CSS3',
        }
    }
    // Hàm xử lý sự kiện khi thay đồi khóa học
    QdhHandleChange = (event)=>{
        // Cập nhật lại state
        this.setState({
            QdhCourse:event.target.value,
        })
    }

    // Hàm xử lý sự kiện khi submit form
    QdhHandleSubmit = (event)=>{
        alert("Khóa học bạn chọn:" + this.state.QdhCourse);
        event.preventDefault();
    }
    render() {
        return (
            <div className='alert alert-danger'>
                 <h2>Form Select</h2>
                <form  >
                    <label htmlFor=''>
                      <select name='QdhCourse' id='QdhCourse' 
                            value={this.state.QdhCourse}
                            onChange={this.QdhHandleChange} >
                        <option value={'HTML5'}>HTML5</option>
                        <option value={'CSS3'}>CSS3</option>
                        <option value={'Javascript'}>Javascript</option>
                        <option value={'Jquery'}>Jquery</option>
                        <option value={'Bootstrap'}>Bootstrap</option>
                      </select>
                    </label>
                    <button className='btn btn-primary' onClick={this.QdhHandleSubmit}>Click here</button>
                </form>
            </div>
        );
    }
}

export default QdhEventForm2;