import { Component, OnInit } from '@angular/core';
import {ColorScssService} from '../../shared-member/service/color-scss.service';
import {ActivatedRoute} from '@angular/router';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-gym-inside-gym-page',
  templateUrl: './gym-inside-gym-page.component.html',
  styleUrls: ['./gym-inside-gym-page.component.scss']
})

export class GymInsideGymPageComponent implements OnInit {

  constructor(public colorPicker: ColorScssService, private route: ActivatedRoute,
              private title: Title) { }

  ngOnInit() {
    this.colorPicker.setColorScheme('color-5');
    this.title.setTitle(this.route.snapshot.data.title);
  }

}
