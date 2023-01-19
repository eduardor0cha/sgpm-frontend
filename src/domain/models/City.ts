class City {
  id: number;
  name: string;

  constructor(props?: { cityId: number; city: string }) {
    this.name = props?.city ?? "";
    this.id = props?.cityId ?? 0;
  }

  static fromJSON(json: Record<string, any>): City {
    const city = new City();
    city.name = json["city"];
    city.id = json["cityId"];
    return city;
  }

  toJSON(): Record<string, any> {
    const json: Record<string, any> = {};
    json["cityId"] = this.id;
    json["city"] = this.name;
    return json;
  }
}

export default City;
