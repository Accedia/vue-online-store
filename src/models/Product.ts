import { ProductImage } from './ProductImage';
import { IncludedItem } from './IncludedItem';
import { Feature } from './Feature';

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
    public modelNumber: string,
    public includedItemList: IncludedItem[],
    public features: Feature,
  ) {}
}
