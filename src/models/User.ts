import { UserName } from './UserName';
import { UserPicture } from './UserPicture';
import { Address } from './Address';

export class User {
  public constructor(
    public gender: string,
    public name: UserName,
    public picture: UserPicture,
    public location: Address,
  ) {}
}
