import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <form style={{ display: "flex", flexDirection: "column" }}>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.currentTarget.value)}
        />
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.currentTarget.value)}
        />
        <br />
        <button>Login</button>
      </form>
    </div>
  );
}
