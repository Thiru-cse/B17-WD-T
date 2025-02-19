import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/user">User</Link>
        <Link to="/product">Product</Link>
        <Link to="/contact">Contact</Link>
        <NavLink to='/user/5'>User Detail</NavLink>
      </nav>
    </div>
  );
}

export default Navbar