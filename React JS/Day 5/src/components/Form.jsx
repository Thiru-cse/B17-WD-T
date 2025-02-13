import React, { useState } from 'react'

function Form() {
    const [formData, setFormData] = useState(
        {username:'', password:'', email:'', gender: 'male'}
    );

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("Registered", formData);
    }

    const handleChange=(e)=>{
        const{name, value} = e.target;
        setFormData((predata)=>({
            ...predata, [name] : value
        }))
    }


  return (
    <div>
        <h1>Register Form</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Username:</label>
                <input 
                type="text" 
                name='username' 
                value={formData.username} 
                onChange={handleChange}
                placeholder='Username' 
                required />
            </div>

            <div>
                <label>Password:</label>
                <input 
                type="password" 
                name='password' 
                value={formData.password} 
                onChange={handleChange}
                placeholder='password' 
                required />
            </div>

            <div>
                <label>Email:</label>
                <input 
                type="email" 
                name='email' 
                value={formData.email} 
                onChange={handleChange}
                placeholder='E-mail' 
                required />
            </div>

            <div>
                <label>Gender:</label>
                <select name="gender" value={formData.gender} onChange={handleChange} >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
            </div>

            <button type='submit'>Register</button>

        </form>
    </div>
  )
}

export default Form