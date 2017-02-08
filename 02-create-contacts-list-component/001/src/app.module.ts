//order: 4

import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'

import { AppComponent }         from './app.component';
// Import ContactsListComponent
import { ContactsListComponent } from './contacts-list.component';
import { ContactComponent } from './contact.component';
import { USPhonePipe } from "./shared/us-phone.pipe";

// 13/ Declare ContactsListComponent
@NgModule({
    imports: [                  
        BrowserModule
    ],
    declarations: [              
        AppComponent,
        ContactsListComponent,
        ContactComponent,
        USPhonePipe
    ],
    providers: [],
    bootstrap: [ AppComponent ]
})


export class AppModule {}
