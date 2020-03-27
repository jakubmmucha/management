import { AdminNavigation } from 'src/admin/types';

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
                    bg       : '#F44336',
                    fg       : '#FFFFFF'
                }
            }
        ]
    }
];
