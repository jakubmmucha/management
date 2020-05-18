import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';



import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import {AuthService} from '../../../../_services/auth.service';
import {TokenStorageService} from '../../../../_services/token-storage.service';
import {fuseAnimations} from '../../../../../../../admin/animations';
import {AdminConfigService} from '../../../../../../../admin/services/config.service';

@Component({
    selector     : 'login',
    templateUrl  : './login.component.html',
    styleUrls    : ['./login.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
 export class LoginComponent implements OnInit {

      form: FormGroup;
      isLoggedIn = false;
      isLoginFailed = false;
      errorMessage = '';
      roles: string[] = [];
    constructor(
      private authService: AuthService,
      private tokenStorage: TokenStorageService,
      private adminConfigService: AdminConfigService
    ) {
      this.adminConfigService.config = {
        layout: {
          navbar: {
            hidden: true
          },
          toolbar: {
            hidden: true
          },

          footer: {
            hidden: true
          },
          sidepanel: {
            hidden: true
          }
        }
      };
    }
    ngOnInit(): void {
      this.initForm();
      if (this.tokenStorage.getToken())  {
          this.isLoggedIn = true;
          this.roles = this.tokenStorage.getUser().roles;
  }
}

  onSubmit() {
      this.authService.login(this.form.value).subscribe(
       data => {
         this.tokenStorage.saveToken(data.accessToken);
         this.tokenStorage.saveUser(data);
         this.isLoginFailed = false;
         this.isLoggedIn = true;
         this.roles = this.tokenStorage.getUser().roles;
         this.reloadPage();
    },
    err => {
      this.errorMessage = err.error.message;
      this.isLoginFailed = true;
    }
  );
}
  private initForm() {
    this.form = new FormGroup({
      username: new FormControl(null, [Validators.required, Validators.minLength(4)]),
      password: new FormControl(null, [Validators.required]),
    });
  }
reloadPage() {
  window.location.reload();
}
}
