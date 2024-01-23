import "./loginForm.css";
import { useState } from "react";
export function LoginForm({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setError(true);
      return;
    }
    setError(false);

    setUser([email]);
  };

  return (
    <section className="login_container">
      <form action="" onSubmit={handleSubmit} className="form">
        <article>
          <div>
            <h2>Email</h2>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <h2>Password</h2>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="buttonLogin" type="submit">
            <div className="topButtonColor"></div>
            LOGIN
            <div className="bottomButtonColor"></div>
          </button>
        </article>
      </form>
      {error && <p>Todos los campos son obligatorios</p>}
    </section>
  );
}
