class State {
  id: number;
  name: string;

  constructor(props?: { stateId: number; state: string }) {
    this.name = props?.state ?? "";
    this.id = props?.stateId ?? 0;
  }

  static fromJSON(json: Record<string, any>): State {
    const state = new State();
    state.name = json["state"];
    state.id = json["stateId"];
    return state;
  }

  toJSON(): Record<string, any> {
    const json: Record<string, any> = {};
    json["stateId"] = this.id;
    json["state"] = this.name;
    return json;
  }
}

export default State;
