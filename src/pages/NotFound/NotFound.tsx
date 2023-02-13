import { useNavigate } from "react-router-dom";
import { Button } from "../../components";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="sgpm-p-not-found">
      <h1>Oops!</h1>
      <h2>404 - Página não encontrada</h2>
      <Button onClick={() => navigate("/", { replace: true })}>
        Voltar ao início
      </Button>
    </div>
  );
}

export default NotFound;
