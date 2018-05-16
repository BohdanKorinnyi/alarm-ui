import {Component, OnInit} from '@angular/core';
import {Client} from '../../../model/client';
import {Pageable} from '../../../model/pageable';
import {ClientService} from '../../../service/client.service';
import {CallService} from '../../../service/call.service';
import {CallStats} from '../../../model/stats';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {
  constructor(private clientService: ClientService, private callService: CallService) {
  }

  clients = 0;
  completedCalls = 0;
  cost = 0;

  ngOnInit() {
    this.clientService.getClients(0).subscribe((page: Pageable<Client>) => this.clients = page.totalElements);
    this.callService.getGeneralCallStatistics().subscribe((stats: CallStats) => {
      this.completedCalls = stats.count;
      this.cost = stats.sum;
    });
  }
}
