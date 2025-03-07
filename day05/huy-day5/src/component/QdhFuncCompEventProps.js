import React from 'react'

export default function QdhFuncCompEventProps({ QdhProps }) {
    // Hàm xử lý sự kiện
    const QdhHanldeButtonClick1 = ()=>{
        alert("Dữ liệu từ props:" + QdhProps.QdhRenderName);
        console.log("Xin chào:", QdhProps.QdhRenderName);
    }

    const QdhHanldeButtonClick2 = (param)=>{
        // Lấy dữ liệu từ props
        alert("Dữ liệu từ props (Button 2 click):" + QdhProps.QdhRenderName);
        // Dữ liệu từ tham số
        console.log('====================================');
        console.log("Hi:", param);
        console.log('====================================');
    }

    return (
        <div className="alert alert-info">
            <button className='btn btn-primary mx-1'
                onClick={QdhHanldeButtonClick1}>Button 1</button>

            <button className='btn btn-success mx-1'
                onClick={() => QdhHanldeButtonClick2("Button 2")}>Button 2</button>
        </div>
    );
}