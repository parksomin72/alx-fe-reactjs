import { useState } from "react";

export default function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username) {
      setErrors("Username is required.");
      return;
    }

    if (!email) {
      setErrors("Email is required.");
      return;
    }

    if (!password) {
      setErrors("Password is required.");
      return;
    }

    setErrors(""); // clear errors

    // Mock API simulation
    console.log("Submitting:", { username, email, password });
    alert("User registered successfully!");
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded">
      <h2>User Registration (Controlled)</h2>

      <div>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      {errors && <p style={{ color: "red" }}>{errors}</p>}

      <button type="submit">Register</button>
    </form>
  );
}
