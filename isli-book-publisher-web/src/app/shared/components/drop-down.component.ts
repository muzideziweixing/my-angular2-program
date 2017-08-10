import { Component, Input, Output, EventEmitter, forwardRef, QueryList, ContentChildren, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { TemplateRefDirective } from '../directives';

@Component({
    selector: 'tl-drop-down',
    template: `
        <p-dropdown class="tl-drop-down" [disabled]="disabled" [style]="{'width':'inherit'}" [style.width]="" [style.color]="disabled?'#000':'#000'" [panelStyleClass]="panelStyleClass" [options]="dataValue" [(ngModel)]="selectedDropDown" [filter]="filter">
            <template let-obj pTemplate="item">
                <div class="ui-helper-clearfix" style="position: relative;height: 24px;">
                    <div class="label-list" style="font-size:14px; margin-top:4px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;" title={{obj.label}}>{{obj.label}}</div>
                </div>
            </template>
        </p-dropdown>
    `, 
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => DropDownComponent),
            multi: true
        }
    ]
})
export class DropDownComponent implements OnInit, ControlValueAccessor {
    @Output() selectedFn = new EventEmitter<any>();
    @Input() panelStyleClass:string;
    @Input() disabled:any;
    @Input() set dataValue(value) {
        this._dataValue = [];
        if (value) {
            let lableName = this.lableName ? this.lableName : 'id';
            let valueName = this.valueName ? this.valueName : 'id';
            for (let val of value) {
                if (value["value"]) {
                    this._dataValue.push(Object.assign({ label: ''+val[lableName]+'' }, val));
                } else {
                    this._dataValue.push(Object.assign({ label: ''+val[lableName]+'',value:''+ val[valueName]+'' }, val))
                }
            }
            this.filter = value.length > 10;    
        }
    };
    get dataValue() {
        return this._dataValue;
    }
    @Input() lableName: string='name';
    @Input() valueName: string='id';
    @ContentChildren(TemplateRefDirective) templates: QueryList<any>;

    onChange: Function = () => { };
    onTouched: Function = () => { };
    _selectedDropDown: string;
    oldValue:string;
    _dataValue: Array<any>;
    filter: boolean;

    constructor() {
    }
    ngOnInit() {
    }

    registerOnChange(fn) {
        this.onChange = fn;
    }

    registerOnTouched(fn) {
        this.onTouched = fn;
    }

    writeValue(value) {
        this.selectedDropDown = value;
    }

    set selectedDropDown(value) {
        this._selectedDropDown = value;
        if(this._selectedDropDown==this.oldValue){
            return;
        }
        this.oldValue=value;
        try{
            this.onChange(value);
        }catch(error){
            return;
        }

        this.selectedFn.emit(value);
    }

    get selectedDropDown() {
        return this._selectedDropDown;
    }
}
