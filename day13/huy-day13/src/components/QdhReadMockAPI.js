import React, { useEffect } from 'react'
import axios from 'axios'
export default function QdhReadMockAPI() {
  
  //khởi tạo State
  const [QdhListUser, setQdhListUser]= useState([])
  //api
  const QdhApiOnline = "htts://78s74aa00347dd2e3a85ce1.mockapi.io/k23cnt1_quachduchuy/Qdh_user"  
  //đọc dữ liệu từ api bằng axios 
  useEffect(()=>{
    axios 
    .get(QdhApiOnline)
    .then((Qdh_response)=>{
        setQdhListUser(Qdh_response.data)
    })
    .catch((error)=>{
        console.log("loiphat sinh");
    })
  },[])
  // view data 
  const QdhElementUser = QdhListUser.map((Qdh_item,index)=>{
    return(
        <tr>
            <td>{Qdh_item.QdhId}</td>
            <td>{Qdh_item.QdhFullName}</td>
            <td>{Qdh_item.QdhAge}</td>
            <td>{Qdh_item.QdhActive?'hoat dong':'khoa'}</td>
            <td>
                <button>sua</button>
               < button>xoa</button>
            </td>
        </tr>
    )
  })
  
  
  
  
    return (
    <div className='alert alert-danger'>
            <h2>Danh sach </h2>
            <table className='table table-bordered'>  
    <tr>
        <th>Id</th>
        <th>FullName</th>
        <th>Age</th>
        <th>Active</th>
        <th>Action</th>
    </tr>

<tbody>
    {
        QdhElementUser
    }
</tbody>
</table>
    </div>
  )
}
