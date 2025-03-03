
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
//padhu oda final
// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";


// const Login = () => {
//   const [user, setUser] = useState({
//     email: "",
//     password: "",
//   });
//   const [message, setMessage] = useState("");
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setUser({ ...user, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setMessage("");

//     if (!user.email || !user.password) {
//       setMessage("All fields are required!");
//       return;
//     }

//     try {
//       const response = await axios.post("http://localhost:8001/users/login", user);
//       setMessage(response.data.message || "Login Successful!");
//       localStorage.setItem("token", response.data.token);
//       navigate("/");
//     } catch (error) {
//       setMessage(error.response?.data?.message || "Login Failed!");
//     }
//   };

//   return (
//     <div className="login-container">
//       <h2 className="aa">Login</h2>
//       {message && <p className="message">{message}</p>}
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label>Email:</label>
//           <input type="email" name="email" value={user.email} onChange={handleChange} required />
//         </div>

//         <div className="form-group">
//           <label>Password:</label>
//           <input type="password" name="password" value={user.password} onChange={handleChange} required />
//         </div>

//         <button type="submit">Login</button>
//         <p>Don't have an account? <a href="/signup">Sign Up</a></p>
//       </form>
//     </div>
//   );
// };

// export default Login;