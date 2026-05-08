import { createContext, useState, useContext } from 'react';

// 1. Criamos o contexto
const AuthContext = createContext();

// 2. Criamos o Provedor (Provider) que vai envolver nossa aplicação
export function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState(null); // null significa "não logado"

  // Função simulando um login bem sucedido
  const login = (dadosUsuario) => {
    setUsuario(dadosUsuario); // Agora o estado 'usuario' terá nome, login, etc.
  }; 

  // Função para sair
  const logout = () => {
    setUsuario(null);
  };

  return (
    <AuthContext.Provider value={{ usuario, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// 3. Hook customizado para facilitar o uso do contexto nos componentes
export function useAuth() {
  return useContext(AuthContext);
}
