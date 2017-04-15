// Import ChangeDetectionStrategy and ChangeDetectorRef
import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

import { Contact } from "./shared/contact";
import { ContactService } from "./shared/contact.service";


// 6/ Add to component decorator metadata the changeDetection property
@Component({
	selector: 'app-contacts-list',
	templateUrl: 'src/contacts-list.component.html',
	styleUrls: ['src/contacts-list.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush
})


export class ContactsListComponent implements OnInit {
	contacts: Contact[] = [];

	constructor(private contactService: ContactService, private ref: ChangeDetectorRef) { }


	ngOnInit() { 
        this.contactService.getContacts().subscribe(
            data => {                                   // First argument is a function which runs on success
                this.contacts = data;

                this.contactService.pushData();
                // Force change detection. More info: https://blog.thoughtram.io/angular/2016/02/22/angular-2-change-detection-explained.html
                this.ref.markForCheck();
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