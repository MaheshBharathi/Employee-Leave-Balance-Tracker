
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  
  const handleLogin = (e) => {
    e.preventDefault();
    
    console.log("Login attempt", email, password);

   
    if (email && password) {
      alert(`Logged in successfully with email: ${email}`);
      navigate("/leaveinfo"); 
    } else {
      alert("Please enter both email and password");
    }
  };

  return (
    <div className="log1">
    <div className="login-container">
      <h2>Login</h2>
      <form className='lof1'onSubmit={handleLogin}>
        <input className="lof2"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input className="lof2"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button className='wq1'type="submit">Login</button>
      </form>
    </div>
    </div>
  );
}

export default Login;
//end
