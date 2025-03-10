import React, { useEffect } from 'react'

export default function QdhUseEffect1() {
    useEffect   (()=>{
        console.log("useEffect  (callback)")
    }

    )
  return (
    <div className='alert alert-danger'>
        <h2>useEffect</h2>
    </div>
  )
}
