import React, { Component } from 'react';

class QdhRenderListStudent extends Component {
    constructor(props){
        super(props);
        this.state = {
            QdhStudents:[
                {tcvId:"NTU001",QdhName:"Nguyen huu tuyen", QdhAge:46, QdhClass:"K23CNT1"},
                {tcvId:"NTU002",QdhName:"Nguyễn Nguyen huu tuyen A", QdhAge:22, QdhClass:"K23CNT1"},
                {tcvId:"NTU003",QdhName:"Nguyễn Nguyen huu tuyen B", QdhAge:21, QdhClass:"K23CNT1"},
                {tcvId:"NTU004",QdhName:"Nguyễn Nguyen C", QdhAge:23, QdhClass:"K23CNT1"},
            ],
        }
    }
    render() {
        let QdhElement = this.state.QdhStudents.map((QdhItem, index)=>{
            return(
                    <tr>
                        <td>{index+1}</td>
                        <td>{QdhItem.tcvId}</td>
                        <td>{QdhItem.QdhName}</td>
                        <td>{QdhItem.QdhAge}</td>
                        <td>{QdhItem.QdhClass}</td>
                        <td>
                            <button>Sửa</button>
                            <button>Xóa</button>
                        </td>
                    </tr>
            )
        })
        return (
            <div className='alert alert-info'>
                <h2>Danh sách sinh viên</h2>
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>QdhId</th>
                            <th>QdhName</th>
                            <th>QdhAge</th>
                            <th>QdhClass</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {QdhElement}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default QdhRenderListStudent;