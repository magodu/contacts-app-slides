// This is the main app component

// Imports
import {Component} from '@angular/core'

// 10/ Component metadata
@Component({
    // This selector has to be unique in all application
    selector: 'my-app',
    // 5/ Inline template. Name var binding
    template: `
        <div>
            <h2>Hello {{name}}</h2>
        </div>
    `,
})


// 7/ Component class
export class AppComponent {
    name: string;                 // public var declaration. Type string

    constructor() {
        this.name = 'World!!'      // Initialize name var
    }
}