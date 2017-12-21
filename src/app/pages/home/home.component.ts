import { Component, OnInit } from '@angular/core';
import { LogUpdateService } from '../../_services/log-update.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private logUpdate: LogUpdateService) { }

  ngOnInit() {
    this.logUpdate.checkAvailable().subscribe(event => {
      console.log('current version is', event.current);
      console.log('available version is', event.available);
    });

    this.logUpdate.checkActivated().subscribe(event => {
      console.log('old version was', event.previous);
      console.log('new version is', event.current);
    });
  }

}
