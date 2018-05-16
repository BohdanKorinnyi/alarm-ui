import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  clientClicked = true;
  statsClicked = false;
  callClicked = false;

  constructor(router: Router) {
    router.events.subscribe((url: any) => {
      if (url.url !== undefined && url.url === '/clients') {
        this.clientClicked = true;
        this.callClicked = false;
        this.statsClicked = false;
      } else if (url.url !== undefined && url.url === '/calls') {
        this.clientClicked = false;
        this.statsClicked = false;
        this.callClicked = true;
      } else if (url.url !== undefined && url.url === '/statistic') {
        this.clientClicked = false;
        this.callClicked = false;
        this.statsClicked = true;
      }
    });
  }

  ngOnInit() {
  }

}
