import React from "react";

// Dữ liệu ban đầu với các thuộc tính đổi tên
const initialState = [
  {
    Qdh_productId: "P001",
    Qdh_productName: "IPhone11",
    Qdh_quantity: 15,
    Qdh_price: 1000,
  },
  {
    Qdh_productId: "P002",
    Qdh_productName: "IPhone12",
    Qdh_quantity: 20,
    Qdh_price: 1250,
  },
  {
    Qdh_productId: "P003",
    Qdh_productName: "IPhone13",
    Qdh_quantity: 10,
    Qdh_price: 1500,
  },
  {
    Qdh_productId: "P004",
    Qdh_productName: "IPhone14",
    Qdh_quantity: 15,
    Qdh_price: 2000,
  },
];

// Component hiển thị danh sách sản phẩm
const QdhListComp = () => {
  return (
    <div >
      <h2 >Danh Sách Sản Phẩm</h2>
      <table >
        <thead >
          <tr>
            <th>Mã Sản Phẩm</th>
            <th>Tên Sản Phẩm</th>
            <th>Số Lượng</th>
            <th>Giá</th>
          </tr>
        </thead>
        <tbody>
          {initialState.map((item) => (
            <tr key={item.Qdh_productId}>
              <td>{item.Qdh_productId}</td>
              <td>{item.Qdh_productName}</td>
              <td>{item.Qdh_quantity}</td>
              <td>{item.Qdh_price} $</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default QdhListComp;