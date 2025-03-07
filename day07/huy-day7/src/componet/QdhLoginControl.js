import React, { Component } from 'react';
import QdhLoginComp from './QdhLoginComp';
import QdhLogoutComp from './QdhLogoutComp';

class QdhLoginControl extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoggedIn:false,
        }
    }
    // Hàm xử lý sự kiện login
    QdhHandleLogin = (event)=>{
        event.preventDefault();
        this.setState({
            isLoggedIn:true,
        })
    }
    render() {
        let {isLoggedIn}=this.state
        let QdhElement = isLoggedIn?<QdhLoginComp /> : <QdhLogoutComp />
        return (
            <div className='alert alert-danger'>
                {QdhElement}
                {
                    isLoggedIn? 
                        <button onClick={()=>this.setState({isLoggedIn:false})}>Logout</button> 
                        :<button onClick={this.QdhHandleLogin}>Login</button>
                }
            </div>
        );
    }
}

export default QdhLoginControl;