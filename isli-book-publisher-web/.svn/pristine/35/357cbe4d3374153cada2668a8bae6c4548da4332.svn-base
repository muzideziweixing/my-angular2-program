import { Component, Input, Output, OnInit, EventEmitter, ViewContainerRef, AfterViewChecked } from '@angular/core';

export class PaginateObj {

  constructor(
    public page: number = 1,
    public totalRecords: number = 0,
    public rows: number = 10,
    public first: number = 0,
    public pageLinkSize: number = 5,
    public rowsPerPageOptions?: Array<number>,
    public style?: string,
    public styleClass?: string,
    public showQuickBtn?: boolean
  ) { }

}

@Component({
  selector: 'tl-paginator',
  template: `
    <div class="tl-paginator" *ngIf="+(paginateObj?.totalRecords) > 0">
      <p-paginator
        [totalRecords]="paginateObj?.totalRecords"
        [rows]="paginateObj?.rows"
        [first]="paginateObj?.first"
        [pageLinkSize]="paginateObj?.pageLinkSize"
        [rowsPerPageOptions]="paginateObj?.rowsPerPageOptions"
        [style]="paginateObj?.style"
        [styleClass]="paginateObj?.styleClass"
              (onPageChange)="paginate($event)">
      </p-paginator>
      <div class="tl-paginator-ext">
        <span>共{{pages}}页/共{{paginateObj.totalRecords}}条</span>
        <span>到第&nbsp;<input IntegerOnly type="text" (keyup.enter)="skip(pageNumInput)" #pageNumInput/>&nbsp;页&nbsp;
        <a href="javascript:void(0)" (click)="skip(pageNumInput)"><span class="page-skip">跳转</span></a></span>
      </div>
    </div>
    ` 

})
export class PaginatorComponent implements OnInit, AfterViewChecked {

  pageNum: string;

  @Input() paginateObj: PaginateObj;

  @Output() onPageChange: EventEmitter<any> = new EventEmitter();

  constructor(public viewContainer: ViewContainerRef) {}

  ngOnInit() {

  }

  ngAfterViewChecked() {
    if (!(this.paginateObj && this.paginateObj.showQuickBtn)) {
      const first = this.viewContainer.element.nativeElement.querySelector('.ui-paginator-first');
      const last = this.viewContainer.element.nativeElement.querySelector('.ui-paginator-last');
      if (first && first.style) {
        first.style.display = 'none';
      }
      if (last && last.style) {
        last.style.display = 'none';
      }
    }
  }

  get pages() {
    return Math.ceil(this.paginateObj.totalRecords/this.paginateObj.rows);
  }

  paginate(state) {
    if (state && state.page !== undefined) state.page += 1;
    this.onPageChange.emit(state);
  }

  skip(pageNumInput) {
    let num = pageNumInput ? Number.parseInt(pageNumInput.value) : 0;
    if (!num || num === this.paginateObj.page || num > this.pages) {
      setTimeout(() => {
        pageNumInput.focus();
      }, 0);
      return;
    }
    console.log(pageNumInput);
    pageNumInput.value = null;
    this.onPageChange.emit({
      page: num,
      first: this.paginateObj.rows * (num - 1),
      rows: this.paginateObj.rows,
      pageCount: this.pages
    });
  }

}
