import React, { useEffect, useState } from 'react'
import QdhAxiosUsers from '../api/QdhApi'
import { useNavigate } from 'react-router-dom'

export default function QdhListUser() {

    const navigate = useNavigate();
    const [QdhListUser, setQdhListUser] = useState([]);
    const QdhGetAllUser = async () => {
        //Gọi Api lấy dữ liệu
        const Qdh_resp = await QdhAxiosUsers.get("/Qdh_users");
        setQdhListUser(Qdh_resp.data)
    }

    //Gọi Api và lấy dữ liệu cho biến state (QdhListUser)
    useEffect(() => {
        QdhGetAllUser()
    }, [])

    //hàm xử lí khi sửa
    const QdhHandleUpdate = (id)=>{
        navigate(`/edit-user/${id}`);
    }

    //hàm xử lí khi xóa
    const QdhHandleDelete = async (id)=>{
        if(window.confirm('Bạn có muốn xóa không??')){
            await QdhAxiosUsers.delete("/Qdh_users/"+id);

            let QdhListUserDelete = QdhListUser.filter(x=>x.id !==id);
            setQdhListUser(QdhListUserDelete);

        }
    }

    // tạo hiển thị active
    const QdhActiveElement = (flag) => {
        if (flag === true || flag === "true")
            return <span class='badge text-bg-success'>Hoạt động </span>
        else
            return <span class='badge text-bg-danger'>Khóa </span>
    }

    //duyệt dữ liệu từ state và hiển thị
    const QdhElementUser = QdhListUser.map((Qdh_users) => {
        return (
            <tr key={Qdh_users.id}>
                <td>{Qdh_users.id}</td>
                <td>{Qdh_users.Qdh_name}</td>
                <td>{Qdh_users.Qdh_email}</td>
                <td>{Qdh_users.Qdh_phone}</td>
                <td>
                    {
                        QdhActiveElement(Qdh_users.Qdh_active)
                    }
                </td>
                <td>
                    <button onClick={() => QdhHandleUpdate(Qdh_users.id)} className='btn btn-primary mx-1 px-3'>Sửa</button>
                    <button onClick={() => QdhHandleDelete(Qdh_users.id)} className='btn btn-success mx-1 px-3'>Xóa</button>
                </td>
            </tr>
        )
    })

    return (
        <div className='container mt-4'>
            <table className='table table-bordered'>
                <thead>
                    <tr className='text-center'>
                        <th>User ID</th>
                        <th>Full Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Active</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        QdhElementUser
                    }
                </tbody>
            </table>
        </div>
    )
}