// Você vai construir essa parte
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Style from "./ListaProdutos.module.css";

function ListaProdutos() {
  const [produtos, setProdutos] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((resposta) => resposta.json())
      .then((dados) => {
        setProdutos(dados);
        setCarregando(false);
      });
  }, []);

  if (carregando) {
    return <p className={Style.semProdutos}>Carregando produtos...</p>;
  }

  return (
    <div className={Style.conteudo}>
      <h1 className={Style.titulo}>Minha Loja Virtual 🛍️</h1>

      {produtos.length === 0 ? (
        <p className={Style.semProdutos}>Nenhum produto encontrado.</p>
      ) : (
        <div className={Style.grid}>
          {produtos.map((produto) => (
            <div key={produto.id} className={Style.card}>
              <img
                src={produto.image}
                alt={produto.title}
                className={Style.imagem}
              />
              <h3 className={Style.nome}>{produto.title}</h3>
              <p className={Style.preco}>R$ {produto.price.toFixed(2)}</p>
              {/* Rota dinâmica passando o ID do produto */}
              <Link to={`/produtos/${produto.id}`} className={Style.botao}>
                Detalhes
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ListaProdutos;
