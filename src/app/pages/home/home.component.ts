import { Component, OnInit } from '@angular/core';
import { LogUpdateService } from '../../_services/log-update.service';
import { SwPush } from '@angular/service-worker';
import { environment } from '../../../environments/environment';

import { PushDataService } from '../../_services/push-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  push_enabled: string;
  push_key;
  endpoint: string;

  constructor(
    private logUpdate: LogUpdateService,
    private _push: SwPush,
    private data: PushDataService
  ) { }

  ngOnInit() {
    this.push_enabled = ' ';
    this.push_key = environment.push_public;
    this.endpoint = ' ';

    this.logUpdate.checkAvailable().subscribe(event => {
      console.log('current version is', event.current);
      console.log('available version is', event.available);
    });

    this.logUpdate.checkActivated().subscribe(event => {
      console.log('old version was', event.previous);
      console.log('new version is', event.current);
    });
  }

  subscribe() {
    if (!this._push.isEnabled) {
      this.push_enabled = 'False';

      console.log('Key: ', this.push_key);
    } else {
      this.push_enabled = 'True';

      console.log('Key: ', this.push_key);

      this._push.requestSubscription({serverPublicKey: this.push_key})
        .then(
          (sub) => {
            console.log(sub);
            this.endpoint = JSON.stringify(sub);
            this.data.saveSubscription(sub)
              .subscribe((res) => {
                console.log("worked");
                console.log(res);
              });
          });
    }
  }

}
