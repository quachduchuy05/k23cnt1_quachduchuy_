import axios from "axios";
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

export default function QdhCreateUser() {

    let Qdhuser = {
        id: '',
        Qdh_name: "",
        Qdh_email: "",
        Qdh_phone: "",
        Qdh_active: false
    }

    const [Qdh_users, setQdhUser] = useState(Qdhuser)
    const QdhApiUrl = "https://67d984c600348dd3e2ab72b2.mockapi.io/k23cnt2_nguyenducthanh/Qdh_users"

    const navigate = useNavigate();

    const QdhHandleSubmit = (event) => {
        event.preventDefault();

        // Kiểm tra dữ liệu trước khi gửi
        console.log("Dữ liệu chuẩn bị gửi lên API:", Qdh_users);

        axios
            .post(QdhApiUrl, Qdh_users) // Dùng POST để tạo mới dữ liệu
            .then((response) => {
                console.log("Tạo mới thành công:", response.data);
                alert("User đã được thêm thành công!");
                navigate('/list-user'); // Chuyển hướng về danh sách sau khi thêm thành công
            })
            .catch((error) => {
                console.error("Lỗi khi thêm mới:", error);
            });
    };

    const QdhHandleBack = (event) => {
        event.preventDefault();
        navigate('/list-user')
    }

    return (
        <div>
            <h2 className="alert alert-success">Thêm mới thông tin User</h2>
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
                            value={Qdh_users.Qdh_name}
                            onChange={(ev) => setQdhUser({ ...Qdh_users, Qdh_name: ev.target.value })}
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
                            value={Qdh_users.Qdh_email}
                            onChange={(ev) => setQdhUser({ ...Qdh_users, Qdh_email: ev.target.value })}
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
                            value={Qdh_users.Qdh_phone}
                            onChange={(ev) => setQdhUser({ ...Qdh_users, Qdh_phone: ev.target.value })}
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
                            value="true"
                            checked={Qdh_users.Qdh_active === true}
                            onChange={() => setQdhUser({ ...Qdh_users, Qdh_active: true })}
                        />
                        <label htmlFor="Qdh_active_true" className="mx-2 text-success">Hoạt động</label>

                        <input
                            type="radio"
                            id="Qdh_active_false"
                            name="Qdh_active"
                            value="false"
                            checked={Qdh_users.Qdh_active === false}
                            onChange={() => setQdhUser({ ...Qdh_users, Qdh_active: false })}
                        />
                        <label htmlFor="Qdh_active_false" className="mx-2 text-danger">Khóa</label>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="" className="col-sm-2 col-form-label"></label>
                    <div className="col-sm-6">
                        <button className="btn btn-primary mx-1" onClick={QdhHandleSubmit}>Create</button>
                        <button className="btn btn-success px-3" onClick={QdhHandleBack}>Back</button>
                    </div>
                </div>
            </form>
        </div>
    )
}