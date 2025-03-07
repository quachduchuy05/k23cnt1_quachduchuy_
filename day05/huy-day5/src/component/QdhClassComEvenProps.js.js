import React, { Component } from 'react';

class QdhClassCompEventProps extends Component {

    // Hàm xử lý sự kiện
    QdhEventHandleClick1 = ()=>{
        alert("Hello...." + this.props.QdhRenderTitle);
    }
    render() {
        return (
            <div className='alert alert-danger'>
                <button className='btn btn-primary' onClick={this.QdhEventHandleClick1}>Button 1</button>
            </div>
        );
    }
}

export default QdhClassCompEventProps;