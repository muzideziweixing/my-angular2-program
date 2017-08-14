import { Injectable } from '@angular/core';
import { HttpPBService, PromiseExt, RespObjModel } from '../../core';

import { MessageDataService } from './message-data.service'
import { NewsTableListObj } from './message.model';

const NEWSTABLELISTURL = 'newsTableListURL';
const NEWSCHECKURL = 'newsCheckURL';
const NEWSDELETEURL = 'newsDeleteURL';

@Injectable()
export class MessageService {

    constructor(private http: MessageDataService) { }

    // 获取 - 列表
    getNewsTableListValue(page: number, rows: number, args?: NewsTableListObj) {
        return this.http.get(
            NEWSTABLELISTURL,
            null,
            Object.assign({ page: page, rows: rows }, args)
        ).then((respObj: any) => {
            return respObj;
        });
    }

    // 消息 - 已阅
    postNewsCheck(id) {
        return this.http.get(
            NEWSCHECKURL,
            { id: id },
            null
        )
    }

    // 消息 - 删除
    postNewsDelete(id) {
        return this.http.get(
            NEWSDELETEURL,
            { id: id },
            null
        )
    }
}