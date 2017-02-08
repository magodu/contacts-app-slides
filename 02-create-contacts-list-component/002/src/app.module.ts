//order: 2

import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'

import { AppComponent }         from './app.component';
import { ContactsListComponent } from './contacts-list.component';
import { ContactComponent } from './contact.component';
// Import ContactService
import { ContactService } from "./shared/contact.service";
import { USPhonePipe } from "./shared/us-phone.pipe";

// 14/ To add a service use providers property instead of declarations
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
    providers: [ ContactService ],
    bootstrap: [ AppComponent ]
})


export class AppModule {}
