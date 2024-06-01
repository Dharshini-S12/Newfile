import React,{ useEffect, useState } from 'react'
const EffectSample = () => {
    const [count,setCount] = useState(0);
    const [posts,setPosts] = useState([]);
    useEffect( ()=>{
        document.title = `You clicked ${count} times`
        const fetchData = async() => {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            const posts  = await response.json();
            setPosts(posts);
        }
        fetchData();
    }
)
    return (
      <div>
          <p>{count}</p>
          <p>{posts}</p>
          <button onClick={()=> setCount(count+1)}> ADD </button>
          <button onClick={()=> setPosts(posts)}> ADD </button>
          
      </div>
    )
}

export default EffectSample
