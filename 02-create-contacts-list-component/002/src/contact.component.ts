// 27/ Contact component

import { Component, OnInit } from '@angular/core';

import { Contact } from "./shared/contact";
// Import service
import { ContactService } from "./shared/contact.service";
import { USPhonePipe } from "./shared/us-phone.pipe";

@Component({
    selector: 'app-contact',
    templateUrl: 'src/contact.component.html',
    styleUrls: ['src/contact.component.css']
})

// 11/ Use here the contact service
export class ContactComponent implements OnInit {
    contactSelected: Contact;
    
    // Add service to contructor
    constructor(private contactService: ContactService) {}

    ngOnInit() {
        // Call to service getContact function to receive the the contact in fourth position
        this.contactSelected = this.contactService.getContact(3);
    }

}