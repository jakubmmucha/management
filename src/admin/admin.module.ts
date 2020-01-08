import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';

import { FUSE_CONFIG } from 'src/admin/services/config.service';

@NgModule()
export class AdminModule {
    constructor(@Optional() @SkipSelf() parentModule: AdminModule) {
        if ( parentModule ) {
            throw new Error('AdminModule is already loaded. Import it in the AppModule only!');
        }
    }

    static forRoot(config): ModuleWithProviders {
        return {
            ngModule : AdminModule,
            providers: [
                {
                    provide : FUSE_CONFIG,
                    useValue: config
                }
            ]
        };
    }
}
