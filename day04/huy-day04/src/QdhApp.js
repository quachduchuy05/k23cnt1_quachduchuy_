import QdhClassComp from './Component/QdhClassComp';
import QdhfuncComp from './Component/QdhfuncComp';
import QdhfunccompObj from './Component/QdhfunccompObj';

function QdhApp() {
  //object
  const users ={
    fullname: 'huy',
    age:20,
    phone:"6666"
  }
  return (
    <div className="container border mt-3">
      <h1>Demo component</h1>
      <hr/>
        <div className="alert alert-danger">
           <QdhfuncComp name="huy" address="Quach duc" company="Devmaster" />
           <hr/>
           <QdhfuncComp name="gg" address="Vinh Quynh" company="dd" />

        </div>
        <div className="alert alert-info">
          <QdhfunccompObj renderInfo={users} />
        </div>
        <QdhClassComp />
        {/*Chuyển sữ liệu từ NvkApp xuống NvkClassComp*/}
        <QdhClassComp renderName="K23CNT1" renderUser={users} />
    </div>
  );
}

export default QdhApp;