import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CallStatus} from '../model/call';

@Injectable()
export class CallService {

  constructor(private http: HttpClient) {
  }

  getCallsByPage(page: number) {
    return this.http.get('/api/calls?page=' + page);
  }

  getCallsByPhoneNumber(number: string, page: number) {
    return this.http.get('/api/calls/numbers?page=' + page + '&number=' + number);
  }

  getGeneralCallStatistics() {
    return this.http.get('/api/stats/general');
  }

  getCountryCallStatistics() {
    return this.http.get('/api/stats/countries');
  }
}
