import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Injectable()
export class LogUpdateService {

  constructor(private updates: SwUpdate) { }

  checkAvailable() {
    return this.updates.available;
  }

  checkActivated() {
    return this.updates.activated;
  }
}
