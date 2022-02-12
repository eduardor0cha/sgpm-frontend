import { Button, ToggleSwitch } from '../../components';

function Settings() {
  return (
    <div className="sgpm-p-settings">
      <div className="sgpm-p-settings__notifications">
        <h1>NOTIFICAÇÕES</h1>
        <ul className="sgpm-p-settings__notifications--list">
          <li>
            <span>Receber notificações por e-mail</span>
            <ToggleSwitch />
          </li>
          <li>
            <span>Receber notificações de mensagens</span>
            <ToggleSwitch />
          </li>
          <li>
            <span>Receber notificações dos plantões</span>
            <ToggleSwitch />
          </li>
        </ul>
      </div>
      <div className="sgpm-p-settings__delete-account">
        <h1>EXCLUIR SUA CONTA</h1>
        <div>
          <span>
            Será enviado uma solicitação aos moderadores, e apenas se eles
            aprovarem a sua conta será deletada.
          </span>
          <span>
            Ao excluir a sua conta, você não terá mais acesso aos seus dados!
          </span>
        </div>
        <Button color="red" text="Excluir" />
      </div>
    </div>
  );
}

export default Settings;
