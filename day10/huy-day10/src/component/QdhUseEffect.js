import React, { useEffect } from 'react'
import QdhUseState from './QdhUseState'

export default function QdhUseEffect() {

    const [Qdhcount, setQdhcout]=UseState(0)

    useEffect(()=>{
        console.log("day laf useeffect mot tham so");
    });

    useEffect(()=>{
        console.log("day laf UseEffect 2 tham so ,  tham so thu 2 laf mang rong []");
    },[]);

  return (
    <div className='alert alert - info'>
        <h1>demo QdhUseEffect</h1>
        <h1>Count:{Qdhcount}</h1>
        <button onClick={()=>setQdhcout(Qdhcount++)}>Click here</button>
    

    <div>
         <h3>Arryay:{QdhArray.toString()}</h3>
         <button>thêm </button>
    </div>
    </div>
  )
}
