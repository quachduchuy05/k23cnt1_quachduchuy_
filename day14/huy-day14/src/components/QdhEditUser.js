import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

export default function QdhEditUser() {

    //api
    const QdhApiUrl = "https://67da1a1e35c87309f52af852.mockapi.io/K23cnt1_quachduchuy_2310900045/"
    //lấy biến id trên url
    const { id } = useParams(); // <Route path='/edit-user/:id' element={<QdhEditUser />} />; navigate(`/edit-user/${QdhId}`);
    //Khởi tạo state cho component
    const [Qdh_editUser, setQdhEditUser] = useState({
        Qdh_name: '', Qdh_email: '', Qdh_phone: '', Qdh_active: false
    })
    //đọc dữ liệu từ api và set cho state: Qdh_editUser
    useEffect(() => {
        console.log("Fetching data from API:", `${QdhApiUrl}/${id}`);
        axios
            .get(`${QdhApiUrl}/${id}`)
            .then((Qdh_response) => {
                console.log("Data received:", Qdh_response.data);
                setQdhEditUser(Qdh_response.data);
            })
            .catch((error) => {
                console.error("Lỗi khi đọc dữ liệu từ API:", error);
            });
    }, [id]);

    //Hàm xử lí khi người dùng thay đổi trạng thái Active
    const QdhHandleRadioChange = (ev) => {
        setQdhEditUser({
            ...Qdh_editUser,
            Qdh_active: ev.target.value === "true", // Chuyển "true" thành true (boolean)
        });
    };
    //tạo navigate từ react router dom để điều hướng khi cập nhật thành công hoặc back
    const navigate = useNavigate();

    //Khi người dùng nhấn nút submit => lấy dữ liệu từ form post vào api
    //Hàm cập nhật những thay đổi trên form vào api
    const QdhHandleSubmit = (event) => {
        event.preventDefault();
        console.log("Data to update:", Qdh_editUser);
    
        axios
            .put(`${QdhApiUrl}/${id}`, Qdh_editUser)
            .then((Qdh_response) => {
                console.log("Update Success:", Qdh_response.data);
                alert('Successed!');
                navigate('/list-user');
            })
            .catch((error) => {
                console.error("Lỗi khi cập nhật dữ liệu:", error);
            });
    };
    // khi click vào nút back
    const QdhHandleBack = (event) => {
        event.preventDefault();
        navigate('/list-user')
    };

    return (
        <div>
            <h2 className="alert alert-success">Sửa thông tin User</h2>
            <form>
                <div className="mb-3 row">
                    <label htmlFor="Qdh_name" className="col-sm-2 col-form-label">
                        Full Name
                    </label>
                    <div className="col-sm-6">
                        <input
                            type="text"
                            className="form-control"
                            id="Qdh_name"
                            name="Qdh_name"
                            value={Qdh_editUser.Qdh_name}
                            onChange={(ev) => setQdhEditUser({ ...Qdh_editUser, Qdh_name: ev.target.value })}
                        />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="Qdh_email" className="col-sm-2 col-form-label">
                        Email
                    </label>
                    <div className="col-sm-6">
                        <input
                            type="email"
                            className="form-control"
                            id="Qdh_email"
                            name="Qdh_email"
                            value={Qdh_editUser.Qdh_email}
                            onChange={(ev) => setQdhEditUser({ ...Qdh_editUser, Qdh_email: ev.target.value })}
                        />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="Qdh_phone" className="col-sm-2 col-form-label">
                        Phone
                    </label>
                    <div className="col-sm-6">
                        <input
                            type="tel"
                            className="form-control"
                            id="Qdh_phone"
                            name="Qdh_phone"
                            value={Qdh_editUser.Qdh_phone}
                            onChange={(ev) => setQdhEditUser({ ...Qdh_editUser, Qdh_phone: ev.target.value })}
                        />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="Qdh_active" className="col-sm-2 col-form-label">
                        Active
                    </label>
                    <div className="col-sm-6">
                        <input
                            type="radio"
                            id="Qdh_active_true"
                            name="Qdh_active"
                            value={'true'}
                            checked={Qdh_editUser.Qdh_active === 'true' || Qdh_editUser.Qdh_active === true} // Kiểm tra nếu giá trị là "true"
                            onChange={QdhHandleRadioChange}
                        /> <label htmlFor="Qdh_active_true" className="mx-2 text-success">Hoạt động</label>
                        <input
                            type="radio"
                            id="Qdh_active_false"
                            name="Qdh_active"
                            value={'false'}
                            checked={Qdh_editUser.Qdh_active === 'false' || Qdh_editUser.Qdh_active === false} // Kiểm tra nếu giá trị là "false"
                            onChange={QdhHandleRadioChange}
                        /> <label htmlFor="Qdh_active_false" className="mx-2 text-danger">Đang khóa</label>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="" className="col-sm-2 col-form-label"></label>
                    <div className="col-sm-6">
                        <button className="btn btn-primary mx-1" onClick={(e)=>QdhHandleSubmit(e)}>Update</button>
                        <button className='btn btn-success px-3' onClick={QdhHandleBack}>Back</button>
                    </div>
                </div>
            </form>
        </div>
    )
}