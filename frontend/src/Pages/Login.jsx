import React, { useState } from 'react';
import './LoginSignup.css';
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios';

function Login() {
  const history = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function submit(e) {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/login", {
        email,
        password
      });

      if (response.data === "success") {
        alert('Login Success');
        history("/Cart", { state: { id: email } }); // Redirect to the home page
        localStorage.setItem('data', response.data.data);
      } else if (response.data === 'invalid password') {
        alert("Incorrect password");
      } else if (response.data === "not exist") {
        alert("User not found");
      }
    } catch (e) {
      alert("Invalid details");
      console.error(e);
    }
  }

  return (
    <div className='login'>
      <div className="container front">
        <div className="top">
          <span>Log In</span>
        </div>
        <div className="form">
          <form onSubmit={submit}>
            <div className="inputBox inputBoxFront">
              <label><i className="fa-solid fa-envelope"></i></label>
              <input type="text" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email" className="input" required />
            </div>
            <div className="inputBox inputBoxFront">
              <label><i className="fa-solid fa-lock"></i></label>
              <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" className="input" required />
            </div>
            <button type="submit" className="btn_signup" style={{ borderRadius: '5px', backgroundColor: 'black', color: 'white', padding: "5px", marginBottom: '10px' }}>Login</button><br />
            <Link style={{ textDecoration: 'none' }} to="/Signup">No Account? Create a New Account</Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
