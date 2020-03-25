import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import { AdminConfigService } from 'src/admin/services/config.service';
import { DOCUMENT } from '@angular/common';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {Platform} from '@angular/cdk/platform';




@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

}

