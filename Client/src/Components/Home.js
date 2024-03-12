// App.js
import React, { useState } from 'react';
import axios from 'axios';

function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone:''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/register', formData);
      alert('Registration successful!');
    } catch (error) {
      alert('Registration failed!');
      console.error(error);
    }
  };

  return (
    <div className="App">
      <h1>Registration Page</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="name" value={formData.username} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
        <input type="text" name="phone" placeholder="Phone No" value={formData.phone} onChange={handleChange} required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Home;
