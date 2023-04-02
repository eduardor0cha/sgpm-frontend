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
      crm: json.medic.crm,
      specialty: json.medic.specialty,
    });
    return medic;
  }

  toJSON(): Record<string, any> {
    var json: Record<string, any> = {};
    json = { ...json, ...super.toJSON() };
    json["medic"] = {
      crm: this.specialty,
      specialty: this.specialty,
    };
    return json;
  }
}

export default Medic;
