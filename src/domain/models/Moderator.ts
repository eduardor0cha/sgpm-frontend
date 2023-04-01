import User from "./User";

class Moderator extends User {
  static fromJSON(json: Record<string, any>): Moderator {
    const moderator = new Moderator(User.fromJSON(json));
    return moderator;
  }

  toJSON(): Record<string, any> {
    return super.toJSON();
  }
}

export default Moderator;
