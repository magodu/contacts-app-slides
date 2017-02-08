//order: 2

import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
 
import { Contact } from "./shared/contact";
import { ContactService } from "./shared/contact.service";

@Component({
	selector: 'app-contacts-list',
	templateUrl: 'src/contacts-list.component.html',
	styleUrls: ['src/contacts-list.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush
})


export class ContactsListComponent implements OnInit {
	contacts: Contact[] = [];
  
  private showfilters: boolean = false;
  private textFilter: string = '';
  // Var to store the value we want to filter
  private favoriteFilter: boolean = false;
    
	constructor(private contactService: ContactService, private ref: ChangeDetectorRef) { }


	ngOnInit() { 
        this.contactService.getContacts().subscribe(
            data => {                                   // First argument is a function which runs on success
                this.contacts = data;

                this.contactService.pushData();
                this.ref.markForCheck();
            },       
            err => {},                                  // Second argument is a function which runs on error                           
            () => console.log('loading data: done')     // Third argument is a function which runs on completion
        );
        
        this.contactService.pushedData.subscribe(
            (contacts: Contact[]) => {
                this.contacts = contacts;

                this.ref.markForCheck();
            }
        );

	}
	
	toggleFilters() {
        this.showfilters = !this.showfilters;
        this.textFilter = '';
        // Set to false to show all results
        this.favoriteFilter = false;
    }

    setFavorite(id: number) {
        var idContact = _.findIndex(this.contacts, function(contact) { 
            return contact.id == id; 
        });

        this.contacts[idContact].favorite = !this.contacts[idContact].favorite;

        this.contactService.editContact(idContact, this.contacts[idContact]);
    }

}