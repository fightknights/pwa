import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class PushDataService {

  constructor(
    private http: HttpClient
  ) { }

  saveSubscription(endpoint) {
    return this.http.post('save-subscription/', endpoint);
  }

  sendNotification(title) {
    return this.http.post('/api/pushIt', title);
  }
}
