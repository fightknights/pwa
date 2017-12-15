import {Component, HostListener, OnInit} from "@angular/core";

@Component({
  selector: 'app-listen',
  templateUrl: './listen.component.html',
  styleUrls: ['./listen.component.css']
})
export class ListenComponent implements OnInit {

  snackbar = false;

  @HostListener('window:online', ['$event'])
  onOnline(ev) {
    // do something meaningful with it
    console.log('The user came online');
    this.snackbar = false;
  }

  @HostListener('window:offline', ['$event'])
  onOffline(ev) {
    // do something meaningful with it
    console.log('The user went offline');
    this.snackbar = true;
  }

  constructor() { }

  ngOnInit() {

    console.log("Listener Init");

    if (navigator.onLine) {
      console.log("Online", navigator.onLine);
      this.snackbar = false;
    } else {
      console.log("Offline", navigator.onLine);
      this.snackbar = true;
    }

  }

}
