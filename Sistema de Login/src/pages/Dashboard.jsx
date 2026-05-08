import { useAuth } from '../components/AuthContext';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  // Pegamos os dados do usuário e a função de logout do contexto
  const { usuario, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/'); // Manda de volta pra Home ao sair
  };

  return (
    <div style={{ backgroundColor: '#e6ffe6', padding: '20px', borderRadius: '8px' }}>
      <h1>Painel de Controle 📊</h1>
      <p>Bem-vindo(a) à área secreta, <strong>{usuario.nome}</strong>!</p>
      <button onClick={handleLogout}>Sair (Logout)</button>
    </div>
  );
}

export default Dashboard;
