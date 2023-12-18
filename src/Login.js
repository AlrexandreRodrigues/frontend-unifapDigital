import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const handleLoginSubmit = (event) => {
    event.preventDefault();
    console.log("ENVIOU", { email: email, senha: senha });
    //Logica para autenticar
  };

  return (
    <div>
      <form onSubmit={handleLoginSubmit}>
        <div>
          <h1>login de cadastro</h1>
        </div>
        <div>
          <h4>email</h4>
          <input
            required
            type="email"
            placeholder="insira seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h4>senha</h4>
          <input
            required
            type="password"
            placeholder="insira sua senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>
        <button type="submit">entrar</button>
      </form>
    </div>
  );
};

export default Login;
