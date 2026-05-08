// Você vai construir essa parte
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function ListaProdutos() {
  const [produtos, setProdutos] = useState([]);
  const [carregando, setCarregando] = useState(true);

    useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((resposta) => resposta.json())
      .then((dados) => {
        setProdutos(dados);
        setCarregando(false);
      });
  }, []);

    if (carregando) {
    return <p>Carregando produtos...</p>;
  }
  return (
    <div>
      <h1>Nossa Loja Virtual 🛍️</h1>
      { produtos.length === 0 ? (
        <p>Nenhum produto encontrado.</p>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
          {produtos.map((produto) => (
            <div key={produto.id} style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px', textAlign: 'center' }}>
              <img 
                src={produto.image} 
              alt={produto.title} 
              style={{ width: '100px', height: '100px', objectFit: 'contain' }} 
            />
            <h3 style={{ fontSize: '16px', height: '165px', overflow: 'hidden' }}>
              {produto.title}
            </h3>
            <p style={{ fontWeight: 'bold', color: '#2ecc71' }}>
              R$ {produto.price.toFixed(2)}
            </p>
            {/* Rota dinâmica passando o ID do produto */}
            <Link to={`/produtos/${produto.id}`} style={{ display: 'block', marginTop: '10px', textDecoration: 'none', background: '#3498db', color: '#fff', padding: '8px', borderRadius: '4px' }}>
              Ver Detalhes
            </Link>
          </div>
        ))}
      </div>
      )}
    </div>
  );
}

export default ListaProdutos;