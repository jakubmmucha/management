import { Component, OnInit } from '@angular/core';
import { ColorScssService } from '../shared-member/service/color-scss.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(public colorPicker: ColorScssService) {
  }

  ngOnInit() {
    this.colorPicker.setColorScheme('gym');
  }


}
