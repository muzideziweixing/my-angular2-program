import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tl-details-overview',
  templateUrl: './details-overview.component.html',
  styleUrls: ['./details-overview.component.css']
})
export class DetailsOverviewComponent implements OnInit {

  @Input() detailsInfo;

  constructor() { }

  ngOnInit() {
  }

}
