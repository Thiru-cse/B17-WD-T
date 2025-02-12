import React, { useEffect, useState } from 'react'

function UseEffectApi() {
    const [userdata, setUserData] = useState([]);

    useEffect(()=>{
        // Mounting Phase
        fetchData();
    },[])

    const fetchData=async()=>{
        await fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(res => res.json())
        .then(data=>setUserData(data)
        )
    }

  return (
    <div>
        {userdata.name}
        {userdata.username}
        {userdata.email}
    </div>
  )
}

export default UseEffectApi