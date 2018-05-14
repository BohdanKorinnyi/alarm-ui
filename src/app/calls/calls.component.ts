import {Component, OnInit} from '@angular/core';
import {Alarm, Call} from '../model/call';
import {CallService} from '../service/call.service';
import {Pageable} from '../model/pageable';
import * as moment from 'moment';

@Component({
  selector: 'app-calls',
  templateUrl: './calls.component.html',
  styleUrls: ['./calls.component.css']
})
export class CallsComponent implements OnInit {
  DATE_PATTERN = 'DD/MM/YYYY HH:mm';

  constructor(private callService: CallService) {
  }

  calls: Call[];
  currentPage: number;
  page: Pageable<Call>;
  first: true;
  last: true;

  ngOnInit() {
    this.callService.getCalls().subscribe((page: Pageable<Call>) => {
      this.calls = page.content;
      this.page = page;
    });
  }

  loadPage(page: number) {
    this.currentPage = page;
    this.callService.getCallsByPage(page).subscribe((newPage: Pageable<Call>) => {
      this.calls = newPage.content;
    });
  }

  formatDate(date: string) {
    return date != null ? moment(date).format(this.DATE_PATTERN) : '';
  }

  formatDuration(duration: number) {
    return duration != null ? duration : 0;
  }

  formatCost(cost: number) {
    return cost != null ? cost * -1 : 0;
  }

  formatLanguage(alarm: Alarm) {
    return alarm !== null ? alarm.language !== null ? alarm.language.name : '' : '';
  }
}
