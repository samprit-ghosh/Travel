// LoginForm.js
import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebaseConfig"; // Import Firebase auth instance
import { useNavigate } from "react-router-dom"; // For navigation after login

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // For navigation after login

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful!");
      navigate("/adminpage"); // Redirect to admin page after successful login
    } catch (err) {
      setError("Invalid email or password"); // Show error message
      navigate("/"); // Redirect back to login page
      console.error("Login error:", err.message);
    }
  };

  return (
    <div style={{ textAlign: "center" }} className="login-container">
<center>
      <div className="login-background">
      <h2 className="login-h2">Admin </h2>

      <form onSubmit={handleLogin} style={{ display: "inline-block", textAlign: "left" }} className="login-form">
        <div style={{ marginBottom: "20px" }}>
          <label className="login-label">Email:</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ display: "block", width: "100%", padding: "10px", marginTop: "5px",borderRadius:"10px",color:"red" }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label  className="login-label">Password:</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ display: "block", width: "100%", padding: "10px", marginTop: "5px",borderRadius:"10px",color:"red" }}
          />
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
      
        <button
          type="submit" className="cta-button"

        >

      
          Login
        </button>
      </form>
      </div>
      </center>
    </div>
  );
};

export default LoginForm;
