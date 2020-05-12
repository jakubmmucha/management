import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import {ADMIN_CONFIG} from './services/config.service';


@NgModule()
export class AdminModule {
    constructor(@Optional() @SkipSelf() parentModule: AdminModule) {
        if ( parentModule ) {
            throw new Error('AdminModule is already loaded. Import it in the AppModule only!');
        }
    }

    static forRoot(config): ModuleWithProviders<AdminModule> {
        return {
            ngModule : AdminModule,
            providers: [
                {
                    provide : ADMIN_CONFIG,
                    useValue: config
                }
            ]
        };
    }
}
