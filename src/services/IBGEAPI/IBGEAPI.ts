import axios from "axios";
import City from "../../domain/models/City";
import { State } from "../../domain/models";

const APIClient = axios.create({
  baseURL: "http://servicodados.ibge.gov.br/api/v1",
});

class IBGEAPI {
  static async fetchStates(): Promise<State[]> {
    const response = await APIClient.get(`/localidades/estados?orderBy=nome`);

    if (response.data.length === 0) return [];

    return response.data.map((i: Record<string, any>) =>
      State.fromJSON({ stateId: i.id, state: i.nome })
    );
  }

  static async fetchCitiesById(stateId: number): Promise<City[]> {
    const response = await APIClient.get(
      `/localidades/estados/${stateId}/municipios?orderBy=nome`
    );

    if (response.data.length === 0) return [];

    return response.data.map((i: Record<string, any>) =>
      City.fromJSON({ cityId: i.id, city: i.nome })
    );
  }
}

export default IBGEAPI;
