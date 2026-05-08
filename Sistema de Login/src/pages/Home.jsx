import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Página Inicial Pública 🏠</h1>
      <p>Qualquer pessoa pode ver esta página.</p>
      <Link to="/login">Ir para Login</Link> <br/><br/>
      <Link to="/dashboard">Tentar acessar o Dashboard (Secreto)</Link>
    </div>
  );
}

export default Home;