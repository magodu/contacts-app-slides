//order: 5

import { Routes, RouterModule } from "@angular/router";

import { ContactComponent } from './contact.component';
// Import new component
import { AddEditContactComponent } from './add-edit-contact.component';

// 5/ Add routes for new component. In this case, two.
const APP_ROUTES: Routes = [
    { path: 'detail/:id', component: ContactComponent },
    { path: 'new', component: AddEditContactComponent },
    { path: 'edit/:id', component: AddEditContactComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
 