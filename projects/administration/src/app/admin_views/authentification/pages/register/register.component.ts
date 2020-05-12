import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/internal/operators';

import {AdminConfigService} from '/../projects/admin/services/config.service';
import {fuseAnimations} from '/../projects/admin/animations';
import {AuthService} from '../../../../_services/auth.service';

@Component({
    selector     : 'register',
    templateUrl  : './register.component.html',
    styleUrls    : ['./register.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class RegisterComponent implements OnInit, OnDestroy {
  form: FormGroup;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  submitted = false;

    // Private
    private unsubscribeAll: Subject<any>;

    constructor(
        private authService: AuthService,
        private adminConfigService: AdminConfigService,
    ) {
        // Configure the layout
        this.adminConfigService.config = {
            layout: {
                navbar   : {
                    hidden: true
                },
                toolbar  : {
                    hidden: true
                },
                footer   : {
                    hidden: true
                },
                sidepanel: {
                    hidden: true
                }
            }
        };
        // Set the private defaults
        this.unsubscribeAll = new Subject();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
      this.initForm();
}

  onSubmit() {
      this.submitted = true;
      this.authService.register(this.form.value).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.reloadPage();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
  private initForm() {
    this.form = new FormGroup({
      username: new FormControl(null, [ Validators.required, Validators.minLength(4)]),
      email: new FormControl( null, [Validators.required, Validators.email]),
      password: new FormControl(null, [ Validators.required, Validators.minLength(4)]),
      passwordConfirm: new FormControl (null, [ Validators.required, confirmPasswordValidator])
    });
    this.form.get('password').valueChanges
      .pipe(takeUntil(this.unsubscribeAll))
      .subscribe(() => {
        this.form.get('passwordConfirm').updateValueAndValidity();
      });
  }

    /**
     * On destroy
     */
    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this.unsubscribeAll.next();
        this.unsubscribeAll.complete();
    }
    reloadPage() {
      window.location.reload();
    }
}

/**
 * Confirm password validator
 *
 * @param {AbstractControl} control
 * @returns {ValidationErrors | null}
 */
export const confirmPasswordValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {

    if ( !control.parent || !control ) {
        return null;
    }

    const password = control.parent.get('password');
    const passwordConfirm = control.parent.get('passwordConfirm');

    if ( !password || !passwordConfirm ) {
        return null;
    }

    if ( passwordConfirm.value === '' ) {
        return null;
    }

    if ( password.value === passwordConfirm.value ) {
        return null;
    }

    return { passwordsNotMatching: true};
};
