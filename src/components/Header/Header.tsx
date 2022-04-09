import { useEffect, useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';

import { Context } from '../../context/AuthContext';
import Button from '../Button';

function Header() {
  const [currentPage, setCurrentPage] = useState(String);
  const location = useLocation();
  const { handleLogout } = useContext(Context);

  function handleClick() {
    handleLogout();
  }

  useEffect(() => {
    switch (location.pathname) {
      case '/profile':
        setCurrentPage('Perfil');
        break;

      case '/calendar':
        setCurrentPage('Calendário');
        break;

      case '/presence':
        setCurrentPage('Confirmação de presença');
        break;

      case '/swap':
        setCurrentPage('Solicitação de troca');
        break;

      case '/chat':
        setCurrentPage('Chat');
        break;

      case '/notifications':
        setCurrentPage('Notificações');
        break;

      case '/settings':
        setCurrentPage('Configurações');
        break;

      case '/help':
        setCurrentPage('Ajuda');
        break;

      default:
        setCurrentPage('Página não encontrada');
        break;
    }
  }, [location.pathname]);

  return (
    <div className="sgpm-c-header">
      <h1>{currentPage}</h1>
      <Button color="blue" text="Sair" onClick={() => handleClick()} />
    </div>
  );
}

export default Header;
