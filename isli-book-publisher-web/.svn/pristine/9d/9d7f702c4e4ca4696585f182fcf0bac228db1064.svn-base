import { Injectable } from '@angular/core';

import { HttpPBService, PromiseExt, RespObjModel } from '../../core';
import { getArrData } from './data';

const NEWSTABLELISTURL = 'newsTableListURL';
const NEWSCHECKURL = 'newsCheckURL';
const NEWSDELETEURL = 'newsDeleteURL';

@Injectable()
export class MessageDataService {

    private newsTableListValue = getArrData();

    constructor() { }

    public get(url: string, pathParams?: any, queryParams?: any): PromiseExt<RespObjModel> {
        let data;
        if (url === NEWSTABLELISTURL) {
            data = this.getNewsList(queryParams);
        } else if (url === NEWSCHECKURL) {
            data = this.postNewsChecked();
        } else if (url === NEWSDELETEURL) {
            data = this.postNewsDelete();
        }
        return new PromiseExt(Promise.resolve(new RespObjModel('0', 'success', data)));
    }

    // 获取 - 列表
    public getNewsList(queryParams?: any) {
        let start = (queryParams.page - 1) * queryParams.rows;
        let end = start + queryParams.rows;
        let arr = this.getArr(this.newsTableListValue, queryParams);
        return { arr: arr.slice(start, end), length: arr.length };
    }

    // 消息 - 已阅
    postNewsChecked() {
        return { status: '1' };
    }

    // 消息 - 删除
    postNewsDelete() {
        return;
    }

    // 搜索查询函数
    private getArr(arr, args) {
        let newArr = [];
        let _args = [];
        if (args) {
            for (let arg in args) {
                for (let obj of arr) {
                    if (obj[arg] && obj[arg].substr(0, 4) === args[arg].substr(0, 4)) {
                        newArr.push(obj);
                    }
                }
                _args[_args.length] = arg;
            }
            if ((args.bookTitle === '' && !newArr.length) || _args.length <= 2) {
                return arr;
            }
            return newArr;
        }
        return arr;
    }
}


