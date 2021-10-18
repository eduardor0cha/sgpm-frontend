import React from 'react';
import '../../styles/main.scss';
import { Logo } from '../../assets/logo';
import { PersonIcon } from '../../assets/icons';
import { Input, Checkbox, Button } from '../../components';

function Login() {
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
        <Checkbox text="Lembre-se de mim" />
        <Button />
      </div>
    </div>
  );
}

export default Login;
