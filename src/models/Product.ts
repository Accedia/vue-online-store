import { ProductImage } from './ProductImage';

export class Product {
  public constructor(
    public id: string,
    public name: string,
    public regularPrice: number,
    public salePrice: number,
    public onSale: boolean,
    public images: ProductImage[],
    public customerReviewCount: number,
    public customerReviewAverage: number,
  ) {}
}
