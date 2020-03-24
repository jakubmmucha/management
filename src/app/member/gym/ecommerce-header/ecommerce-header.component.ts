import { Component, OnInit } from '@angular/core';

import { Observable, of } from 'rxjs';
import {ColorScssService} from '../../../shared/service/color-scss.service';


@Component({
  selector: 'app-ecommerce-header',
  templateUrl: './ecommerce-header.component.html',
  styleUrls: ['./ecommerce-header.component.scss']
})
export class EcommerceHeaderComponent implements OnInit {

  constructor(public colorPicker: ColorScssService
  ) { }
  ngOnInit() {

  }

}
