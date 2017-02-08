//order: 2

import {NgModule} from '@angular/core'   
import {BrowserModule} from '@angular/platform-browser'
import { HttpModule } from '@angular/http'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
 
import { routing } from "./app.routing";
import { AppComponent }         from './app.component';
import { ContactsListComponent } from './contacts-list.component';
import { ContactComponent } from './contact.component';
import { AddEditContactComponent } from './add-edit-contact.component';
import { ContactService } from "./shared/contact.service";
import { USPhonePipe } from "./shared/us-phone.pipe";
// Import FilterByTextPipe
import { FilterByTextPipe } from "./shared/filterByText.pipe";

// 19/ Add FilterByTextPipe to NgModule metadata
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        routing
    ],
    declarations: [              
        AppComponent,
        ContactsListComponent,
        ContactComponent,
        AddEditContactComponent,
        USPhonePipe,
        FilterByTextPipe
    ],
    providers: [ ContactService ],
    bootstrap: [ AppComponent ]
})


export class AppModule {}
