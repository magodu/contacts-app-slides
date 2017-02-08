//order: 4

// 30/ ContactsList component

import { Component, OnInit} from '@angular/core';
import { Contact } from "./shared/contact";
//  Import service
import { ContactService } from "./shared/contact.service";


@Component({
	selector: 'app-contacts-list',
	templateUrl: 'src/contacts-list.component.html',
	styleUrls: ['src/contacts-list.component.css']
})


// 15/ Use here the contact service
export class ContactsListComponent implements OnInit {

	contacts: Contact[] = [];

    // Add service to contructor
	constructor(private contactService: ContactService) { }


	ngOnInit() { 
	    // Call to service getContacts function to receive the data
        this.contacts = this.contactService.getContacts();
    
	}

}