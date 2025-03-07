import React from "react";

export default function QdhFuncCompEvent1() {
  // Hàm xử lý sự kiện
  const QdhEventButton1Click = () => {
    alert("Button 1 - Clicked");
  };

  const QdhEventButton2Click = () => {
    alert("Button 2 - Clicked");
  };

  const QdhEventButton3Click = (name) => {
    alert("Name: " + name);
  };

  return (
    <div className="alert alert-info">
      {/* Button 1 - Đã sửa lỗi và gọi đúng hàm */}
      <button className="btn btn-danger mx-1" onClick={QdhEventButton1Click}>
        Button 1
      </button>

      {/* Button 2 */}
      <button className="btn btn-primary mx-1" onClick={QdhEventButton2Click}>
        Button 2
      </button>

      {/* Button 3 - Sử dụng arrow function để truyền tham số */}
      <button
        className="btn btn-success mx-1"
        onClick={() => QdhEventButton3Click("NGUYEN HUU TUYEN")}
      >
        Button 3
      </button>
    </div>
  );
}