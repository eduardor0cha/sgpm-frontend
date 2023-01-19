import User from "./User";

class Medic extends User {
  crm: string;
  specialty: string;

  constructor(props?: { user: User; crm: string; specialty: string }) {
    super(props?.user);
    this.crm = props?.crm ?? "";
    this.specialty = props?.specialty ?? "";
  }

  static fromJSON(json: Record<string, any>): Medic {
    const medic = new Medic({
      user: User.fromJSON(json),
      crm: json["crm"],
      specialty: json["specialty"],
    });
    return medic;
  }

  toJSON(): Record<string, any> {
    const json: Record<string, any> = {};
    json.push(super.toJSON());
    json["medic"] = {
      crm: this.specialty,
      specialty: this.specialty,
    };
    return json;
  }
}

export default Medic;
