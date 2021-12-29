import axios, { AxiosInstance } from 'axios';

export abstract class MinerstatApiClient {
  protected client: AxiosInstance;

  constructor(prefix: string) {
    this.client = axios.create({
      baseURL: `${process.env.MINERSTAT_BASE_URL}${prefix}`,
    });
  }
}
