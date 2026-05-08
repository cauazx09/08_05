import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../components/AuthContext';

// Simulação de um banco de dados local
const USUARIOS_CADASTRADOS = [
  { usuario: 'admin', senha: '123', nome: 'Administrador' },
  { usuario: 'lucas', senha: 'abc', nome: 'Lucas Silva' }
];

function Login() {
  const [usuarioDigitado, setUsuarioDigitado] = useState('');
  const [senhaDigitada, setSenhaDigitada] = useState('');
  
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Lógica de verificação
    const usuarioEncontrado = USUARIOS_CADASTRADOS.find(
      (u) => u.usuario === usuarioDigitado && u.senha === senhaDigitada
    );

    if (usuarioEncontrado) {
      // Se encontrou, passamos o objeto do usuário para o contexto
      login(usuarioEncontrado); 
      navigate('/dashboard');
    } else {
      alert("Usuário ou senha incorretos! ❌");
    }
  };

  return (
    <div>
      <h2>Página de Login 🔐</h2>
      <form onSubmit={handleLogin}>
        <input 
          type="text" 
          placeholder="Usuário" 
          value={usuarioDigitado}
          onChange={(e) => setUsuarioDigitado(e.target.value)}
        />
        <br /><br />
        <input 
          type="password" 
          placeholder="Senha" 
          value={senhaDigitada}
          onChange={(e) => setSenhaDigitada(e.target.value)}
        />
        <br /><br />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default Login;
