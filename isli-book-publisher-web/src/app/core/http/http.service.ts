import { Injectable, Optional } from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { AppState } from '../app-state.service'

import 'rxjs/add/operator/toPromise';

const RESPCODE = {
  SUCCESS: '0',
  SYSTEM_ERROR: '11111111',
  SERVER_ERROR: '99999999'
}

export class PromiseExt<T> {

  private _befor;
  private _after;
  private _beginTime;
  constructor(private promise: Promise<T>) {
    this._beginTime = Date.now();
  }

  public befor(callback): PromiseExt<T> {
    this._befor = callback;
    return this;
  }

  public then(resolve, reject?): Promise<any> {
    if (this._befor) {
      this._befor();
    }
    return this.promise.then((respObj: any) => {
      let endTime = Date.now() - this._beginTime;
      //console.log('castTime: '+ endTime);
      respObj.castTime = endTime;
      let result = resolve && resolve(respObj);
      let resultAfter = this._after && this._after(result);
      return resultAfter || result;
    }, (error) => {
      let result = reject && reject(error);
      let resultAfter = this._after && this._after(result);
      return resultAfter || result;
    });
  }

  public after(callback): PromiseExt<T> {
    this._after = callback;
    return this;
  }

}

export class HttpServiceConfig {
  constructor(public context = '') { }
}

export class RespObjModel {
  constructor(
    public code: string,
    public mesg?: string,
    public data?: any,
    public queryParams?: any,
    public postData?: any,
    public castTime?: number
  ) { }

  public getData(deftObj?: any): any {
    return this.data || deftObj;
  }

  public getDatas(keyStr: string, deftObj?: any): any {
    return this.getValue(this.getData(), keyStr) || deftObj;
  }

  public success(): boolean {
    return this.code === RESPCODE.SUCCESS;
  }

  private getValue(obj, keyStr: string): any {
    if (obj && typeof (obj) === 'object' && keyStr) {
      let keys = keyStr.split('\.');
      let tempObj = null;
      for (let i = 0, j = keys.length; i < j; i++) {
        tempObj = (tempObj || obj)[keys[i]];
        if (!tempObj) return tempObj;
      }
      return tempObj;
    }
    return null;
  }
}

export interface IHttpService {

  getContextPath(): string;
  mapperData(response): RespObjModel;
  error(error: any): PromiseExt<RespObjModel>;
  get(url: string, pathParams?: any, queryParams?: any): PromiseExt<RespObjModel>;
  delete(url: string, pathParams?: any, queryParams?: any): PromiseExt<RespObjModel>;
  post(url: string, pathParams?: any, queryParams?: any, postData?: any): PromiseExt<RespObjModel>;
  put(url: string, pathParams?: any, queryParams?: any, putData?: any): PromiseExt<RespObjModel>;
  patch(url: string, pathParams?: any, queryParams?: any, patchData?: any): PromiseExt<RespObjModel>;
}

@Injectable()
export class HttpService implements IHttpService {

  private context = '';
  private headers = new Headers({ 'Content-Type': 'application/json; charset=utf-8' });
  private options = new RequestOptions({ headers: this.headers });

  constructor( @Optional() config: HttpServiceConfig, private http: Http, private appSate: AppState) {
    if (config) {
      this.context = config.context;
    }
  }

  public get(url: string, pathParams?: any, queryParams?: any): PromiseExt<RespObjModel> {
    return new PromiseExt<RespObjModel>(new Promise<RespObjModel>((resolve, reject) => {
      this.appSate.get('shop_id').then(shop_id => {
        pathParams = pathParams || {};
        pathParams.shop_id = shop_id;
        this.http.get(this.buildURL(this.context + url, pathParams, queryParams), this.options).toPromise().then(
          (response) => {
            let respObj = this.mapperData(response);
            respObj.queryParams = queryParams;
            if (respObj && respObj.success()) {
              resolve(respObj);
            } else {
              reject(respObj);
            }
          },
          (error) => {
            reject(this.handleHttpError(error));
          }
        ).catch(this.handleError);
      });
    }));
  }

  public delete(url: string, pathParams?: any, queryParams?: any): PromiseExt<RespObjModel> {
    return new PromiseExt<RespObjModel>(new Promise<RespObjModel>((resolve, reject) => {
      this.appSate.get('shop_id').then(shop_id => {
        pathParams = pathParams || {};
        pathParams.shop_id = shop_id;
        this.http.delete(this.buildURL(this.context + url, pathParams, queryParams), this.options).toPromise().then(
          (response) => {
            let respObj = this.mapperData(response);
            respObj.queryParams = queryParams;
            if (respObj && respObj.success()) {
              resolve(respObj);
            } else {
              reject(respObj);
            }
          },
          (error) => {
            reject(this.handleHttpError(error));
          }
        ).catch(this.handleError);
      });
    }));
  }

