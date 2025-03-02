import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Dummy user for testing (Replace with API call later)
    const users = { "test@example.com": "password123" };

    if (users[email] && users[email] === password) {
      localStorage.setItem("user", JSON.stringify({ email }));
      alert("Login successful!");
      navigate("/"); // Redirect to home
      window.location.reload(); // Refresh navbar
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div>
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
