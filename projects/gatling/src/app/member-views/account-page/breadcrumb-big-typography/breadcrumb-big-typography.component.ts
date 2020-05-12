import { Component, OnInit } from '@angular/core';

import {TokenStorageService} from '../../../../../../administration/src/app/_services/token-storage.service';
import {ColorScssService} from '../../../shared-member/service/color-scss.service';

@Component({
  selector: 'app-breadcrumb-big-typography',
  templateUrl: './breadcrumb-big-typography.component.html',
  styleUrls: ['./breadcrumb-big-typography.component.scss']
})
export class BreadcrumbBigTypographyComponent implements OnInit {

  constructor(public colorPicker: ColorScssService, private tokenStorageService: TokenStorageService) { }
  private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username: string;
  ngOnInit() {
    this.colorPicker.setColorScheme('inner-page');
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = user.username;
    }
  }

  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
