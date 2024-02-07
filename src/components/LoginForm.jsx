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
      <img src="/images/kinetricaLogoLogin.png" alt="Logo" className="logoLogin" />
      <div className="backgroundViolet"></div>
      <form action="" onSubmit={handleSubmit} className="form">
        <div className="titleLogin_container">
          <p className="titleLogin">LOGIN</p>
          <h2 className="exitFakeButton">X</h2>
          <div className="topColor"></div>
          <div className="leftColor"></div>
          <div className="bottomColor"></div>
        </div>
        <article className="login_inside_container">
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
          <p className="remember">I dont remember my password</p>
        </article>
      </form>
      {error && (
        <p className="errorMensage">Todos los campos son obligatorios</p>
      )}
    </section>
  );
}
