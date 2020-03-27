import { Component, OnInit } from '@angular/core';
import { ColorScssService } from '../../shared-member/service/color-scss.service';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gym',
  templateUrl: './gym-home.component.html',
  styleUrls: ['./gym-home.component.scss']
})
export class GymComponent implements OnInit {

  constructor(public colorPicker: ColorScssService, private route: ActivatedRoute,
              private title: Title) { }

  ngOnInit() {
    this.colorPicker.setColorScheme('color-5');
    this.title.setTitle(this.route.snapshot.data.title);
  }

}
