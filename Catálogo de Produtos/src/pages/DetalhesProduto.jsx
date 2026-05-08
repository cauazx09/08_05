import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function DetalhesProduto() {
  // 1. Pegamos o ID do produto da URL
  const { id } = useParams();

  // 2. Criamos os estados para guardar os dados da API
  const [produto, setProduto] = useState(null);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(false);

  // 2. Buscamos o produto específico na API
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((resposta) => {
        if (!resposta.ok) throw new Error('Produto não encontrado');
        return resposta.json();
      })
      .then((dados) => {
        // A API da FakeStore retorna null se o ID não existir, então validamos isso
        if (!dados) throw new Error('Produto inexistente');
        setProduto(dados);
        setCarregando(false);
      })
      .catch(() => {
        setErro(true);
        setCarregando(false);
      });
  }, [id]);

  // 3. Tratamento de telas (Carregando e Erro)
  if (carregando) return <h2>Buscando detalhes do produto... 📦</h2>;
  
  if (erro || !produto) {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h2>Produto não encontrado! 🚫</h2>
        <Link to="/">Voltar para a loja</Link>
      </div>
    );
  }

  // 4. Renderização do produto encontrado
  return (
    <div style={{ maxWidth: '800px', padding: '20px', margin: '0 auto', display: 'flex', gap: '30px', alignItems: 'flex-start' }}>
      <img 
        src={produto.image} 
        alt={produto.title} 
        style={{ width: '300px', border: '1px solid #ddd', padding: '20px', borderRadius: '8px' }} 
      />
      <div>
        <p style={{ textTransform: 'uppercase', color: '#888', fontSize: '12px' }}>{produto.category}</p>
        <h1 style={{ fontSize: '36px', color: '#333', lineHeight: '1'  }}>{produto.title}</h1>
        <h2 style={{ color: '#2ecc71', fontSize: '32px' }}>R$ {produto.price.toFixed(2)}</h2>
        <p style={{ lineHeight: '1.6', color: '#555' }}>{produto.description}</p>
        
        <p>⭐ <strong>Avaliação:</strong> {produto.rating?.rate} / 5 ({produto.rating?.count} avaliações)</p>

        <br />
        <Link to="/" style={{ textDecoration: 'none', background: '#333', color: '#fff', padding: '10px 20px', borderRadius: '4px' }}>
          ⬅ Voltar para a Loja
        </Link>
      </div>
    </div>
  );
}

export default DetalhesProduto;
