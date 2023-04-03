import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../../components";
import { useCallback, useEffect, useState } from "react";
import { useAuth } from "../../contexts";

function ResetEmail() {
  const navigate = useNavigate();
  const [confirmed, setIsConfirmed] = useState<boolean>();
  const { resetEmail } = useAuth();
  const params = useParams();

  const confirmEmail = useCallback(async () => {
    if (!params.token) return;
    const response = await resetEmail(params.token);

    setIsConfirmed(response);
  }, [resetEmail, params.token]);

  useEffect(() => {
    confirmEmail();
  }, [params, confirmEmail]);

  if (confirmed === undefined) return null;

  return (
    <>
      {confirmed ? (
        <div className="sgpm-p-reset-email confirmed">
          <h1>Sucesso!</h1>
          <h2>E-mail confirmado.</h2>
          <Button onClick={() => navigate("/", { replace: true })}>
            Voltar ao início
          </Button>
        </div>
      ) : (
        <div className="sgpm-p-reset-email not-confirmed">
          <h1>Oops!</h1>
          <h2>Parece que o token passado é inválido ou já foi utilizado.</h2>
          <Button onClick={() => navigate("/", { replace: true })}>
            Voltar ao início
          </Button>
        </div>
      )}
    </>
  );
}

export default ResetEmail;
