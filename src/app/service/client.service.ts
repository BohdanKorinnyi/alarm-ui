import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ClientService {
  constructor(private http: HttpClient) {
  }

  getClients(page: number) {
    return this.http.get('/api/clients?page=' + page);
  }
}
