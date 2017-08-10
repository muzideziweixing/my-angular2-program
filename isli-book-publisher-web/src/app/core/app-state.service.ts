import { Injectable } from '@angular/core';
import {WindowRefService} from './window-ref.service'

export type InternalStateType = {
    [key: string]: any
};

@Injectable()
export class AppState {
    constructor(private windRef: WindowRefService){
        //this.set('shop_id', '9+9');
        this.get('shop_id');
    }

    public _state:InternalStateType = {};

    // already return a clone of the current state
    public get state() {
        return this._state = this._clone(this._state);
    }

    // never allow mutation
    public set state(value) {
        throw new Error('do not mutate the `.state` directly');
    }

    public get(prop?:any) {
        // use our state getter for the clone
        const state = this._state;
        if(state.hasOwnProperty(prop)){
            return Promise.resolve(null).then(()=>{
                return state[prop];
            });
        }else{
            let qtRef = this.windRef.qtRef;
            let userPromis = new Promise((resolve)=>{
                qtRef.then(qtRef => qtRef.user().then(user => {
                    let userInfo = JSON.parse(user);
                    console.dir(userInfo);
                    let shopId = (userInfo&&userInfo.mprshopid||'') + '+' + (userInfo&&userInfo.islishopid||'');
                    //let shopId='9+9';
                    this.set('user_info', userInfo);
                    this.set('shop_id', shopId);
                    resolve(shopId);
                    return user;
                 }));
            });
            return Promise.all([userPromis]).then((result)=>{
                return state[prop];
            });
        }
        //return state.hasOwnProperty(prop) ? state[prop] : state;
    }

    public getVal(prop:string){
        return this._state[prop];
    }

    public set(prop:string, value:any) {
        // internally mutate our state
        return this._state[prop] = value;
    }

    private _clone(object:InternalStateType) {
        // simple object clone
        return JSON.parse(JSON.stringify(object));
    }
}
