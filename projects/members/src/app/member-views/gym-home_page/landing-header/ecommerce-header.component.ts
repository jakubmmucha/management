import { Component, OnInit } from '@angular/core';
import {TokenStorageMembersService} from '../../../_services-members/token-storage-members.service';
import {ColorScssService} from '../../../shared-member/service/color-scss.service';



@Component({
  selector: 'app-ecommerce-header',
  templateUrl: './ecommerce-header.component.html',
  styleUrls: ['./ecommerce-header.component.scss']
})
export class EcommerceHeaderComponent implements OnInit {
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username: string;
  constructor(public colorPicker: ColorScssService, private tokenStorageService: TokenStorageMembersService) { }
  ngOnInit() {
    this.colorPicker.setColorScheme('inner-page');
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn===true) {

    }
  }
  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
