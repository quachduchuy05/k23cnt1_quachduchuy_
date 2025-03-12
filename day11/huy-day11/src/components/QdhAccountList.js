import React from "react";

const QdhAccountList = ({ accounts }) => {
  return (
    <div>
      <h2>Danh sách tài khoản</h2>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Họ và tên</th>
            <th>Email</th>
            <th>Số dư</th>
          </tr>
        </thead>
        <tbody>
          {accounts.map((account) => (
            <tr key={account.QdhId}>
              <td>{account.QdhId}</td>
              <td>{account.QdhName}</td>
              <td>{account.QdhEmail}</td>
              <td>{account.QdhAmount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default QdhAccountList;
