//order: 1

import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import { HttpModule } from '@angular/http';
// Import FormsModule
import { FormsModule } from '@angular/forms';
 
import { routing } from "./app.routing";
import { AppComponent }         from './app.component';
import { ContactsListComponent } from './contacts-list.component';
import { ContactComponent } from './contact.component';
import { AddEditContactComponent } from './add-edit-contact.component';
import { ContactService } from "./shared/contact.service";
import { USPhonePipe } from "./shared/us-phone.pipe";
 
 // 17/ Add FormsModule to NgModule metadata
@NgModule({
    imports: [                  
        BrowserModule,
        FormsModule,
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
