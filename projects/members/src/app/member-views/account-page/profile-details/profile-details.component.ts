import {Component, OnInit} from '@angular/core';
import {Billing} from '../../../model/billing';
import {User} from '../../../model/user';
import {ColorScssService} from '../../../shared-member/service/color-scss.service';
import {AuthMembersService} from '../../../_services-members/auth-members.service';
import {TokenStorageMembersService} from '../../../_services-members/token-storage-members.service';
import {ProfileDetailsService} from './profile-details.service';



@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss']
})
export class ProfileDetailsComponent implements OnInit {
  public tabsPicker: any = 'personal';
  private isLoggedIn = false;
  billing = new Billing();
  private billingList: Billing[];
  currentUser:User= new User();
  private defaultBillingId: number;


  constructor(private displayBlock: ColorScssService, private authMembersService: AuthMembersService,
              private tokenStorageMembersService: TokenStorageMembersService, private profileDetailsService: ProfileDetailsService) {
  }
  ngOnInit() {
    if (this.tokenStorageMembersService.getToken())
    {
      this.isLoggedIn = true;
      this.currentUser= this.tokenStorageMembersService.getUser();
    }
  }
  onNewBilling() {
    this.profileDetailsService.newBilling(this.billing)
      .subscribe(data => {
        this.billing =new Billing();
        this.currentUser.billingList = this.billingList;
        console.log(data)
      } ,_error=>{
        console.log(_error);
    });
  };

  openGallery(val) {
    this.tabsPicker = val;
  }
}
