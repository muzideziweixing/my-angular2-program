/**
 * Created by zhangle on 2017/3/20.
 */
import { Injectable, Optional } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { HttpService, HttpServiceConfig, RespObjModel } from './http.service';
import {AppState} from '../app-state.service'

@Injectable()
export class HttpPBService extends HttpService{

  constructor(@Optional() config: HttpServiceConfig, http: Http, appState: AppState) {
    super(config, http, appState);
  }

  public mapperData(response): RespObjModel {
    let resp = response&&response.json()||{};
    return new RespObjModel(resp.return_code||null, resp.status||null, resp.data||null);
  }

}
