import React, { Component } from 'react';

class QdhClassCompEventState extends Component {
    constructor(props){
        super(props);
        this.state = {
            QdhFullName:"Nguyen huu tuyen",
            QdhAge:18,
        }
    }

    // Hàm xử lý sự kiện
    tvcEventHandleClick1 = ()=>{
        // Lấy dữ liệu trong state
        alert("FullName: " +this.state.QdhFullName + "\n Age:" + this.state.QdhAge);
    }
    render() {
        return (
            <div className='alert alert-danger'>
                <button className='btn btn-primary' onClick={this.QdhEventHandleClick1}>Button 1 - Dữ liệu trong state</button>
            </div>
        );
    }
}

export default QdhClassCompEventState;