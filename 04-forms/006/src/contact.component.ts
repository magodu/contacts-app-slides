//order: 2

// Import OnDestroy life hook
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from "rxjs/Rx";
import { ActivatedRoute, Router } from "@angular/router";

import { Contact } from "./shared/contact";
import { ContactService } from "./shared/contact.service";
import { USPhonePipe } from "./shared/us-phone.pipe";

@Component({
    selector: 'app-contact',
    templateUrl: 'src/contact.component.html',
    styleUrls: ['src/contact.component.css']
})

// Add OnDestroy life hook
export class ContactComponent implements OnInit, OnDestroy {
    private subscription: Subscription;
    private contactIndex: number;
    contactSelected: Contact;
    

    constructor(private router: Router, private route: ActivatedRoute, private contactService: ContactService) {

        this.subscription = this.route.params.subscribe(
            (params: Object) => {

                this.contactIndex = params['id'];
                this.contactSelected = this.contactService.getContact(this.contactIndex);
            }
        );
    }

    ngOnInit() {
        this.contactService.pushedDataEv$.subscribe(
            (contacts: Contact[]) => {
                this.contactSelected = this.contactService.getContact(this.contactIndex);
            }
        );
    }
    
    onEdit() {
        this.router.navigate(['/edit', this.contactIndex]);
    }
    
    // 4/ This function is launched when the component disappears
    ngOnDestroy() {
        // It prevents memory leaks when component is destroyed
        this.subscription.unsubscribe();
    }

}