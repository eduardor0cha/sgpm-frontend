function Help() {
  return (
    <div className="sgpm-p-help">
      <div className="sgpm-p-help__faq">
        <h1>FAQ</h1>
        <ul className="sgpm-p-help__faq--list">
          <li>
            <span>• </span>
            <a href=".">Como responder uma solicitação de troca?</a>
          </li>
          <li>
            <span>• </span>
            <a href=".">Como proceder em um imprevisto?</a>
          </li>
          <li>
            <span>• </span>
            <a href=".">
              Como alterar os dados postos inicialmente ao criar uma conta?
            </a>
          </li>
          <li>
            <span>• </span>
            <a href=".">Como posso entrar em contato com outros médicos?</a>
          </li>
        </ul>
      </div>
      <div className="sgpm-p-help__contact">
        <h1>CONTATOS</h1>
        <ul className="sgpm-p-help__contact--list">
          <li>
            <span>{`<Email do responsável>`}</span>
          </li>
          <li>
            <span>{`<Número para contato>`}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Help;
