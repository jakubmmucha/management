import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';

// Menu
export interface Menu {
  path?: string;
  title?: string;
  type?: string;
  icon?: string;
  badgeType?: string;
  badgeValue?: string;
  active?: boolean;
  megaMenu?: boolean;
  megaMenuType?: string; // small, medium, large
  bookmark?: boolean;
  children?: Menu[];
}

@Injectable({
  providedIn: 'root'
})
export class NavService {

  constructor() {   }

  MENUITEMS: Menu[] = [
    {
      title: 'Home', type: 'link', path: '',
    },
    {
      title: 'Inside the gym', type: 'link', path: '/inside',
    },
    {
      title: 'Shop', type: 'link', path: '/shop',
    },
    {
      title: 'Membership', type: 'link', path: '/membership',
    },
    {
      title: 'Our Blog', type: 'link', path: '/blog',
    },
    {
      title: 'Opening times ', type: 'link', path: '/times',
    }];
  // Array
	    items = new BehaviorSubject<Menu[]>(this.MENUITEMS);

}
