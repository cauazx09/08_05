import { Navigate } from 'react-router-dom';
import { useAuth } from '../components/AuthContext';

function RotaProtegida({ children }) {
  const { usuario } = useAuth();

  // Se o usuário não existir (for null), redireciona para a página de login
  // O "replace" serve para substituir o histórico, para o usuário não voltar pra página bloqueada ao clicar em "voltar" no navegador
  if (!usuario) {
    return <Navigate to="/login" replace />;
  }

  // Se estiver logado, renderiza o componente filho (o Dashboard)
  return children;


}

export default RotaProtegida;