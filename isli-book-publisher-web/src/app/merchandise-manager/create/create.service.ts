import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Router } from '@angular/router';
import { CreatMess } from './create';

@Injectable()
export class CreateService {

    private languagesURL = '/api/shops/languages';//语种信息

    constructor(private http: Http, private router: Router) { } 
}  


