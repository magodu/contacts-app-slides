// order: 5

// This procces will be automatic if the component is created with Angular CLI:
// 8/ Use "ng generate component contact"  or  "ng g c contact"

import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'

import { AppComponent }         from './app.component';
// Import contact component.
import { ContactComponent } from './contact.component';

// 11/ Declare ContactComponent in the NgModule metadata
@NgModule({
    imports: [                  
        BrowserModule
    ],
    declarations: [              
        AppComponent,
        ContactComponent
    ],
    providers: [],
    bootstrap: [ AppComponent ]
})


export class AppModule {}
