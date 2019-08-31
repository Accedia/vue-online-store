import { User } from './User';

export class LoginResponse {
  public constructor(
    public user: User,
    public token: string,
  ) {}
}
