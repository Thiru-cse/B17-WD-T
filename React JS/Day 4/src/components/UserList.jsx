import React from 'react'

function UserList({user}) {
  return (
    <div>
        <li>{user.title}</li>
        <li>{user.price}</li>
        <img src={user.image} />
        <button>Add To Cart</button>
        {/* <li>{user.email}</li>
        <li>{user.username}</li> */}
    </div>
  )
}

export default UserList