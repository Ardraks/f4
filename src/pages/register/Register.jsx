import React, { useState } from 'react';
import "./Register.css"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import baseurl from "../../Api";



const Register = () => {

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    status:'Active',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const navigate = useNavigate();

  const savedata = ()=>{
    console.log("clicked")
    console.log(formData)
    axios.post(baseurl+'/register/registerview',formData)
    .then((response)=>{alert("Record save")})
    .catch(err=>console.log(err))
    navigate('/homepage')
  
  } 
  


  const handleSubmit = (e) => {
    e.preventDefault();

    
    const validationErrors = validateForm(formData);
    
    if (Object.keys(validationErrors).length === 0) {
      // Form is valid, you can submit the data or perform other actions here
      console.log('Form submitted:', formData);
    } else {
      // Update the state with validation errors
      setErrors(validationErrors);
    }
  };



  


  const validateForm = (formData) => {
    let errors = {};

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }

    // Validate password
    if (!formData.password || formData.password.length < 8) {
      errors.password = 'Password must be at least 8 characters long';
    }

    // Validate confirmPassword
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    return errors;
  };

  
  return (
    <div className='register'>
    <span className="registerTitle">Register</span>
      <form  className="registerForm" onSubmit={handleSubmit}>
        
          <label>Username</label>
          <input
          
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className='registerInput'
          />
        
        
          <label>Email</label>
          <input
          
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className='registerInput'
          />
          {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
        
        
          <label>Password</label>
          <input
          
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className='registerInput'
          />
          {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
        
        
          <label>Confirm Password</label>
          <input
          
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className='registerInput'
          />
          {errors.confirmPassword && (
            <p style={{ color: 'red' }}>{errors.confirmPassword}</p>
          )}
          <label>Status</label>
          <select name='status' value={formData.status} onChange={handleChange}>
            <option value="Active">Active</option>
             <option value="Inactive">Inactive</option>
              </select><br/><br/>
        
          <button  className="registerButton" type="submit"  onClick={savedata}>Register</button>
    
      </form>
      <button  className="registerLoginButton" type="submit" >Login</button>

    </div>
  )

  }
export default Register