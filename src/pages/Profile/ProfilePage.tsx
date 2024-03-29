import { useCallback, useEffect, useRef, useState } from "react";
import { Button, Form, Input, Select } from "../../components";
import { FormHandlers } from "../../components/Form/Form";
import { Modal } from "../../components/Modal";
import { ModalHandlers } from "../../components/Modal/Modal";
import { useAuth } from "../../contexts";
import { City, Medic } from "../../domain/models";
import {
  formatCPF,
  formatPhoneNumber,
  formatPostalCode,
  translateGender,
  translateRole,
} from "../../utils/FormatUtils";
import { useUser } from "../../contexts/UserContext";
import { jsonToFormData } from "../../utils/FormDataUtils";
import { useResources } from "../../contexts/ResourcesContext";
import { SelectOption } from "../../components/Select/Select";
import { getProfilePicUrl } from "../../utils/ProfileUtils";

function ProfilePage() {
  const psswdFormRef = useRef<FormHandlers>(null);
  const infosFormRef = useRef<FormHandlers>(null);
  const citySelectRef = useRef<HTMLInputElement>(null);
  const modalRef = useRef<ModalHandlers>(null);
  const { updatePassword, loggedUser } = useAuth();
  const { update } = useUser();
  const { states, fetchStates, fetchCitiesByStateId } = useResources();
  const [cities, setCities] = useState<City[]>();

  const handleChangePassword = useCallback(async () => {
    const values = psswdFormRef.current?.getValues();

    if (!values) return;

    const currentPsswd = values["current-password"];
    const newPsswd = values["new-password"];
    const confirmPsswd = values["confirm-password"];

    const response = await updatePassword(currentPsswd, newPsswd, confirmPsswd);
    if (!response) return;

    psswdFormRef.current?.clearValues();
  }, [updatePassword]);

  const handleSaveInfoUpdates = useCallback(async (): Promise<
    boolean | undefined
  > => {
    const values = infosFormRef.current?.getValues();

    if (!values) return;
    if (!loggedUser?.cpf) return;

    const response = await update(loggedUser?.cpf, jsonToFormData(values));
    return response;
  }, [update, loggedUser]);

  const fetchCities = useCallback(
    async (stateId?: number): Promise<void> => {
      if (stateId) {
        const response = await fetchCitiesByStateId(stateId);
        setCities(response);
      }
    },
    [fetchCitiesByStateId]
  );

  const handleSelectState = useCallback(
    (value: any) => {
      fetchCities(value);
      if (citySelectRef.current) {
        citySelectRef.current.value = "";
        citySelectRef.current.dispatchEvent(
          new Event("change", { bubbles: true })
        );
      }
    },
    [fetchCities]
  );

  useEffect(() => {
    if (!states) fetchStates();
    fetchCities(loggedUser?.address.state.id);
  }, [states, fetchStates, fetchCities, loggedUser?.address.state.id]);

  return (
    <>
      <div className="sgpm-p-profile">
        <div className="sgpm-p-profile__main-info sgpm-p-profile__info-container">
          <img
            src={getProfilePicUrl(loggedUser?.profilePic)}
            alt="Foto de perfil"
            className="sgpm-p-profile__profile-pic"
          />
          <div className="sgpm-p-profile__main-info--infos">
            <div>
              <h4>{loggedUser?.name}</h4>
              <span>{translateRole(loggedUser?.role)}</span>
              {loggedUser?.role === "medic" ? (
                <span>{`CRM ${(loggedUser as Medic).crm}`}</span>
              ) : null}
            </div>
            <div>
              <span>{loggedUser?.username}</span>
              <span>{loggedUser?.email}</span>
            </div>
          </div>
        </div>
        <div className="sgpm-p-profile__personal-data sgpm-p-profile__info-container">
          <h4>Dados pessoais</h4>
          <span>{`Sexo: ${translateGender(
            loggedUser?.gender
          )?.toLowerCase()}`}</span>
          <span>{`CPF: ${formatCPF(loggedUser?.cpf)}`}</span>
          <span>{`Telefone: ${formatPhoneNumber(
            loggedUser?.phoneNumber
          )}`}</span>
          <h4>Endereço</h4>
          <span>{`${loggedUser?.address.street}, ${loggedUser?.address.number}`}</span>
          <span>{`${loggedUser?.address.city.name} - ${
            loggedUser?.address.state.name
          }, ${formatPostalCode(loggedUser?.address.postalCode)}`}</span>
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
          <Form onSubmit={handleChangePassword} ref={psswdFormRef}>
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
      <Modal
        title="Atualizar dados"
        ref={modalRef}
        submitLabel="Salvar"
        onSubmit={handleSaveInfoUpdates}
      >
        <div className="sgpm-p-profile__modal-content">
          <span>
            Para atualizar ou corrigir outro dado, entre em contato com o
            suporte.
          </span>
          <Form ref={infosFormRef} method="put" encType="multipart/form-data">
            <div className="sgpm-p-profile__modal-content--fields">
              <div style={{ gridTemplateColumns: "1fr 1fr" }}>
                <Input
                  label="Nome de usuário"
                  type="text"
                  name="username"
                  placeholder={loggedUser?.username}
                />
                <Input
                  label="E-mail"
                  type="text"
                  name="email"
                  placeholder={loggedUser?.email}
                />
              </div>
              <div style={{ gridTemplateColumns: "3fr 4fr 3fr" }}>
                <Select
                  label="Estado"
                  defaultUnselectedOpt={true}
                  options={
                    states?.map(
                      (state) =>
                        ({ value: state.id, label: state.name } as SelectOption)
                    ) ?? []
                  }
                  initialOption={{
                    value: loggedUser?.address.state.id,
                    label: loggedUser?.address.state.name,
                  }}
                  onChange={handleSelectState}
                />
                <Select
                  label="Cidade"
                  defaultUnselectedOpt={true}
                  name="cityId"
                  options={
                    cities?.map(
                      (city) =>
                        ({ value: city.id, label: city.name } as SelectOption)
                    ) ?? []
                  }
                  initialOption={{
                    value: loggedUser?.address.city.id,
                    label: loggedUser?.address.city.name,
                  }}
                  ref={citySelectRef}
                />
                <Input
                  label="CEP"
                  type="text"
                  name="postalCode"
                  placeholder={loggedUser?.address.postalCode}
                />
              </div>
              <div style={{ gridTemplateColumns: "5fr 3fr 2fr" }}>
                <Input
                  label="Rua"
                  type="text"
                  name="street"
                  placeholder={loggedUser?.address.street}
                />
                <Input
                  label="Bairro"
                  type="text"
                  name="district"
                  placeholder={loggedUser?.address.district}
                />
                <Input
                  label="Número"
                  type="text"
                  name="number"
                  placeholder={loggedUser?.address.number}
                />
              </div>
            </div>
          </Form>
        </div>
      </Modal>
    </>
  );
}

export default ProfilePage;
