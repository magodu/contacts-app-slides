// 24/ Import USPhonePipe in the component

import { Component, OnInit } from '@angular/core';

import { Contact } from "./shared/contact";
// Import USPhonePipe
import { USPhonePipe } from "./shared/us-phone.pipe";

@Component({
    selector: 'app-contact',
    templateUrl: 'src/contact.component.html',
    styleUrls: ['src/contact.component.css']
})


export class ContactComponent implements OnInit {
    contactSelected: Contact;

    ngOnInit() {

        this.contactSelected = new Contact(0, 'https://s25.postimg.org/tvthbvh4v/unknown.jpg', 'Mario', 'González', '200 Newbury St.', '02116', 'Boston', '5551234567', 'mariog@gmail.com', true);

    }

}