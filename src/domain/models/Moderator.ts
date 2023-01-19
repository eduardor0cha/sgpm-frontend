import User from "./User";

class Moderator extends User {
  constructor(user?: User) {
    super(user);
  }

  static fromJSON(json: Record<string, any>): Moderator {
    const moderator = new Moderator(User.fromJSON(json));
    return moderator;
  }

  toJSON(): Record<string, any> {
    return super.toJSON();
  }
}

export default Moderator;
