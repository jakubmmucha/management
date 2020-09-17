import { Component, OnInit } from '@angular/core';


import {ColorScssService} from '../../../shared-member/service/color-scss.service';
import {TokenStorageMembersService} from '../../../_services-members/token-storage-members.service';

@Component({
  selector: 'app-breadcrumb-big-typography',
  templateUrl: './breadcrumb-big-typography.component.html',
  styleUrls: ['./breadcrumb-big-typography.component.scss']
})
export class BreadcrumbBigTypographyComponent implements OnInit {

  constructor(public colorPicker: ColorScssService, private tokenStorageService: TokenStorageMembersService) { }
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;

  ngOnInit() {
    this.colorPicker.setColorScheme('inner-page');
    if (this.tokenStorageService.getToken()) {
      this.isLoggedIn = true;
    }
  }
  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
