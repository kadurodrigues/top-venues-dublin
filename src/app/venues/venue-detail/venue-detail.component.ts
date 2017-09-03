import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VenuesService } from '../venues.service';

@Component({
  selector: 'top-venue-detail',
  templateUrl: './venue-detail.component.html',
  styleUrls: ['./venue-detail.component.css']
})

export class VenueDetailComponent implements OnInit {

  venue: Object[] = [];

  constructor(
    private venuesService: VenuesService, 
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.venuesService.getVenueDetail(this.route.snapshot.params['id'])
      .subscribe(data => this.venue = data)
  }
}
