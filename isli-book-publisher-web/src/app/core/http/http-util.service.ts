/**
 * Created by zhangle on 2017/3/20.
 */
import { Injectable, Optional } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { PromiseExt, IHttpService, RespObjModel } from './http.service';
import { HttpPBService } from './http-pb.service';
import { HttpMPRService } from './http-mpr.service';
import { HttpISLIService } from './http-isli.service';

@Injectable()
export class HttpUtilService implements IHttpService {

  constructor(
    private pbService: HttpPBService,
    private mprService: HttpMPRService,
    private isliService: HttpISLIService
  ) {
  }

  public getContextPath(): string {
    return this.pbService.getContextPath();
  }

  public mapperData(response): RespObjModel {
    return this.pbService.mapperData(response);
  }

  public error(error: any): PromiseExt<RespObjModel> {
    return this.pbService.error(error);
  }

  public get(url: string, pathParams?: any, queryParams?: any): PromiseExt<RespObjModel> {
    return this.pbService.get(url, pathParams, queryParams);
  }
  public delete(url: string, pathParams?: any, queryParams?: any): PromiseExt<RespObjModel> {
    return this.pbService.delete(url, pathParams, queryParams);
  }	
  public post(url: string, pathParams?: any, queryParams?: any, postData?: any): PromiseExt<RespObjModel> {
    return this.pbService.post(url, pathParams, queryParams, postData);
  }
  public put(url: string, pathParams?: any, queryParams?: any, putData?: any): PromiseExt<RespObjModel> {
    return this.pbService.put(url, pathParams, queryParams, putData);
  }
  public patch(url: string, pathParams?: any, queryParams?: any, patchData?: any): PromiseExt<RespObjModel> {
    return this.pbService.patch(url, pathParams, queryParams, patchData);
  }

  public mprGet(url: string, pathParams?: any, queryParams?: any): PromiseExt<RespObjModel> {
    return this.mprService.get(url, pathParams, queryParams);
  }

  public mprPost(url: string, pathParams?: any, queryParams?: any, postData?: any): PromiseExt<RespObjModel> {
    return this.mprService.post(url, pathParams, queryParams, postData);
  }

  public isliGet(url: string, pathParams?: any, queryParams?: any): PromiseExt<RespObjModel> {
    return this.isliService.get(url, pathParams, queryParams);
  }

  public isliPost(url: string, pathParams?: any, queryParams?: any, postData?: any): PromiseExt<RespObjModel> {
    return this.isliService.post(url, pathParams, queryParams, postData);
  }

}
