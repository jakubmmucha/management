import {AdminNavigation} from '../../../../admin/types';


export const navigation: AdminNavigation[] = [
    {
        id       : 'applications',
        title    : 'Applications',
        type     : 'group',
        children : [
            {
                id       : 'sample',
                title    : 'Sample',
                type     : 'item',
                icon     : 'email',
                url      : '/sample',
                badge    : {
                    title    : '25',
                  translate: 'NAV.SAMPLE.BADGE',
                    bg       : '#F44336',
                    fg       : '#FFFFFF'
                }
            }
        ]
    }
];
