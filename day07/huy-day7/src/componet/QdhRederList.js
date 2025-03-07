import React from 'react'

export default function QdhRenderList() {
    const QdhList = ["huu tuyen", "ReactJS","Fit-NTU"];

    const QdhElement = QdhList.map(item=>{
        return <li>{item}</li>
    })

  return (
    <div className='alert alert-success'>
        <h2> Danh sách:</h2>
        <ul>
            {
                QdhList.map(item=>{
                    return <li>{item}</li>
                })
            }
        </ul>
        <hr/>
        {QdhElement}
    </div>
  )
}