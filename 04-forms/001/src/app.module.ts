//order: 4

import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import { HttpModule } from '@angular/http';
 
import { routing } from "./app.routing";
import { AppComponent }         from './app.component';
import { ContactsListComponent } from './contacts-list.component';
import { ContactComponent } from './contact.component';
// Import new component
import { AddEditContactComponent } from './add-edit-contact.component';
import { ContactService } from "./shared/contact.service";
import { USPhonePipe } from "./shared/us-phone.pipe";
 
// 16/ Declare Component in NgModule metadata
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
        AddEditContactComponent,
        USPhonePipe
    ],
    providers: [ ContactService ],
    bootstrap: [ AppComponent ]
})


export class AppModule {}
