import React from 'react'

export default function QdhApp() {
  return (
    <div className='container boder my-3 p-3'>
        <h1>react - api - quach duc huy</h1>
  <hr/>
  <QdhReadApitLocal/>
  <hr/>
 <h2>đọc dữ liệu từ mokapi (mockapi.io)</h2>
 <QdhMockAPI/>
    </div>
  )
}
