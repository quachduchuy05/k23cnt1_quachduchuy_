import React, { Component } from "react";

class QdhClassCompEventPostData extends Component {
    constructor(props){
        super(props);
    }

    // Hàm xử lý sự kiện
    QdhEventHandleClick = ()=>{
        // Chuyển dữ liệu lên App thông qua props
        this.props.onTvcDataToApp("Dữ liệu từ component con - QdhClassCompEventPostData");
    }
  render() {
    return (
      <div className="alert alert-success">
        <button className="btn btn-primary"
            onClick={this.QdhEventHandleClick}>
                Button 1 - Chuyển dữ liệu lên App
        </button>
      </div>
    );
  }
}

export default QdhClassCompEventPostData;