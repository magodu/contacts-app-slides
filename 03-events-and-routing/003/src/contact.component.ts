//order: 3

import { Component, OnInit } from '@angular/core';

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

 
export class ContactComponent implements OnInit {
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
        // 8/ If we load or refresh a url like SERVER/detail/1 the component doesn't have the data in the beginning
        // The component have to wait until service load data and ContactsList component notify this fact.
        // 6/ When ContactsList component receives data and call to the service, this one emits an event
        // and this subscrition catch it.
        this.contactService.pushedDataEv$.subscribe(
            (contacts: Contact[]) => {
                this.contactSelected = this.contactService.getContact(this.contactIndex);
            }
        );
    }

}