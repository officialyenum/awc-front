import { Link } from "react-router-dom";
import { useRef, useState, useContext } from "react";
import { Context } from "../../context/Context";
import "./Login.css";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_DEV_URL;
export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const {user, dispatch, isFetching} = useContext(Context)
  const [error, setError] = useState(false);

  const validateForm = () => {
    var errors = [];
    if (userRef.current.value === "") {
      errors.push("username is required");
    }
    if (passwordRef.current.value === "") {
      errors.push("password is required");
    }
    return errors;
  } 

  const handleLoginForm = async (e) => {
    e.preventDefault();
    dispatch({type: "LOGIN_START"});
    setError(false);
    const errors = validateForm();
    console.log(userRef.current.value);
    console.log(passwordRef.current.value);
    if (errors.length <= 0) {
      try {
        const res = await axios.post(`${API_URL}api/auth/login`,{
          username:userRef.current.value, 
          password:passwordRef.current.value
        });
        console.log(res.data.data);
        dispatch({type: "LOGIN_SUCCESS", payload: res.data.data});
      } catch (error) {
        console.log(error);
        dispatch({type: "LOGIN_FAILURE"});
        setError(true)
      }
    } else {
      console.log(errors);
      dispatch({type: "LOGIN_FAILURE"});
      setError(true);
    }
  }
  console.log(user);
  console.log(isFetching);
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form action="" className="loginForm" onSubmit={handleLoginForm}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Enter your username..."
          ref={userRef}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter your password"
          ref={passwordRef}
        />
        <button className="loginButton" disabled={isFetching}>Login</button>
      </form>
      <button className="loginRegisterButton">
        <Link className="link" to="/register">
          Register
        </Link>
      </button>
      {error && <span>Something went wrong !!!</span>}
    </div>
  );
}
