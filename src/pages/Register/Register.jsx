import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Register.css";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_DEV_URL;
export default function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(false);

  const validateForm = () => {
    var errors = [];
    if (username === "") {
      errors.push("Username is required");
    }
    if (email === "") {
      errors.push("email is required");
    }
    if (password === "") {
      errors.push("password is required");
    }
    if (password !== confirmPassword || password <= 4) {
      errors.push("passwords do not match or not strong enough");
    }
    return errors;
  } 

  const handleRegisterForm = async (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (errors.length <= 0) {
      try {
        const res = await axios.post(`${API_URL}api/auth/register`,{
          username,email, password
        });
        console.log(res);
        res.data && window.location.replace('/login')
      } catch (error) {
        console.log(error);
        setError(true);
      }
    } else {
      setError(true);
      console.log(errors);
    }

  }
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form action="" className="registerForm" onSubmit={handleRegisterForm}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Enter your Username..."
          onChange={e => setUsername(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email..."
          onChange={e=>setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter your password"
          onChange={e=>setPassword(e.target.value)}
        />
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          placeholder="Confirm your password"
          onChange={e=>setConfirmPassword(e.target.value)}
        />
        <button className="registerButton">Register</button>
      </form>
      <button className="registerLoginButton">
        <Link className="link" to="/login">
          Login
        </Link>
      </button>
    </div>
  );
}
