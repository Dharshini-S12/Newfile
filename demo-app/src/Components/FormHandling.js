import React, { useState } from 'react'

const FormHandling = () => {
    const[count1,setCount1] = useState('')
    const[count2,setCount2] = useState('')
    const[count,setCount] = useState(0)
    const myfun = () =>{
        const count = parseInt(count1) + parseInt(count2)
        setCount(count)
    }
  return (
    <div>
      <input type="text" username="Value1" value={count1} onChange={(e)=>setCount1(e.target.value)} placeholder='Value 1'></input>
      <input type="text" username="Value2" value={count2} onChange={(e)=>setCount2(e.target.value)} placeholder='Value 2'></input>
      <button onClick={myfun}>ADD</button>
      <p>{count}</p>
      
    </div>
  )
}

export default FormHandling
