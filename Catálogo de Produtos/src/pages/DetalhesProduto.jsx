import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Style from './DetalhesProduto.module.css';

function DetalhesProduto() {
  const { id } = useParams();
  const [produto, setProduto] = useState(null);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((dados) => {
        setProduto(dados);
        setCarregando(false);
      });
  }, [id]);

  if (carregando) return <div className={Style.pagina}><h2>Carregando...</h2></div>;
  if (!produto) return <div className={Style.pagina}><h2>Produto não encontrado!</h2></div>;

  return (
    <div className={Style.pagina}>
      <div className={Style.card}>
        {/* Imagem à Esquerda */}
        <img src={produto.image} alt={produto.title} className={Style.imagem} />
        
        {/* Escrita à Direita */}
        <div className={Style.info}>
          <span className={Style.categoria}>{produto.category}</span>
          <h1 className={Style.titulo}>{produto.title}</h1>
          <p className={Style.descricao}>{produto.description}</p>
          <span className={Style.preco}>R$ {produto.price.toFixed(2)}</span>

          <Link to="/" className={Style.botaoVoltar}>
            ← Voltar para a Loja
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DetalhesProduto;