import { useNavigate } from "react-router-dom";
import { Button } from "../../components";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="sgpm-p-not-found">
      <h1>Oops!</h1>
      <h2>404 - Página não encontrada</h2>
      <Button
        label="Voltar ao início"
        onClick={() => navigate("/", { replace: true })}
      />
    </div>
  );
}

export default NotFound;
