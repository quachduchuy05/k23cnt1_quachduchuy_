import React, { useState } from "react";

const QdhAccountAdd = ({ addAccount }) => {
  const [qdhId, setQdhId] = useState("");
  const [qdhName, setQdhName] = useState("");
  const [qdhEmail, setQdhEmail] = useState("");
  const [qdhAmount, setQdhAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (qdhId && qdhName && qdhEmail && qdhAmount) {
      addAccount({ qdhId, qdhName, qdhEmail, qdhAmount: Number(qdhAmount) });
      setQdhId("");
      setQdhName("");
      setQdhEmail("");
      setQdhAmount("");
    }
  };

  return (
    <div>
      <h2>Thêm tài khoản</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="ID" value={qdhId} onChange={(e) => setQdhId(e.target.value)} required />
        <input type="text" placeholder="Họ và tên" value={qdhName} onChange={(e) => setQdhName(e.target.value)} required />
        <input type="email" placeholder="Email" value={qdhEmail} onChange={(e) => setQdhEmail(e.target.value)} required />
        <input type="number" placeholder="Số dư" value={qdhAmount} onChange={(e) => setQdhAmount(e.target.value)} required />
        <button type="submit">Thêm</button>
      </form>
    </div>
  );
};

export default QdhAccountAdd;
