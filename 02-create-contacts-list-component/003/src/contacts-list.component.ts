import { Component, OnInit} from '@angular/core';


import { Contact } from "./shared/contact";
import { ContactService } from "./shared/contact.service";

@Component({
	selector: 'app-contacts-list',
	templateUrl: 'src/contacts-list.component.html',
	styleUrls: ['src/contacts-list.component.css']
})

// 19/ Now the call to getContacts function is going to be an Observable 
export class ContactsListComponent implements OnInit {
	contacts: Contact[] = [];

	constructor(private contactService: ContactService) { }


	ngOnInit() { 
	    // 7/ Observable subscription 
        this.contactService.getContacts().subscribe(
            data => {                                   // First argument is a function which runs on success
                this.contacts = data;
            },       
            err => {},                                  // Second argument is a function which runs on error                           
            () => console.log('loading data: done')     // Third argument is a function which runs on completion
        );
    
	}

}
