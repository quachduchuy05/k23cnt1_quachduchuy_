import React, { Component } from 'react';

class QdhEventForm3 extends Component {
    constructor(props){
        super(props);
        this.state = {
            QdhGioiTinh:'Nam',
        }
    }

    // Hàm xử lý sự kiện change
    QdhHandleChange = (event)=>{
        this.setState({
            QdhGioiTinh:event.target.value,
        })
    }

    // Hàm xử lý sự kiện submit form
    QdhHandleSubmit = (event)=>{
        event.preventDefault();
        alert("Giới tính của bạn là: " + this.state.QdhGioiTinh)
    }
    render() {
        return (
            <div className='alert alert-success'>
                <h2> Form input - radio</h2>
                <form>
                    <div>
                        <label htmlFor=''>Giới tính:</label> 
                        <input type='radio' name='QdhGioiTinh'  id='QdhNam' className='mx-2'
                            value="Nam" checked={this.state.QdhGioiTinh === 'Nam'} onChange={this.QdhHandleChange}/> 
                            <label htmlFor='QdhNam'>Nam</label>  
                        <input type='radio' name='QdhGioiTinh'  id='QdhNu' className='mx-2'
                            value="Nữ" checked={this.state.QdhGioiTinh === 'Nữ'} onChange={this.QdhHandleChange}/> 
                            <label htmlFor='QdhNu'>Nữ</label>  
                        <input type='radio' name='QdhGioiTinh' id='QdhKhac' className='mx-2'
                            value="Khác" checked={this.state.QdhGioiTinh === 'Khác'} onChange={this.QdhHandleChange}/> 
                            <label htmlFor='QdhKhac'>Khác</label>
                    </div>
                    <button onClick={this.QdhHandleSubmit}>Submit</button>
                </form>
            </div>
        );
    }
}

export default QdhEventForm3;