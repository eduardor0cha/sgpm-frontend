import { useCallback, useEffect, useRef, useState } from "react";
import { Button, Form, Input } from "../../components";
import { useAuth } from "../../contexts";
import { useNavigate, useParams } from "react-router-dom";
import { FormHandlers } from "../../components/Form/Form";

function ConfirmAccount() {
  const [isValid, setIsValid] = useState<boolean>();
  const { checkAccountConfirmationToken, confirmAccount, logout } = useAuth();
  const navigate = useNavigate();
  const params = useParams();
  const formRef = useRef<FormHandlers>(null);

  const confirmEmail = useCallback(async () => {
    if (!params.token) return;
    const response = await checkAccountConfirmationToken(params.token);
    setIsValid(response);
  }, [checkAccountConfirmationToken, params.token]);

  const handleConfirm = useCallback(async () => {
    if (!formRef.current || !params.token) return;

    const values = formRef.current.getValues();

    if (!values) return;

    const response = await confirmAccount(
      params.token,
      values["password"],
      values["confirm-password"]
    );

    if (!response) return;

    logout();
    navigate("/", { replace: true });
  }, [confirmAccount, navigate, params.token, logout]);

  useEffect(() => {
    confirmEmail();
  }, [params, confirmEmail]);

  if (isValid === undefined) return null;

  return (
    <>
      {isValid ? (
        <div className="sgpm-p-confirm-account">
          <h1>Quase lá</h1>
          <h2>Defina uma senha para a sua nova conta:</h2>
          <div className="sgpm-p-confirm-account__fields">
            <Form onSubmit={handleConfirm} ref={formRef}>
              <Input
                label="Senha"
                type="password"
                name="password"
                required={true}
              />
              <Input
                label="Repita a senha"
                type="password"
                name="confirm-password"
                required={true}
              />
              <Button
                type="submit"
                className="sgpm-p-confirm-account__confirm-button"
              >
                Confirmar
              </Button>
            </Form>
          </div>
        </div>
      ) : (
        <div className="sgpm-p-confirm-account error">
          <h1>Oops!</h1>
          <h2>
            Parece que a conta já foi confirmada ou o token passado é inválido.
          </h2>
          <Button onClick={() => navigate("/", { replace: true })}>
            Voltar ao início
          </Button>
        </div>
      )}
    </>
  );
}

export default ConfirmAccount;
