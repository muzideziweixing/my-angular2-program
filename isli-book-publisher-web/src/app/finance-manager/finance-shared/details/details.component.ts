import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tl-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input() statementDetailsInfo;         // 明细 
  @Input() detailsName;

  constructor() { }

  ngOnInit() { }

}
