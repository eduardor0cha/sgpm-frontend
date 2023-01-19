import Address from "./Address";

class User {
  cpf: string;
  username: string;
  email: string;
  name: string;
  gender: string;
  role: string;
  phoneNumber?: string;
  address: Address;
  profilePic?: string;
  createdAt?: Date;
  updatedAt?: Date;

  constructor(props?: {
    cpf: string;
    username: string;
    email: string;
    name: string;
    gender: string;
    role: string;
    phoneNumber?: string;
    address: Address;
    profilePic?: string;
    createdAt?: Date;
    updatedAt?: Date;
  }) {
    console.log(props);
    this.cpf = props?.cpf ?? "";
    this.username = props?.username ?? "";
    this.email = props?.email ?? "";
    this.name = props?.name ?? "";
    this.gender = props?.gender ?? "";
    this.role = props?.role ?? "";
    this.phoneNumber = props?.phoneNumber;
    this.address = props?.address ?? new Address();
    this.profilePic = props?.profilePic;
    this.createdAt = props?.createdAt;
    this.updatedAt = props?.updatedAt;
  }

  static fromJSON(json: Record<string, any>): User {
    const user = new User();
    user.cpf = json["cpf"];
    user.username = json["username"];
    user.email = json["email"];
    user.name = json["name"];
    user.gender = json["gender"];
    user.role = json["role"];
    user.phoneNumber = json["phoneNumber"];
    user.address = Address.fromJSON(json);
    user.profilePic = json["profilePic"];
    user.createdAt = json["createdAt"];
    user.updatedAt = json["updatedAt"];
    return user;
  }

  toJSON(): Record<string, any> {
    const json: Record<string, any> = {};
    json["cpf"] = this.cpf;
    json["username"] = this.username;
    json["email"] = this.email;
    json["name"] = this.name;
    json["gender"] = this.gender;
    json["role"] = this.role;
    json["phoneNumber"] = this.phoneNumber;
    json.push(this.address.toJSON());
    json["createdAt"] = this.createdAt;
    json["updatedAt"] = this.updatedAt;
    return json;
  }
}

export default User;
