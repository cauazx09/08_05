import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from '../src/components/AuthContext';
import Home from '../src/pages/Home';
import Login from '../src/pages/Login';
import Dashboard from '../src/pages/Dashboard';
import RotaProtegida from '../src/components/RotaProtegida';

function App() {
  return (
    // O AuthProvider deve abraçar todas as rotas para que o status de login funcione globalmente
    <AuthProvider>
      <BrowserRouter>
        <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
          <Routes>
            {/* Rotas Públicas */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />

            {/* Rota Privada: Veja como o Dashboard vira "filho" da RotaProtegida */}
            <Route 
              path="/dashboard" 
              element={
                <RotaProtegida>
                  <Dashboard />
                </RotaProtegida>
              } 
            />
          </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;