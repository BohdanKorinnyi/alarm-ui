import {Component, OnInit} from '@angular/core';
import {Client} from '../../../model/client';
import {ClientService} from '../../../service/client.service';
import {Pageable} from '../../../model/pageable';
import * as moment from 'moment';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  constructor(private clientService: ClientService) {
  }

  first = true;
  last = false;
  currentPage = 1;
  size = 20;
  totalPages = 1;
  DATE_PATTERN = 'DD/MM/YYYY HH:mm';
  clients: Client[];
  page: Pageable<Client>;

  ngOnInit() {
    this.clientService.getClients(0).subscribe((page: Pageable<Client>) => this.updatePageDetails(page));
  }

  loadPage(pageNumber: number) {
    this.clients = [];
    this.clientService.getClients(pageNumber).subscribe((page: Pageable<Client>) => this.updatePageDetails(page));
  }

  updatePageDetails(newPage: Pageable<Client>) {
    this.clients = newPage.content;
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
}
