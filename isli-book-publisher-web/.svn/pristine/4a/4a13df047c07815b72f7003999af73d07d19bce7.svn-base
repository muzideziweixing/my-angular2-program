import { Injectable} from '@angular/core';
import { Http} from '@angular/http';

@Injectable()
export class ImageFileUploader{

    constructor(private http:Http){

    }

    imageUpload(url:string, pathParam:any, image:File,channel="fmr", alias='image_file'){
		let form = new FormData();
        form.append(alias, image, image.name);
        form.append('channel', channel);
        return this.http.post(this.formatURL(url, pathParam), form).toPromise();
    }

     private formatURL(url, pathParams): string {
        if (!url)   return url;
        return url.replace(/\/:([a-zA-Z\-_]+)/g, function (match, p1) {
        return '/' + (pathParams && pathParams[p1] || '');
        });
  }
}