  public post(url: string, pathParams?: any, queryParams?: any, postData?: any): PromiseExt<RespObjModel> {
    return new PromiseExt<RespObjModel>(new Promise<RespObjModel>((resolve, reject) => {
      this.appSate.get('shop_id').then(shop_id => {
        pathParams = pathParams || {};
        pathParams.shop_id = shop_id;
        this.http.post(this.buildURL(this.context + url, pathParams, queryParams), JSON.stringify(postData), this.options).toPromise().then(
          (response) => {
            let respObj = this.mapperData(response);
            respObj.queryParams = queryParams;
            respObj.postData = postData;
            if (respObj && respObj.success()) {
              resolve(respObj);
            } else {
              reject(respObj);
            }
          },
          (error) => {
            reject(this.handleHttpError(error));
          }
        ).catch(this.handleError);
      });
    }));
  }

  public put(url: string, pathParams?: any, queryParams?: any, putData?: any): PromiseExt<RespObjModel> {
    return new PromiseExt<RespObjModel>(new Promise<RespObjModel>((resolve, reject) => {
      this.appSate.get('shop_id').then(shop_id => {
        pathParams = pathParams || {};
        pathParams.shop_id = shop_id;
        this.http.put(this.buildURL(this.context + url, pathParams, queryParams), JSON.stringify(putData), this.options).toPromise().then(
          (response) => {
            let respObj = this.mapperData(response);
            respObj.queryParams = queryParams;
            respObj.postData = putData;
            if (respObj && respObj.success()) {
              resolve(respObj);
            } else {
              reject(respObj);
            }
          },
          (error) => {
            reject(this.handleHttpError(error));
          }
        ).catch(this.handleError);
      });
    }));
  }

  public patch(url: string, pathParams?: any, queryParams?: any, patchData?: any): PromiseExt<RespObjModel> {
    return new PromiseExt<RespObjModel>(new Promise<RespObjModel>((resolve, reject) => {
      this.appSate.get('shop_id').then(shop_id => {
        pathParams = pathParams || {};
        pathParams.shop_id = shop_id;
        this.http.patch(this.buildURL(this.context + url, pathParams, queryParams), JSON.stringify(patchData), this.options).toPromise().then(
          (response) => {
            let respObj = this.mapperData(response);
            respObj.queryParams = queryParams;
            respObj.postData = patchData;
            if (respObj && respObj.success()) {
              resolve(respObj);
            } else {
              reject(respObj);
            }
          },
          (error) => {
            reject(this.handleHttpError(error));
          }
        ).catch(this.handleError);
      });
    }));
  }

  public error(error: any): PromiseExt<RespObjModel> {
    return new PromiseExt<RespObjModel>(this.handleError(error, RESPCODE.SYSTEM_ERROR));
  }

  public getContextPath() {
    return this.context;
  }

  private buildURL(url, pathParams, queryParams): string {
    let args = (this.formatArgs(queryParams) || '');
    url = (this.formatURL(url, pathParams) || '');
    return url && (url + (args && (url.indexOf('?') !== -1 ? '&' : '?') || '') + args);
  }

  /**
   * 格式化URL（填充URL的参数）api/users/:id => api/users/zhangle
   * @param url
   * @param pathParams
   * @returns {any}
     */
  private formatURL(url, pathParams): string {
    if (!url) return url;
    return url.replace(/\/:([a-zA-Z\-_]+)/g, function (match, p1) {
      return '/' + (pathParams && pathParams[p1] || '');
    });
  }

  /**
   * 格式化URL查询参数 {arg1: value1, arg2: value2} => arg1=value1&arg2=value2
   * @param args
   * @returns {string}
     */
  private formatArgs(args): string {
    let argsStr = '';
    if (typeof (args) === 'object') {
      for (let key in args) {
        argsStr += ((argsStr && '&') + key + '=' + (args[key] ? args[key] : (args[key] === 0) ? 0 : ''));
      }
    } else {
      argsStr = args && String(args) || '';
    }
    return argsStr;
  }

  public mapperData(response): RespObjModel {
    let resp = response && response.json() || {};
    return new RespObjModel(resp.ReturnCode || null, resp.Status || null, resp.Data || null);
  }

  private handleHttpError(error: any): RespObjModel {
    console.error('An http error occurred', error);
    return new RespObjModel(RESPCODE.SERVER_ERROR, error._body || error, error);
  }

  private handleError(error: any, code: string = RESPCODE.SERVER_ERROR): Promise<RespObjModel> {
    console.error('An error occurred', error);
    return Promise.reject(new RespObjModel(code, error.message || error, error));
  }

}
