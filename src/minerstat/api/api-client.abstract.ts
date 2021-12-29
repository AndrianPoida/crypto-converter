import axios, { AxiosInstance } from 'axios';

export abstract class MinerstatApiClient {
  protected client: AxiosInstance;

  constructor(prefix: string) {
    this.client = axios.create({
      baseURL: `${process.env.MINERSTAT_BASE_URL}${prefix}`,
    });
    this.setupErrorInterceptor();
  }

  private setupErrorInterceptor() {
    this.client.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        console.log(error);
      },
    );
  }
}
