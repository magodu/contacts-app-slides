// 20/ Pipe for favorite filtering

import {Pipe, PipeTransform } from '@angular/core';

// 4/ Pipe metadata
@Pipe({
    name: 'filterByFavorite',
    pure: false                 // explanation: http://stackoverflow.com/questions/34456430/ngfor-doesnt-update-data-with-pipe-in-angular2
})

export class FilterByFavoritePipe implements PipeTransform {

    transform(items: any[], args?: any): any {
        if (items.length === 0 || args === false) {
            return items;
        } 
        
        // 3/ Returns only those items which its favorite property is true
        return items.filter(item => item.favorite === args );   

    }
}