import React, { useEffect, useState } from 'react'
import axios from 'axios'
import UserList from './UserList';

function UseEffectReal() {
    const [users, setUser] = useState([]);

    useEffect(()=>{
        fetchData();

        // const interval = setInterval(()=>{
        //     console.log("Data Fetching");
            
        // }, 2000)

        // return()=>{
        //     console.log("Clear");
        //     clearInterval(interval);
        // }

    },[])

    const fetchData = async () => {
        try{
            const response = await axios.get("https://fakestoreapi.com/products");
            setUser(response.data);
        }catch(err){
            console.log(err);
        }
    }
  return (
    <div>
        {/* Conditional Rendering */}
        {users.length>0 ?(
            users.map((user) => (
                <>
                <div key={user.id}>
                    {/* <h2>{user.name}</h2> */}
                    <UserList user={user} />
                </div>
                </>
            ))
        ):(<div>No Users</div>)}
    </div>
  )
}

export default UseEffectReal