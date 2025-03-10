import React from 'react'

export default function QdhUseStateObject() {
    const listStudent = [
        {Number:"sv001",DtdStudentName:"do tien dung",DtdAge:19,DtdGender:'nam',DtdBirthday:"26/10/2005",DtdBirthPlace:"ha nam",DtdAddress:'trieu khuc '},
        {Number:"sv002",DtdStudentName:"do tien dung 2",DtdAge:19,DtdGender:'nam',DtdBirthday:"26/10/2005",DtdBirthPlace:"ha nam",DtdAddress:'trieu khuc '},
        {Number:"sv003",DtdStudentName:"do tien dung 3 ",DtdAge:19,DtdGender:'nam',DtdBirthday:"26/10/2005",DtdBirthPlace:"ha nam",DtdAddress:'trieu khuc '},
        {Number:"sv004",DtdStudentName:"do tien dung 3 ",DtdAge:19,DtdGender:'nam',DtdBirthday:"26/10/2005",DtdBirthPlace:"ha nam",DtdAddress:'trieu khuc '},
    ];
    render() 
        // render data
        const QdhElement = this.state.QdhStudents.map((QdhItem, index)=>{
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
    <div>
        t</div>
  )
}
