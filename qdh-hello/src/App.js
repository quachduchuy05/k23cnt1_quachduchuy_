import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        Verify
Copy code
import React from 'react';
import './App.css';


  return (
    <div className="App">
      <header className="App-header">
        <h1>Thông tin cá nhân</h1>
        <p>
          <strong>Họ và tên:</strong> quách đức huyhuy
        </p>
        <p>
          <strong>Mã sinh viên:</strong>23109000452310900045
        </p>
        <p>
          <strong>Ngày sinh:</strong> 02/01/20055
        </p>
        <p>
          <strong>Điện thoại:</strong> 03289664570328966457
        </p>
        <p>
          <strong>Tên lớp:</strong> Lớp cnt1
        </p>
      </header>
    </div>
  );



        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
