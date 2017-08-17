import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tl-details-proof',
  templateUrl: './details-proof.component.html',
  styleUrls: ['./details-proof.component.css']
})
export class DetailsProofComponent implements OnInit {

  @Input() settlementPrrofInfo;

  constructor() { }

  ngOnInit() {
  }
  
}
