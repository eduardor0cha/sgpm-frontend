import { Button, Checkbox, Input } from "../../components";
import LogoRedLine from "../../assets/logo/LogoRedLine";
import LogoWhiteline from "../../assets/logo/LogoWhiteLine";
import { Form } from "../../components/Form";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FormHandlers } from "../../components/Form/Form";
import { useAuth } from "../../contexts";

function LoginPage() {
  const { loggedUser, login } = useAuth();
  const navigate = useNavigate();
  const formRef = useRef<FormHandlers>(null);

  useEffect(() => {
    if (loggedUser) {
      switch (loggedUser.role) {
        case "medic":
          navigate("/calendar", { replace: true });
          break;

        case "moderator":
          navigate("/general-calendar", { replace: true });
          break;
      }
    }

    const { login: loginLS } = JSON.parse(
      localStorage.getItem("userCredentials") ?? "{}"
    );

    if (loginLS)
      formRef.current?.setValues({ login: loginLS, rememberMe: true });
  }, [loggedUser, navigate]);

  async function handleSubmit() {
    const values = formRef.current?.getValues();
    if (!values) return;
    await login(values["login"], values["password"], values["rememberMe"]);
  }

  return (
    <div className="sgpm-p-login">
      <div className="sgpm-p-login__logo">
        <LogoRedLine className="sgpm-p-login__logo--red-line" />
        <LogoWhiteline className="sgpm-p-login__logo--white-line" />
        <h1>SGPM</h1>
        <h2>Sistema de Gerenciamento de Plantões Médicos</h2>
      </div>
      <div className="sgpm-p-login__form">
        <Form onSubmit={handleSubmit} ref={formRef}>
          <span className="sgpm-p-login__form-title">Login</span>
          <Input
            label="E-mail ou nome de usuário"
            type="text"
            required={true}
            className="sgpm-p-login__form-field"
            name="login"
          />
          <Input
            label="Senha"
            type="password"
            required={true}
            className="sgpm-p-login__form-field"
            name="password"
          />
          <div className="sgpm-p-login__remember-me__forgot-password">
            <Checkbox label="Lembre-se de mim" name="rememberMe" />
            <a
              className="sgpm-p-login__forgot-password"
              href="/forgot-password"
            >
              Esqueceu a senha?
            </a>
          </div>
          <Button className="sgpm-p-login__submit-button" type="submit">
            Entrar
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default LoginPage;
