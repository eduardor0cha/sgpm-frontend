import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth, useTheme } from "../../contexts";

function AccountMenu() {
  const auth = useAuth();
  const theme = useTheme();
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const handleClickOutside = (event: any) => {
    if (ref.current && !ref.current.contains(event.target)) {
      event.preventDefault();
      setCollapsed(false);
    }
  };

  useEffect(() => {
    if (collapsed) {
      document.addEventListener("click", handleClickOutside, true);
      return () => {
        document.removeEventListener("click", handleClickOutside, true);
      };
    }
  }, [theme.theme, collapsed]);

  return (
    <div className="sgpm-c-account-menu" ref={ref}>
      <img
        src={`${process.env.REACT_APP_API_URL}/files/${auth.loggedUser?.profilePic}`}
        alt="Foto de perfil"
        onClick={() => setCollapsed(!collapsed)}
        className="sgpm-c-account-menu__profile-pic"
      />
      {collapsed ? (
        <div className="sgpm-c-account-menu__card">
          <button
            className="sgpm-c-account-menu__item"
            onClick={() => navigate("/profile")}
          >
            Perfil
          </button>
          <button
            className="sgpm-c-account-menu__item"
            onClick={() => theme.toggleTheme()}
          >
            Alterar tema
          </button>
          <button
            className="sgpm-c-account-menu__item"
            onClick={() => navigate("/settings")}
          >
            Configurações
          </button>
          <button
            className="sgpm-c-account-menu__item"
            onClick={() => navigate("/help")}
          >
            Ajuda
          </button>
          <button
            className="sgpm-c-account-menu__item"
            onClick={() => auth.logout()}
          >
            Sair
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default AccountMenu;
