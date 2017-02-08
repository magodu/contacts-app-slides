//order: 2

import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'

import { AppComponent }         from './app.component';
import { ContactComponent } from './contact.component';
// Import USPhonePipe pipe.
import { USPhonePipe } from "./shared/us-phone.pipe";

// 12/ Declare USPhonePipe in the NgModule metadata
@NgModule({
    imports: [                  
        BrowserModule
    ],
    declarations: [              
        AppComponent,
        ContactComponent,
        USPhonePipe
    ],
    providers: [],
    bootstrap: [ AppComponent ]
})


export class AppModule {}
