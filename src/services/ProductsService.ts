import Config from '@/config/config';
import axios, { AxiosPromise } from 'axios';
import { Product } from '@/models/Product';
import { Review } from '@/models/Review';

export class ProductsService {

  private baseUrl: string = Config.API_URL;
  private authHeaders: any;

  constructor(private token: string) {
    this.authHeaders = {
      headers: {
        Authorization: this.token,
      },
    };
  }

  public getAllProducts(): AxiosPromise<Product[]> {
    return axios.get<Product[]>(`${this.baseUrl}/products`, this.authHeaders);
  }

  public getByCategory(categoryId: string): AxiosPromise<Product[]> {
    return axios.get<Product[]>(`${this.baseUrl}/categories/${categoryId}/products`, this.authHeaders);
  }

  public getById(id: string): AxiosPromise<Product> {
    return axios.get<Product>(`${this.baseUrl}/products/${id}`, this.authHeaders);
  }

  public getMostViewed(): AxiosPromise<Product[]> {
    return axios.get<Product[]>(`${this.baseUrl}/products/most-viewed`, this.authHeaders);
  }

  public getDealsOfTheDay(): AxiosPromise<Product[]> {
    return axios.get<Product[]>(`${this.baseUrl}/products/deal-of-the-day`, this.authHeaders);
  }

  public getProductReviews(id: string): AxiosPromise<Review[]> {
    return axios.get<Review[]>(`${this.baseUrl}/products/${id}/reviews`, this.authHeaders);
  }

  public getAlsoViewed(id: string): AxiosPromise<Product[]> {
    return axios.get<Product[]>(`${this.baseUrl}/products/${id}/also-viewed`, this.authHeaders);
  }

  public search(query: string): AxiosPromise<Product[]> {
    return axios.get<Product[]>(`${this.baseUrl}/products?q=${query}`, this.authHeaders);
  }
}
