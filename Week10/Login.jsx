import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ setIsLoggedIn }) {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = () => {
    if (
      username === "librarian" &&
      password === "1234"
    ) {
      setIsLoggedIn(true);
      navigate("/dashboard");
    } else {
      alert("Invalid Username or Password!");
    }
  };

  return (
    <div className="login-container">
      <h2>📚 Library Login</h2>

      <p>
        Enter your credentials to access
        the Library Management System
      </p>

      <input
        type="text"
        placeholder="Enter Username"
        value={username}
        onChange={(e) =>
          setUsername(e.target.value)
        }
      />

      <br />
      <br />

      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) =>
          setPassword(e.target.value)
        }
      />

      <br />
      <br />

      <button
        className="login-btn"
        onClick={loginHandler}
      >
        🔐 Login
      </button>

      <p style={{ marginTop: "20px" }}>
        Demo Login:
        <br />
        Username:
        <strong> librarian </strong>
        <br />
        Password:
        <strong> 1234 </strong>
      </p>
    </div>
  );
}

export default Login;
