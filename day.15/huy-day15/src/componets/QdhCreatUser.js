import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function QdhCreateUser() {

  const QdhUser = {
    id:0,
    'Qdh_name':'',
    'Qdh_email':'',
    'Qdh_phone':'',
    'Qdh_active':true
  }

  const [Qdh_user, setQdh_User] = useState(QdhUser);
  const QdhApi = "https://67da1a1e35c87309f52af852.mockapi.io/K23cnt1_quachduchuy_2310900045/Qdhe_user"
  const navigate = useNavigate();

  const QdhHandleSubmit = (ev) =>{
    ev.preventDefault();
    console.log(Qdh_user);
    axios
    .post(QdhApi, Qdh_user)
    .then(()=>{
      navigate('/Qdh-list-user')
    })
    .catch((error) => console.log('Lỗi khi thêm mới.', error));
  }

  return (
    <div>
      <h2>Thêm mới tài khoản</h2>
      <form>
        <div className="mb-3 row">
          <label htmlFor="Qdh_name" className="col-sm-2 col-form-label">
            FullName
          </label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="Qdh_name" 
            name="Qdh_name"
            value={Qdh_user.Qdh_name}
            onChange={(ev)=>setQdh_User({...Qdh_user,Qdh_name:ev.target.value})}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="Qdh_email" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="Qdh_email" 
            name="Qdh_email"
            value={Qdh_user.Qdh_email}
            onChange={(ev)=>setQdh_User({...Qdh_user,Qdh_email:ev.target.value})}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="Qdh_phone" className="col-sm-2 col-form-label">
            Phone
          </label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="Qdh_phone" 
            name="Qdh_phone"
            value={Qdh_user.Qdh_phone }
            onChange={(ev)=>setQdh_User({...Qdh_user,Qdh_phone:ev.target.value})}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="Qdh_active" className="col-sm-2 col-form-label">
            Active
          </label>
          <div className="col-sm-10">
            <input type="radio" id="Qdh_active_true" className='mx-3' checked
            onChange={(ev)=>setQdh_User({...Qdh_user,Qdh_active:ev.target.value})}
            value={true}  
            name="Qdh_active"
            /> 
            <label htmlFor='Qdh_active_true'>Hoạt động</label>
            <input type="radio" id="Qdh_active_false" className='mx-3'
            onChange={(ev)=>setQdh_User({...Qdh_user,Qdh_active:ev.target.value})}
            value={false}  
            name="Qdh_active"   
            /> 
            <label htmlFor='Qdh_active_false'>Khóa</label>
          </div>
          <div className="mb-3 row">
            <label htmlFor="" className='col-sm-2 col-form-label'></label>
            <div className="col-sm-10">
              <button className='btn btn-primary mx-2 px-2'
              onClick={QdhHandleSubmit}>Tạo mới</button>
              <button className='btn btn-success mx-2'>Trở lại</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}