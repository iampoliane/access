import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./styles.css";

export function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "admin" && password === "password") {
      navigate("/");
    } else {
      alert("Credenciais inválidas. Tente novamente.");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <label>
        Nome de Usuário:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <br />
      <label>
        Senha:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <button onClick={handleLogin}>Login</button>
      <p>
        Ainda não tem uma conta? <Link to="/signup">Crie uma agora</Link>.
      </p>
      <a href="/" class="button-link">Voltar para Tela Inicial</a>
    </div>
  );
};
