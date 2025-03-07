import React, { Component } from 'react';

class QdhClassCompEvent1 extends Component {
    // Hàm xử lý sự kiện
    QdhEventHandleClick1 = ()=>{
        alert("Button 1 clicked");
    }

    QdhEventHandleClick2 = (name)=>{
        alert("Button 2 clicked; name="+name);
    }

    render() {
        return (
            <div className="alert alert-danger">
                <button className='btn btn-primary mx-1' onClick={this.QdhEventHandleClick1}>Button 1</button>
                <button className='btn btn-success mx-1' 
                    onClick={()=>this.QdhEventHandleClick2("Chung Trịnh")}>Button 2</button>
            </div>
        );
    }
}

export default QdhClassCompEvent1;