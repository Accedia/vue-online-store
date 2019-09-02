import Config from '@/config/config';
import axios, { AxiosPromise } from 'axios';
import { Category } from '@/models/Category';
import { Product } from '@/models/Product';

export class CategoriesService {

  private baseUrl: string = Config.API_URL + '/categories';
  private authHeaders: any;

  constructor(private token: string) {
    this.authHeaders = {
      headers: {
        Authorization: this.token,
      },
    };
  }

  public getCategories(): AxiosPromise<Category[]> {
    return axios.get<Category[]>(this.baseUrl, this.authHeaders);
  }

  public getSubCategories(categoryId: string): AxiosPromise<Category[]> {
    return axios.get<Category[]>(`${this.baseUrl}/${categoryId}/sub`, this.authHeaders);
  }

  public getMostViewedProducts(category: string): AxiosPromise<Product[]> {
    return axios.get<Product[]>(`${this.baseUrl}/${category}/most-viewed`, this.authHeaders);
  }

  public getDealsOfTheDay(category: string): AxiosPromise<Product[]> {
    return axios.get<Product[]>(`${this.baseUrl}/${category}/deal-of-the-day`, this.authHeaders);
  }
}
