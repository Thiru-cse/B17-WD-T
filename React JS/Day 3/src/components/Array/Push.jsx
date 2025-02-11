import React from 'react'

function Push() {
    var users = ["john", "doe", "jane", "jim"];

    const addUser = ()=>{
        const newUser = users.push("Rock");
        console.log(newUser);

        users.forEach((ele)=>console.log(ele));
    }

  return (
    <div>
        <h1>Push</h1>
        <ul>
        {users.map((item, index)=>(
            <div key={index}>
                <li>{item}</li>
            </div>
        ))}
        </ul>

        <button onClick={addUser}>Add User</button>
    </div>
  )
}

export default Push