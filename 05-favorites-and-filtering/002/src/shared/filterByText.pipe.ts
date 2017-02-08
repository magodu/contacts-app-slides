//order: 1

// 24/ Pipe for text filtering

import {Pipe, PipeTransform } from '@angular/core';


// 4/ Pipe metadata
@Pipe({
    name: 'filterByText',
    pure: false               // explanation: http://stackoverflow.com/questions/34456430/ngfor-doesnt-update-data-with-pipe-in-angular2
})

export class FilterByTextPipe implements PipeTransform {
    // 11/ The work of the pipe is handled in the tranform method with our pipe's class
    transform(items: any[], args?: any): any {
        if (items.length === 0 ) {
            return items;
        } 

        // 3/ Returns only those items which the typed text matches with the name or the surname
        return items.filter(item => { 
            return item.name.toLowerCase().indexOf(args.toLowerCase()) !== -1 || item.surname.toLowerCase().indexOf(args.toLowerCase()) !== -1;
        });

    }
}