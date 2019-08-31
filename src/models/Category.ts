export class Category {
  constructor(
    public id: string,
    public name: string,
    public subCategories: Category[],
  ) { }
}
