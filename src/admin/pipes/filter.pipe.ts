import { Pipe, PipeTransform } from '@angular/core';
import { AdminUtils } from 'src/admin/utils';

@Pipe({name: 'filter'})
export class FilterPipe implements PipeTransform {
    /**
     * Transform
     *
     * @param {any[]} mainArr
     * @param {string} searchText
     * @param {string} property
     * @returns {any}
     */
    transform(mainArr: any[], searchText: string, property: string): any {
        return AdminUtils.filterArrayByString(mainArr, searchText);
    }
}
