import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import QdhHome from "./QdhHome";

import QdhAbout from './components/QdhAbout'
import QdhContact from './components/QdhContact'
import Qdhgioithieu from "./Qdhgioithieu";
import QdhSanPham from "./QdhSanPham";
import Qdhtintuc from "./QdhTinTuc";
import QdhLienhe from "./QdhLienHe";
import "./Style.css"; 

function QdhApp() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Trang chủ</Link></li>
            <li><Link to="/gioi-thieu">Giới thiệu</Link></li>
            <li><Link to="/san-pham">Sản phẩm</Link></li>
            <li><Link to="/tin-tuc">Tin tức</Link></li>
            <li><Link to="/lien-he">Liên hệ</Link></li>
            
          </ul>
        </nav>
        
        <Routes>
          <Route path="/" element={<QdhHome />} />
          <Route path="/gioi-thieu" element={<Qdhgioithieu />} />
          <Route path="/san-pham" element={<QdhSanPham />} />
          <Route path="/tin-tuc" element={<Qdhtintuc />} />
          <Route path="/lien-he" element={<QdhLienhe />} />
        </Routes>
      </div>
    </Router>
  );
}

export default QdhApp;
