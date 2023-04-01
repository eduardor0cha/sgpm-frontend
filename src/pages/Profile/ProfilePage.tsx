import { CSSProperties, useCallback, useRef } from "react";
import { Button, Form, Input } from "../../components";
import { FormHandlers } from "../../components/Form/Form";
import { Modal } from "../../components/Modal";
import { ModalHandlers } from "../../components/Modal/Modal";
import { useAuth } from "../../contexts";
import { Medic } from "../../domain/models";
import {
  formatCPF,
  formatPhoneNumber,
  formatPostalCode,
  translateGender,
  translateRole,
} from "../../utils/FormatUtils";

function ProfilePage() {
  const auth = useAuth();
  const formRef = useRef<FormHandlers>(null);
  const modalRef = useRef<ModalHandlers>(null);

  const handleChangePassword = useCallback(() => {
    const values = formRef.current?.getValues();

    if (!values) return;
  }, []);

  return (
    <>
      <div className="sgpm-p-profile">
        <div className="sgpm-p-profile__main-info sgpm-p-profile__info-container">
          <img
            src={`${process.env.REACT_APP_API_URL}/files/${auth.loggedUser?.profilePic}`}
            alt="Foto de perfil"
            className="sgpm-p-profile__profile-pic"
          />
          <div className="sgpm-p-profile__main-info--infos">
            <div>
              <h4>{auth.loggedUser?.name}</h4>
              <span>{translateRole(auth.loggedUser?.role)}</span>
              {auth.loggedUser?.role === "medic" ? (
                <span>{`CRM ${(auth.loggedUser as Medic).crm}`}</span>
              ) : null}
            </div>
            <div>
              <span>{auth.loggedUser?.username}</span>
              <span>{auth.loggedUser?.email}</span>
            </div>
          </div>
        </div>
        <div className="sgpm-p-profile__personal-data sgpm-p-profile__info-container">
          <h4>Dados pessoais</h4>
          <span>{`Sexo: ${translateGender(
            auth.loggedUser?.gender
          )?.toLowerCase()}`}</span>
          <span>{`CPF: ${formatCPF(auth.loggedUser?.cpf)}`}</span>
          <span>{`Telefone: ${formatPhoneNumber(
            auth.loggedUser?.phoneNumber
          )}`}</span>
          <h4>Endereço</h4>
          <span>{`${auth.loggedUser?.address.street}, ${auth.loggedUser?.address.number}`}</span>
          <span>{`${auth.loggedUser?.address.city.name} - ${
            auth.loggedUser?.address.state.name
          }, ${formatPostalCode(auth.loggedUser?.address.postalCode)}`}</span>
          <span>Brasil</span>
          <Button
            className="sgpm-p-profile__button"
            onClick={() => modalRef.current?.open()}
          >
            Atualizar dados
          </Button>
        </div>
        <div className="sgpm-p-profile__change-password sgpm-p-profile__info-container">
          <h4>Alterar senha</h4>
          <Form onSubmit={handleChangePassword} ref={formRef}>
            <div className="sgpm-p-profile__info-container-fields">
              <Input
                label="Senha atual"
                type="password"
                name="current-password"
                required={true}
              />
              <Input
                label="Nova senha"
                type="password"
                name="new-password"
                required={true}
              />
              <Input
                label="Repita a senha"
                type="password"
                name="confirm-password"
                required={true}
              />
            </div>
            <Button className="sgpm-p-profile__button" type="submit">
              Alterar senha
            </Button>
          </Form>
        </div>
      </div>
      <Modal title="Atualizar dados" ref={modalRef} submitLabel="Salvar">
        <div className="sgpm-p-profile__modal-content">
          <span>
            Para atualizar ou corrigir outro dado, entre em contato com o
            suporte.
          </span>
          <div className="sgpm-p-profile__modal-content--fields">
            <div style={{ gridTemplateColumns: "1fr 1fr" } as CSSProperties}>
              <Input label="Nome de usuário" type="text" />
              <Input label="E-mail" type="text" />
            </div>
            <div
              style={{ gridTemplateColumns: "3fr 4fr 3fr" } as CSSProperties}
            >
              <Input label="Estado" type="text" />
              <Input label="Cidade" type="text" />
              <Input label="CEP" type="text" />
            </div>
            <div
              style={{ gridTemplateColumns: "5fr 3fr 2fr" } as CSSProperties}
            >
              <Input label="Rua" type="text" />
              <Input label="Bairro" type="text" />
              <Input label="Número" type="text" />
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default ProfilePage;
