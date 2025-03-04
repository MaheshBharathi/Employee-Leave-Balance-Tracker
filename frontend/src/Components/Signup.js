
//end
/*import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    if (!user.username || !user.email || !user.password) {
      setMessage("❌ All fields are required!");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/users/signup", user);
      setMessage(response.data.message || "✅ Signup Successful!");
      setUser({ username: "", email: "", password: "" });
    } catch (error) {
      setMessage(error.response?.data?.message || "❌ Signup Failed!");
    }
  };

  return (
    <center>
      <div className="formcont">
        <br />
        {message && <p className="message">{message}</p>}
        <form className="form" onSubmit={handleSubmit}>
          <h2>Sign Up</h2>
          <label>Username:</label>
          <input type="text" name="username" value={user.username} onChange={handleChange} required /><br />
          <label>Email:</label>
          <input type="email" name="email" value={user.email} onChange={handleChange} required /><br />
          <label>Password:</label>
          <input type="password" name="password" value={user.password} onChange={handleChange} required /><br />
          <button className="btn" type="submit">Sign Up</button>
        </form>
      </div>
    </center>
  );
};

export default Signup;*/




import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate
import axios from "axios";
import "./Signup.css";
const Signup = () => {
  const navigate = useNavigate(); // ✅ Initialize useNavigate

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    if (!user.username || !user.email || !user.password) {
      setMessage("❌ All fields are required!");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8001/users/signup", user);
      setMessage(response.data.message || "✅ Signup Successful!");

      // ✅ Redirect to login page after 2 seconds
      setTimeout(() => {
        navigate("/login");
      }, 3000);
      
      setUser({ username: "", email: "", password: "" });
    } catch (error) {
      setMessage(error.response?.data?.message || "❌ Signup Failed!");
    }
  };

  return (
    <div className="signup-container">
      <h2 className="sih1">Sign Up</h2>
      {message && <p className="message">{message}</p>}
      <form className="sih2"onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="sih3">Username:</label>
          <input className="sih5"type="text" name="username" value={user.username} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label className="sih3">Email:</label>
          <input className="sih5"type="email" name="email" value={user.email} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label className="sih3">Password:</label>
          <input className="sih5"type="password" name="password" value={user.password} onChange={handleChange} required />
        </div>

        <button className="sih4"type="submit">Sign Up</button>
        <p className="sih6">Already have an account? <a href="/login">Login</a></p>
      </form>
    </div>
  );
};

export default Signup;
