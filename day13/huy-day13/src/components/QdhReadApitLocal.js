import React from 'react'
import axios from 'axios'
export default function QdhReadApitLocal() {
 // khoi tao state
    const [QdhListUse,setListUser]=useState([])
 // đọc dữ liệu từ api là sset cho QdhListUser
 const apiUrl = "http://localhost:3001/users"
 //lấy danh sách từ apiUl
 useEffect(()=>{
    axios 
    .get(apiUrl)
    .then((QdhResponse)=>{
        serQdhListUser(QdhResponse.data)
    })
    .catch((error)=>{
        console.log("Lỗi");
    })
 },[])
 return (
    <div>
<h2>đọc dữ liệu từ APi Local</h2>
<table className='table table-bordered'>  
    <tr>
        <th></th>
    </tr>
</table>
    </div>
  )
}
