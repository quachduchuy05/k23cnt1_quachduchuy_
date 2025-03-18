


import React from 'react'

export default function QdhCreadMockAPI() {
    //khoi tao state 
    const [QdhFullname,setQdhFullName]= useState('')
    const [QdhAge,setQdhAge]= useState('0')
    const [QdhActive,setQdhActive]= useState('true')
    // khi submit from 
    QdhHandleSubmit = (event)=>{
        event.preventDefault();
        console.log("QdhActive:" ,QdhActive);
    }

  return (
    <div className='alert alert-info'>
        <h2>them moi user</h2>
        <hr/>
        <from>
            <div className='row mb-1'> 
                <lable for="QdhFullName">FullName</lable>
                <label type='text'name='QdhFullName'id="QdhFullName"></label>
            </div>
            <div className='row mb-1'> 
                <lable for="QdhFullName">Age</lable>
                <label type='number'name='QdhAge'id="QdhAge"></label>
            </div>
            <div className='row mb-1'>
                
                <label for="QdhActive">Active</label>
                <input type='radio' name='QdhActive_hd' value={'true'}/>
                    <label for="QdhActive_hd">hoat dong</label>
                <input type='radio'name='QdhActive_kh' value={'true'}/>
                    <lable for="QdhActive_hd">khoa</lable>
            </div>
            <button>create</button>
        </from>
    </div>
  )
}
