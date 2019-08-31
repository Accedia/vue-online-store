import Config from '@/config/config';
import axios, { AxiosPromise } from 'axios';
import { LoginResponse } from '@/models/LoginResponse';

export class AuthService {

  private baseUrl: string = Config.API_URL + '/login';

  public login(username: string, password: string): AxiosPromise<LoginResponse> {
    return axios.post<LoginResponse>(this.baseUrl, { username, password });
  }
}
