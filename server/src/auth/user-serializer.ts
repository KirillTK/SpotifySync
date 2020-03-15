import { Injectable } from "@nestjs/common";
import { PassportSerializer } from "@nestjs/passport";

@Injectable()
export class UserSerializer extends PassportSerializer {
  constructor() {
    super();
  }


  // todo need to write interface for spotify profile
  serializeUser(user: any, done: CallableFunction) {
    done(null, user);
  }

  async deserializeUser(user: any, done: CallableFunction) {
    return await Promise.resolve()
      .then(() => done(null, user))
      .catch(error => done(error));
  }
}