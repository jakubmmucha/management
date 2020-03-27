export interface AdminNavigationItem {
    id: string;
    title: string;
    type: 'item' | 'group' | 'collapsable';
    icon?: string;
    hidden?: boolean;
    url?: string;
    classes?: string;
    exactMatch?: boolean;
    externalUrl?: boolean;
    openInNewTab?: boolean;
    function?: any;
    badge?: {
        title?: string;
        bg?: string;
        fg?: string;
    };
    children?: AdminNavigationItem[];
}

export interface AdminNavigation extends AdminNavigationItem {
    children?: AdminNavigationItem[];
}
