import { User } from './User';

export class Review {
  constructor(
    public id: number,
    public title: string,
    public body: string,
    public rating: number,
    public user?: User,
  ) {}
}
