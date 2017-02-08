//order: 1

// New file app.routing.ts  
// 15/ Here we define the app routes 

// Import routing libraries
import { Routes, RouterModule } from "@angular/router";

// Import components which the router calls
import { ContactComponent } from './contact.component';

// 5/ define routes
// ContactComponent will be available and visible with routes that match the path property
const APP_ROUTES: Routes = [
    { path: 'detail/:id', component: ContactComponent }

];

// Export routing constant var. app.module  will use it  
export const routing = RouterModule.forRoot(APP_ROUTES);
