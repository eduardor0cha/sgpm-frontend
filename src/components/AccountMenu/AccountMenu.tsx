import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth, useTheme } from "../../contexts";
import { ToggleSwitch } from "../ToggleSwitch";
import { getProfilePicUrl } from "../../utils/ProfileUtils";

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

  const handleToggleTheme = (event: any) => {
    event.preventDefault();
    theme.toggleTheme();
  };

  const handleNavigate = (path: string) => {
    setCollapsed(false);
    navigate(path);
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
        src={getProfilePicUrl(auth.loggedUser?.profilePic)}
        alt="Foto de perfil"
        onClick={() => setCollapsed(!collapsed)}
        className="sgpm-c-account-menu__profile-pic"
      />
      {collapsed ? (
        <div className="sgpm-c-account-menu__card">
          <button
            className="sgpm-c-account-menu__item"
            onClick={() => handleNavigate("/profile")}
          >
            Perfil
          </button>
          <button
            className="sgpm-c-account-menu__item"
            onClick={(event) => handleToggleTheme(event)}
          >
            Tema escuro
            <ToggleSwitch initialValue={theme.theme === "dark"} />
          </button>
          <button
            className="sgpm-c-account-menu__item"
            onClick={() => handleNavigate("/settings")}
          >
            Configurações
          </button>
          <button
            className="sgpm-c-account-menu__item"
            onClick={() => handleNavigate("/help")}
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
