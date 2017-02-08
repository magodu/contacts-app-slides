import { Routes, RouterModule } from "@angular/router";
import { ContactComponent } from './contact.component';

const APP_ROUTES: Routes = [
    { path: 'detail/:id', component: ContactComponent }

];

export const routing = RouterModule.forRoot(APP_ROUTES);
