import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VenuesService } from '../venues.service';

@Component({
  selector: 'top-venue-detail',
  templateUrl: './venue-detail.component.html'
})

export class VenueDetailComponent implements OnInit {

  venue: Object[] = [];

  constructor(
    private venuesService: VenuesService, 
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.venuesService.getVenueDetail(this.route.snapshot.params['id'])
      .subscribe(response => this.venue = response)
  }
}
