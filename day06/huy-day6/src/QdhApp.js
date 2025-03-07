import React, { Component } from 'react';
import QdhEventForm1 from './Components/QdhEventForm1';
import QdhEventForm2 from './Components/QdhEventForm2';
import QdhEventForm3 from './Components/QdhEventForm3';
import QdhEventForm4 from './Components/QdhEventForm4';
import QdhEventForm5 from './Components/QdhEventForm5';

class QdhApp extends Component {



  // Hàm xử lý nhận dữ liệu từ form student
  QdhHandleSubmitForm = (param)=>{
    console.log("Student:",param);
  }

  render() {
    return (
      <div className='container border my-3 bg-white'>
          <h1 className='text-center'>Event Form - Demo</h1>
          <hr/>
          <QdhEventForm1 />
          <QdhEventForm2 />
          <QdhEventForm3 />
          <QdhEventForm4 />
          <QdhEventForm5 />
      </div>
    );
  }
}

export default QdhApp;