import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Http } from '@angular/http';

import { HttpService, HttpServiceConfig, HttpPBService, HttpMPRService,
   HttpISLIService, HttpUtilService, ImageFileUploader} from './http';
import { CommonFuncService, SubscriptionService } from './services';
import { AppState } from './app-state.service';
import { WindowRefService } from './window-ref.service';

export class HttpUtilConfig {
    constructor(public pb_context = '',
    public mpr_context = '',
                public isli_context = '') {
}
}

export function getHttpPBService(context: string) {
  return (http: Http, appState: AppState) => new HttpPBService({ context: context }, http, appState);
}

export function getHttpMPRService(context: string) {
  return (http: Http, appState: AppState) => new HttpMPRService({ context: context }, http, appState);
}

export function getHttpISLIService(context: string) {
  return (http: Http, appState: AppState) => new HttpISLIService({ context: context }, http, appState);
}

@NgModule({
	imports: [ CommonModule ]
})
export class CoreModule {

	constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
		if (parentModule) {
			throw new Error('CoreModule is already loaded. Import it in the AppModule only');
		}
	}

	static forRoot(config?: HttpUtilConfig): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
      //  { provide: HttpPBService, useFactory: getHttpPBService(config.pb_context), deps: [ Http ] },
      //  { provide: HttpMPRService, useFactory: getHttpMPRService(config.mpr_context), deps: [ Http ] },
     //   { provide: HttpISLIService, useFactory: getHttpISLIService(config.isli_context), deps: [ Http ] },
        HttpPBService,
        HttpMPRService,
        HttpISLIService,
        HttpUtilService,
        CommonFuncService,
        SubscriptionService,
        WindowRefService,
        AppState,
        ImageFileUploader
     ]
    };
  }

}
