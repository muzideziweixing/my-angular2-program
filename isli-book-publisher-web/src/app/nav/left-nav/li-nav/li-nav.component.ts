import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'tl-li-nav',
  templateUrl: './li-nav.component.html',
  styleUrls: ['./li-nav.component.css']
})
export class LiNavComponent implements OnInit {

  @Input() liInfo:any;

  constructor(private router:Router) { }

  ngOnInit() {
  }

  clickChange(){
    if(this.liInfo.selected&&this.liInfo.index==0){
      this.liInfo.selected=false;
      return;
    }
    this.router.navigateByUrl(this.liInfo.routerLink);
  }

}
