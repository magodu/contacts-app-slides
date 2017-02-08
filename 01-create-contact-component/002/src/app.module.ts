// This is our main app module

// 4/ Imports
import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'

import { AppComponent }         from './app.component';

// 10/ Module metadata
@NgModule({
    imports: [                    // Import modules
        BrowserModule
    ],
    declarations: [               // Declare our components
        AppComponent            
    ],
    providers: [],                // Declare services
    bootstrap: [ AppComponent ]
})

// AppModule class
export class AppModule {}
