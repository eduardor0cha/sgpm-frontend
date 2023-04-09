import {
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useState,
} from "react";
import { City, State } from "../../domain/models";
import IBGEAPI from "../../services/IBGEAPI/IBGEAPI";

type Props = {
  fetchStates(): Promise<void>;
  fetchCitiesByStateId(stateId: number): Promise<City[]>;
  states: State[] | undefined;
};

export const ResourcesContext = createContext({} as Props);

export function useResources() {
  const context = useContext(ResourcesContext);
  return context;
}

function ResourcesProvider({ children }: PropsWithChildren) {
  const [states, setStates] = useState<State[]>();

  const fetchStates = useCallback(async () => {
    const response = await IBGEAPI.fetchStates();
    setStates(response);
  }, []);

  const fetchCitiesByStateId = useCallback(async (stateId: number) => {
    const cities = await IBGEAPI.fetchCitiesById(stateId);
    return cities;
  }, []);

  return (
    <ResourcesContext.Provider
      value={{ fetchStates, fetchCitiesByStateId, states }}
    >
      {children}
    </ResourcesContext.Provider>
  );
}

export default ResourcesProvider;
