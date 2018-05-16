import {Component, OnInit} from '@angular/core';
import {CallService} from '../service/call.service';
import {CountryStats} from '../model/stats';

@Component({
  selector: 'app-country-stats',
  templateUrl: './country-stats.component.html',
  styleUrls: ['./country-stats.component.css']
})
export class CountryStatsComponent implements OnInit {
  constructor(private callService: CallService) {
  }

  stats: CountryStats[];

  ngOnInit() {
    this.callService.getCountryCallStatistics().subscribe((stats: CountryStats[]) => this.stats = stats);
  }
}
