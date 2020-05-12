import { Component } from '@angular/core';

import { AdminTranslationLoaderService } from '/../projects/admin/services/translation-loader.service';

import { locale as english } from './i18n/en';
import { locale as turkish } from './i18n/tr';

@Component({
  selector   : 'sample',
  templateUrl: './sample.component.html',
  styleUrls  : ['./sample.component.scss']
})
export class SampleComponent {
  /**
   * Constructor
   *
   * @param {AdminTranslationLoaderService} _fuseTranslationLoaderService
   */
  constructor(
    private fuseTranslationLoaderService: AdminTranslationLoaderService
  ) {
    this.fuseTranslationLoaderService.loadTranslations(english, turkish);
  }
}
