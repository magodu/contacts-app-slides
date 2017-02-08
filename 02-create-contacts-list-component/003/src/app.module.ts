import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
// Import HTTP module
import { HttpModule } from '@angular/http';

import { AppComponent }         from './app.component';
import { ContactsListComponent } from './contacts-list.component';
import { ContactComponent } from './contact.component';
import { ContactService } from "./shared/contact.service";
import { USPhonePipe } from "./shared/us-phone.pipe";

// 17/ Add HttpModule to NgModule metadata
@NgModule({
    imports: [                  
        BrowserModule,
        HttpModule
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
