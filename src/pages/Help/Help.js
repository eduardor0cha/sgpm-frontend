import React from 'react';

function Help() {
  return (
    <div className="sgpm-help">
      <div className="sgpm-help__faq">
        <h1>FAQ</h1>
        <ul className="sgpm-help__faq--list">
          <li>
            <spam>• </spam>
            <a href="">Como responder uma solicitação de troca?</a>
          </li>
          <li>
            <spam>• </spam>
            <a href="">Como proceder em um imprevisto?</a>
          </li>
          <li>
            <spam>• </spam>
            <a href="">
              Como alterar os dados postos inicialmente ao criar uma conta?
            </a>
          </li>
          <li>
            <spam>• </spam>
            <a href="">Como posso entrar em contato com outros médicos?</a>
          </li>
        </ul>
      </div>
      <div className="sgpm-help__contact">
        <h1>CONTATOS</h1>
        <ul className="sgpm-help__contact--list">
          <li>
            <spam>{`<Email do responsável>`}</spam>
          </li>
          <li>
            <spam>{`<Número para contato>`}</spam>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Help;
