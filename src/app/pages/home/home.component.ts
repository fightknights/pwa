import { Component, OnInit } from '@angular/core';
import { LogUpdateService } from '../../_services/log-update.service';
import { SwPush } from '@angular/service-worker';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  push_enabled: string;

  constructor(
    private logUpdate: LogUpdateService,
    private _push: SwPush
  ) { }

  ngOnInit() {

    this.push_enabled = ' ';

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
    if (this._push.isEnabled) {
      this.push_enabled = 'True';
    } else {
      this.push_enabled = 'False';
    }
  }

}
