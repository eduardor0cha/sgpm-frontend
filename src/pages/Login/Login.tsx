import '../../styles/main.scss';

import { useState } from 'react';

import { PersonIcon } from '../../assets/icons';
import Logo from '../../assets/logo';
import { Input, Checkbox, Button } from '../../components';
import useAuth from '../../contexts/AuthProvider/useAuth';

function Login() {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const auth = useAuth();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (email || password) {
      auth.authenticate(email, password);
    }
  };

  return (
    <div className="sgpm-login">
      <div className="sgpm-login__frame-red">
        <div className="sgpm-login__logo">
          <Logo />
          <h1>SGPM</h1>
          <span>Sistema de Gerenciamento de Plantões Médicos</span>
        </div>
      </div>
      <div className="sgpm-login__frame-light-gray">
        <div className="sgpm-login__person-icon">
          <PersonIcon />
        </div>
        <div className="sgpm-login__email-input">
          <Input
            type="email"
            placeholder="E-mail ou nome de usuário"
            value={email}
            onChange={evt => setEmail(evt.target.value)}
          />
        </div>
        <div className="sgpm-login__password-input">
          <Input
            type="pw"
            placeholder="Senha"
            value={password}
            onChange={evt => setPassword(evt.target.value)}
          />
        </div>
        <div className="sgpm-login__checkbox">
          <Checkbox text="Lembre-se de mim" />
        </div>
        <div className="sgpm-login__login-button">
          <Button color="blue" text="Entrar" onClick={handleSubmit} />
        </div>
        <div className="sgpm-login__forgot-password">
          <a href=".">Esqueceu a senha?</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
