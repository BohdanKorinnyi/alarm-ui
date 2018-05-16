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
  searchPhoneNumber: string;
  page: Pageable<Call>;
  first = true;
  last = false;
  currentPage = 1;
  size = 20;
  totalPages = 1;

  ngOnInit() {
    this.callService.getCallsByPage(0).subscribe((page: Pageable<Call>) => this.updatePageDetails(page));
  }

  loadPage(page: number) {
    this.calls = [];
    if (this.searchPhoneNumber === '') {
      this.callService.getCallsByPage(page).subscribe((newPage: Pageable<Call>) => this.updatePageDetails(newPage));
    } else {
      this.callService.getCallsByPhoneNumber(this.searchPhoneNumber, page)
        .subscribe((newPage: Pageable<Call>) => this.updatePageDetails(newPage));
    }
  }

  searchCallByNumber() {
    this.calls = [];
    if (this.searchPhoneNumber === '') {
      this.callService.getCallsByPage(0).subscribe((page: Pageable<Call>) => this.updatePageDetails(page));
    } else {
      this.callService.getCallsByPhoneNumber(this.searchPhoneNumber, 0)
        .subscribe((newPage: Pageable<Call>) => this.updatePageDetails(newPage));
    }
  }

  updatePageDetails(newPage: Pageable<Call>) {
    this.calls = newPage.content;
    this.page = newPage;
    this.first = newPage.first;
    this.size = newPage.size;
    this.last = newPage.last;
    this.currentPage = newPage.number;
    this.totalPages = newPage.totalPages;
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
