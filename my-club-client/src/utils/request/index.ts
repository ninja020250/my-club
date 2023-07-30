/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';
import CookieService, { COOKIE_KEYS } from '@/utils/cookie';
import _isEmpty from 'lodash/isEmpty';

class Request {
  protected instance: AxiosInstance;

  protected readonly baseURL: string;

  private TIME_OUT = 60000;

  public constructor(baseURL: string) {
    this.baseURL = baseURL;
    this.instance = axios.create({ baseURL, timeout: this.TIME_OUT });
    this.initializeRequestInterceptor();
    this.initializeResponseInterceptor();
  }

  private initializeRequestInterceptor = () => {
    this.instance.interceptors.request.use(this.handleRequest);
  };

  private initializeResponseInterceptor = () => {
    this.instance.interceptors.response.use((response: AxiosResponse<any>) => {
      return response;
    }, this.handleError);
  };

  private handleRequest = async (config: AxiosRequestConfig) => {
    const accessToken = CookieService.get(COOKIE_KEYS.ACCESS_TOKEN);

    if (accessToken && !config.headers!.Authorization) {
      config.headers!.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  };

  private handleError = async (error: AxiosError) => {
    const accessToken = CookieService.get(COOKIE_KEYS.ACCESS_TOKEN);
    if (error.response?.status === 401 && !_isEmpty(accessToken)) {
      //TODO: Handle Logout
    }

    throw error;
  };

  public parseJwt = (token: string) => {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      window
        .atob(base64)
        .split('')
        .map(function (c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join(''),
    );

    return JSON.parse(jsonPayload);
  };
}

export default Request;
