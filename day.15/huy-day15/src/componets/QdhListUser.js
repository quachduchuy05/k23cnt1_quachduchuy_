import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const QdhListUser = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://67da156235c87309f52ae2be.mockapi.io/K23CNT1_NguyenVanThinh/Qdh_users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching user data:", error));
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa người dùng này không?")) {
      fetch(`https://67da156235c87309f52ae2be.mockapi.io/K23CNT1_NguyenVanThinh/Qdh_users/${id}`, {
        method: "DELETE",
      })
        .then(() => setUsers(users.filter((user) => user.id !== id)))
        .catch((error) => console.error("Lỗi khi xóa người dùng:", error));
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>DANH SÁCH NGƯỜI DÙNG</h1>
        <table
        border="1"
        cellPadding="10"
        cellSpacing="0"
        width="80%"
        style={{ margin: "auto", borderCollapse: "collapse" }}
      >
        <thead>
          <tr style={{ backgroundColor: "#f2f2f2" }}>
            <th>ID</th>
            <th>Họ và Tên</th>
            <th>Email</th>
            <th>Số Điện Thoại</th>
            <th>Trạng Thái</th>
            <th>Hành Động</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.Qdh_name}</td>
                <td>{user.Qdh_email}</td>
                <td>{user.Qdh_phone}</td>
                <td
                  style={{
                    color: user.Qdh_active ? "green" : "red",
                    fontWeight: "bold",
                  }}
                >
                  {user.Qdh_active ? "Hoạt động" : "Không hoạt động"}
                </td>
                <td>
                  <Link to={`/edit-user/${user.id}`}>
                    <button style={{ marginRight: "5px" }}>Sửa</button>
                  </Link>
                  <button onClick={() => handleDelete(user.id)}>Xóa</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">Không có dữ liệu</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default QdhListUser;