import City from "./City";
import State from "./State";

class Address {
  street?: string;
  number?: string;
  postalCode: string;
  district?: string;
  city: City;
  state: State;

  constructor(props?: {
    street: string;
    number: string;
    postalCode: string;
    district: string;
    city: City;
    state: State;
  }) {
    this.street = props?.street;
    this.number = props?.number;
    this.postalCode = props?.postalCode ?? "";
    this.district = props?.district;
    this.city = props?.city ?? new City();
    this.state = props?.state ?? new State();
  }

  static fromJSON(json: Record<string, any>): Address {
    const address = new Address();
    address.street = json["street"];
    address.number = json["number"];
    address.postalCode = json["postalCode"];
    address.district = json["district"];
    address.city = City.fromJSON(json);
    address.state = State.fromJSON(json);
    return address;
  }

  toJSON(): Record<string, any> {
    var json: Record<string, any> = {};
    json["street"] = this.street;
    json["number"] = this.number;
    json["postalCode"] = this.postalCode;
    json["district"] = this.district;
    json = { ...json, ...this.city.toJSON() };
    json = { ...json, ...this.state.toJSON() };
    return json;
  }
}

export default Address;
