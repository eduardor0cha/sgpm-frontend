import { Button, Checkbox, Input } from "../../components";
import LogoRedLine from "../../assets/logo/LogoRedLine";
import LogoWhiteline from "../../assets/logo/LogoWhiteLine";
import { Form } from "../../components/Form";
import { useAuthContext } from "../../contexts/AuthContext/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const { loggedUser } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (loggedUser) navigate("/calendar", { replace: true });
  }, [loggedUser, navigate]);

  return (
    <div className="sgpm-p-login">
      <div className="sgpm-p-login__logo">
        <LogoRedLine className="sgpm-p-login__logo--red-line" />
        <LogoWhiteline className="sgpm-p-login__logo--white-line" />
        <h1>SGPM</h1>
        <h2>Sistema de Gerenciamento de Plantões Médicos</h2>
      </div>
      <div className="sgpm-p-login__form">
        <Form>
          <span className="sgpm-p-login__form-title">Login</span>
          <Input
            label="E-mail ou nome de usuário"
            type="text"
            required={true}
            className="sgpm-p-login__form-field"
          />
          <Input
            label="Senha"
            type="password"
            required={true}
            className="sgpm-p-login__form-field"
          />
          <div className="sgpm-p-login__remember-me__forgot-password">
            <Checkbox label="Lembre-se de mim" />
            <a
              className="sgpm-p-login__forgot-password"
              href="/forgot-password"
            >
              Esqueceu a senha?
            </a>
          </div>
          <Button
            label="Entrar"
            className="sgpm-p-login__submit-button"
            type="submit"
          />
        </Form>
      </div>
    </div>
  );
}

export default LoginPage;
