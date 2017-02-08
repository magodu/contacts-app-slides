import {Component} from '@angular/core'

// 7/ Changes in the Component metadata
@Component({
    selector: 'my-app',
    // Put the template in an external file 
    templateUrl: 'src/app.component.html',
    // Put the component CSS in an external file
    styleUrls: ['src/app.component.css']
})


// 4/ We don't need our name var anymore
export class AppComponent {

    constructor() {}
}