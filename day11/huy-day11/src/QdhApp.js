import React, { useState } from "react";
import QdhAccountList from "./components/QdhAccountList";
import QdhAccountAdd from "./components/QdhAccountAdd";
import "./QdhApp.css";



const QdhApp = () => {
  // Mock data
  const [accounts, setAccounts] = useState([
    { qdhId: "231090045", qdhName: "Quách Đức Huy", qdhEmail: "huy@example.com", qdhAmount: 5000 },
    { qdhId: "231090046", qdhName: "Nguyễn Văn A", qdhEmail: "nguyenvana@example.com", qdhAmount: 3000 },
    { qdhId: "231090047", qdhName: "Trần Thị B", qdhEmail: "tranthib@example.com", qdhAmount: 7000 }
  ]);

  // Hàm thêm tài khoản
  const addAccount = (newAccount) => {
    setAccounts([...accounts, newAccount]);
  };

  return (
    <div>
      <h1>Quản lý tài khoản</h1>
      <QdhAccountAdd addAccount={addAccount} />
      <QdhAccountList accounts={accounts} />
    </div>
  );
};

export default QdhApp;
