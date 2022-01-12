import React from 'react';
import '../../styles/main.scss';
import { Logo } from '../../assets/logo';
import { PersonIcon } from '../../assets/icons';
import { Input, Checkbox, Button } from '../../components';
import { useHistory } from 'react-router-dom';

function Login() {
  const history = useHistory();
  const handleClick = () => history.push('/calendar');

  return (
    <div className="sgpm-login">
      <div className="sgpm-login__frame-red">
        <div className="sgpm-login__logo">
          <Logo />
          <h1>SGPM</h1>
          <h>Sistema de Gerenciamento de Plantões Médicos</h>
        </div>
      </div>
      <div className="sgpm-login__frame-light-gray">
        <div className="sgpm-login__person-icon">
          <PersonIcon />
        </div>
        <div className="sgpm-login__email-input">
          <Input type="email" placeHolder="E-mail ou nome de usuário" />
        </div>
        <div className="sgpm-login__password-input">
          <Input type="pw" placeHolder="Senha" />
        </div>
        <div className="sgpm-login__checkbox">
          <Checkbox text="Lembre-se de mim" />
        </div>
        <div className="sgpm-login__login-button">
          <Button color="blue" text="Entrar" onClick={handleClick} />
        </div>
        <div className="sgpm-login__forgot-password">
          <a href="">Esqueceu a senha?</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
