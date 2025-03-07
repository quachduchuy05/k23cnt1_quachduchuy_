import React, { Component } from 'react';

class QdhEventForm5 extends Component {
    constructor(props){
        super(props);
        this.state = {
            QdhName:'tuyen',
            QdhAge:18,
            QdhGender:'Female',
            QdhCourse:'CSS3'
        }
    }

    // Hàm xử lý sự kiện change
    QdhHandleChange = (event)=>{
        // lấy tên điều khiển
        let name = event.target.name;
        // Lấy giá trị trên điều khiển đang thao tác
        let value = event.target.value;

        // Cập nhật state
        this.setState({
            [name]:value,
        })
    }
    // Sự kiện khi submit form
    QdhHandleSubmit = (ev)=>{
        ev.preventDefault();
        alert(this.state.QdhName + "\n" + this.state.QdhAge);

        // Chuyển dữ liệu trên form lên App component (QdhApp);
        this.props.onQdhHandleSubmit(this.state);
    }
    render() {
        return (
            <div className='alert alert-danger'>
                <h2>Form Student Info </h2>
                <form>
                    <div>
                        <label htmlFor='QdhName'>Student Name:</label>
                        <input type='text' name='QdhName' id='QdhName' 
                            value={this.state.QdhName}
                            onChange={this.QdhHandleChange} />
                    </div>
                    <div>
                        <label htmlFor='QdhAge'>Student Age:</label>
                        <input type='text' name='QdhAge' id='QdhAge' 
                            value={this.state.QdhAge}
                            onChange={this.QdhHandleChange} />
                    </div>
                    <div>
                        <label htmlFor='QdhGender'>Student Gender:</label>
                        <div>
                            <input type='radio' name='QdhGender' id='QdhMale' className='mx-2'
                                value={'Male'}
                                checked={this.state.QdhGender === 'Male'}
                                onChange={this.QdhHandleChange} />
                            <label htmlFor='QdhMale'> Male</label>
                        </div>
                        <div>
                            <input type='radio' name='QdhGender' id='QdhFemale' className='mx-2'
                                value={'Female'}
                                checked={this.state.QdhGender === 'Female'}
                                onChange={this.QdhHandleChange} />
                            <label htmlFor='QdhFemale'> Female</label>
                        </div>
                        <div>
                            <input type='radio' name='QdhGender' id='QdhNone' className='mx-2'
                                value={'None'}
                                checked={this.state.QdhGender === 'None'}
                                onChange={this.QdhHandleChange} />
                            <label htmlFor='QdhNone'> None</label>
                        </div>
                    </div>
                    <div>
                        <label htmlFor='QdhCourse'>
                            <select name='QdhCourse' id='QdhCourse' 
                                    value={this.state.QdhCourse}
                                    onChange={this.QdhHandleChange} >
                                <option value={'HTML5'}>HTML5</option>
                                <option value={'CSS3'}>CSS3</option>
                                <option value={'Javascript'}>Javascript</option>
                                <option value={'Jquery'}>Jquery</option>
                                <option value={'Bootstrap'}>Bootstrap</option>
                            </select>
                        </label>
                    </div>
                    <button onClick={this.QdhHandleSubmit}>Submit</button>
                </form>
            </div>
        );
    }
}

export default QdhEventForm5;