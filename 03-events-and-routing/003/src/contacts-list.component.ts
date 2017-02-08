import { Component, OnInit} from '@angular/core';

import { Contact } from "./shared/contact";
import { ContactService } from "./shared/contact.service";

@Component({
	selector: 'app-contacts-list',
	templateUrl: 'src/contacts-list.component.html',
	styleUrls: ['src/contacts-list.component.css']
})


export class ContactsListComponent implements OnInit {
	contacts: Contact[] = [];

	constructor(private contactService: ContactService) { }


	ngOnInit() { 
        this.contactService.getContacts().subscribe(
            data => {                                   // First argument is a function which runs on success
                this.contacts = data;
                // 3/ When data is received, call to pushData service function
                // to send an event.
                this.contactService.pushData();
            },       
            err => {},                                  // Second argument is a function which runs on error                           
            () => console.log('loading data: done')     // Third argument is a function which runs on completion
        );
    
	}
	
	toggleFilters() {
        console.log('toggleFilters function called');
    }

    setFavorite() {
        console.log('setFavorite function called');
    }

}