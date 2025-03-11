import React, { Component } from 'react'

export default function QdhUseState () {
    // khởi tạo state
    const [Qdhcount, setQdhcout] =UseState(0);

   // khởi tạo state là 1 mảng 
   const QdhArr = [10,12,20,22];
   const [QdhArray, setQdhArray]= useState (QdhArr);

   //khởi tạo State với mảng object
   const QdhStudents =[
    {QdhId:"SV001",QdhName:"quách đức huy",QdhAge:46},
    {QdhId:"SV002",QdhName:" nguyễn thị hải",QdhAge:146},

   ];
   const [QdhStudentList,  setQdhStudenList]=useState(QdhStudents)
   //hàm sử lý sự kiện khi thêm mới phần tử vào mảng 
   QdhHandleAddList=()=>{
    setQdhArray([
      ...QdhArray,
      parseInt(Math.random()*100),
    ])
   }
   // Hàm sử lsy sự kiện thê mới sinh viên 
   const QdhHandleAddNewStudent =()=>{
      let QdhStudent ={
        QdhID :"SV003",
        QdhName:"Huy quách ",
        QdhAge:20,
        // thêm vào State Qdh
        setQdhStudenList 
      }
   }
    return (
      <div className='alert alert-danger'>
        <h2>Usestate demo</h2>
        <div>
        <button onClick={()=>setQdhcout(Qdhcount+1)}>tăng +</button>
        <button onClick={()=>setQdhcout(Qdhcount-1)}>giảm -</button>
        </div>
        <div>
            <h3>Arryay:{QdhArray.toString()}</h3>
            <button onClick={QdhHandleAddList}>thêm phần tử</button>
        </div>
        <div>
          <h3>danh sách sinh viên </h3>
          <table className='table table - bordered'>  
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
              </tr>
            </thead>
            <tbody>
              {
                QdhStudentList.map((QdhStudents,index)=>{
                  return <>
                  <tr>
                  <td>{QdhStudent.QdhID}</td>
                  <td>{QdhStudent.QdhName}</td>
                  <td>{QdhStudent.QdhAge}</td>
                  </tr>
                  
                  </>

                })
              }
            </tbody>
            <tfoot>
              <button onClick={QdhHandleAddNewStudent}>thêm mới sinh viên </button>
            </tfoot>
          </table>
        </div>
      </div>
    )

}
