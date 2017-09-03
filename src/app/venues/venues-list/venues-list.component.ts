import { Component, OnInit, Input } from '@angular/core';
import { VenuesService } from '../venues.service';

@Component({
  selector: 'top-venues-list',
  templateUrl: './venues-list.component.html',
  styleUrls: ['./venues-list.component.css']
})

export class VenuesListComponent implements OnInit {

  listVenues: Object[] = [];

  constructor(private venuesService: VenuesService) { }

  ngOnInit() {
    this.venuesService.getTopVenues()
      .subscribe(data => this.listVenues = data);
  }
}
