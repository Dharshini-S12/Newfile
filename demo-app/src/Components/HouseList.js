import React, { useState } from 'react'
import HouseRow from './HouseRow'
const houseArray = [
    {
        id:1,
        address:"xxxx",
        country : "India",
        price : 90000
    },
    {
        id:2 ,
        address:"yyyy",
        country : "London",
        price : 40000
    },
]
const HouseList = () =>{
    const [houses,setHouses] = useState(houseArray)
    // const [count,setCount] = useState(0)
    // const initial = 0
    const addHouse = () =>{
        setHouses([
            ...houses,
            {
                    id:3 ,
                    address:"zzzz",
                    country : "Califonia",
                    price : 50000
            },
        ])
    }
    return(
        <>
        <div className='row mb-2'>
            <h5 className='text-center ml-4'>Houses currently on the market</h5>
        </div>
        <table className='table'>
            <thead>
                <tr>
                    <th>Address</th>
                    <th>Country</th>
                    <th>Asking Price</th>
                </tr>
            </thead>
            <tbody>
                {houses.map((h)=>(
                    <HouseRow key={h.id} house={h}/>
                ))}
            </tbody>
        </table>
        <button onClick={addHouse} className='btn btn-primary'>
            Add
        </button>
        {/* <br></br>
         <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <button onClick={()=>setCount(count-1)}>Decrement</button>
        <button onClick={()=>setCount(initial)}>Reset</button> */}
        
        </>
    )
}
export default HouseList