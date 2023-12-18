import React, { useState } from "react";
import axios, { formToJSON } from "axios";

function Formulario() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [profissao, setProfissao] = useState("");
  const [aceitaTermos, setAceitaTermos] = useState(false);


  const handleCadastroFormulario = (event) => {
    event.preventDefault();
    try {
      const response = axios.post("http://localhost:3000/usuarios", {
        nome,
        email,
        senha,
        profissao,
        termos: aceitaTermos,
      });
      console.log("resposta da Api", formToJSON(response.data));
    } catch (error) {
      console.error("Error ao fazer solitacao", error);
    }
  };

  return (
    <div style={{ textAlign: `center` }}>
      <form onSubmit={handleCadastroFormulario}>
        <div>
          <h1>CADASTRO DE FORMULARIO</h1>
          <div>
            <h4>nome</h4>
            <input
              required
              type="text"
              placeholder="nome e sobre nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
            <h4>email</h4>
            <input
              required
              type="email"
              placeholder="insira um email valido"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <h4>senha</h4>
            <input
              required
              type="password"
              placeholder="crie uma senha segura"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </div>
          <div style={{ margin: `30px` }}>
            <label>profissao</label>
            <select
              id="profissao"
              name="profissao"
              value={profissao}
              onChange={(e) => setProfissao(e.target.value)}
            >
              <option value="">selecione sua possivel profissao</option>
              <option value="estudante"> estudante </option>
              <option value="engenheiro"> engenheiro </option>
              <option value="professor"> professor</option>
              <option value="outros"> outros</option>
              <option value="jogador de cod mobile">
                {" "}
                jogador de cod mobile
              </option>
            </select>
          </div>{" "}
          <div>
            <input
              required
              type="checkbox"
              id="aceitaTermos"
              checked={aceitaTermos}
              onChange={() => setAceitaTermos(!aceitaTermos)}
            />

            <label>eu aceito os termos de condicoes</label>
          </div>
          <button submit="handleCadastroFormulario">cadastra</button>
        </div>
      </form>
    </div>
  );
}
export default Formulario;
