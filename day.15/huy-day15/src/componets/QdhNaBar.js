import { Link } from "react-router-dom";

const QdhNavBar = () => {
  return (
    <nav style={{ padding: "10px", background: "#eee", marginBottom: "20px", textAlign: "center" }}>
      <h1 style={{ margin: "0 0 10px 0", color: "#333" }}>Nguyễn Văn Thịnh API</h1>
      <Link to="/" style={{ marginRight: "15px", textDecoration: "none", fontWeight: "bold" }}>
        Trang chủ
      </Link>
      <Link to="/list-user" style={{ marginRight: "15px", textDecoration: "none", fontWeight: "bold" }}>
        Danh sách User
      </Link>
      <Link to="/create-user" style={{ textDecoration: "none", fontWeight: "bold" }}>
        Thêm mới User
      </Link>
    </nav>
  );
};

export default QdhNavBar;