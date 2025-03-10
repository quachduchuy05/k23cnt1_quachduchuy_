import React, { useState } from 'react'

export default function QdhUseState() {
    const [count,setCount] = useState(0);
    const QdhHandleTang=()=>{
        count = count +1;
        setCount(count);
    }
    const danh_sach = [100,120,150,200];
    const [list,setlist]= useState(danh_sach);
    QdhHandleAddNewRandom = ()=>{
    //     setlist(prev =>{
    //         setlist[...prev,
    //             parseInt(Math.random()*100)
    //         ]
    //     })
    // }
    setlist([
        ...list,
        parseInt(Math.random()*1000)
    ])

  return (
    <div className='alert alert-info'>
        <h2>su dung useState</h2>
        <div> 
            <p>Count: {Count}</p>
            <button onClick={QdhHandleTang}>tang</button>
            <button onClick={()=>setCount(count-1)}>giam</button>
            <button onClick={()=>setCount(0)}>dat lai</button>    
        </div>
        <div>
            <h3>List: {list.toString}</h3> 
            <button onClick={QdhHandleAddNewRandom}> Add new(random)</button>
        </div>
    </div>
  )
}}
