import { UserName } from './UserName';
import { UserPicture } from './UserPicture';
import { Address } from './Address';
import { UserLogin } from './UserLogin';

export class User {
  public constructor(
    public gender: string,
    public name: UserName,
    public picture: UserPicture,
    public location: Address,
    public login: UserLogin,
  ) {}
}
