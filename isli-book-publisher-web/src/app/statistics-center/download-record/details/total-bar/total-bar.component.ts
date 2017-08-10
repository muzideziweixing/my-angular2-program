import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tl-total-bar',
  templateUrl: './total-bar.component.html',
  styleUrls: ['./total-bar.component.css']
})
export class TotalBarComponent implements OnInit {

  @Input() goodsInfo;

  constructor() { }

  ngOnInit() { }

}
