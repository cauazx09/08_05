import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ListaProdutos from './components/ListaProdutos';
import DetalhesProduto from './pages/DetalhesProduto';
import './App.module.css';

function App() {
  return (
    <BrowserRouter>
      <div style={{ padding: '20px', fontFamily: 'system-ui, sans-serif' }}>
        <Routes>
          {/* Rota da vitrine */}
          <Route path="/" element={<ListaProdutos />} />
          
          {/* Rota dinâmica para os detalhes do produto */}
          <Route path="/produtos/:id" element={<DetalhesProduto />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;