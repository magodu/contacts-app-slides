//order: 2

import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import { HttpModule } from '@angular/http';
// Import routing file
import { routing } from "./app.routing";

import { AppComponent }         from './app.component';
import { ContactsListComponent } from './contacts-list.component';
import { ContactComponent } from './contact.component';
import { ContactService } from "./shared/contact.service";
import { USPhonePipe } from "./shared/us-phone.pipe";
 
// 15/ Add routing to NgModule imports metadata
@NgModule({
    imports: [                  
        BrowserModule,
        HttpModule,
        routing
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
