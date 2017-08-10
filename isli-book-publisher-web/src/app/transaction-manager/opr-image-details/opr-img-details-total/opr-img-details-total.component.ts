import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tl-opr-img-details-total',
  templateUrl: './opr-img-details-total.component.html',
  styleUrls: ['./opr-img-details-total.component.css']
})
export class OprImgDetailsTotalComponent implements OnInit {

  @Input() goodsInfo;
  @Input() totalInfo;

  constructor() { }

  ngOnInit() { }

}
