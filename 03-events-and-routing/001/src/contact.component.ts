import { Component, OnInit } from '@angular/core';

import { Contact } from "./shared/contact";
import { ContactService } from "./shared/contact.service";
import { USPhonePipe } from "./shared/us-phone.pipe";

@Component({
    selector: 'app-contact',
    templateUrl: 'src/contact.component.html',
    styleUrls: ['src/contact.component.css']
})


export class ContactComponent implements OnInit {
    contactSelected: Contact;
    
    constructor(private contactService: ContactService) {}

    ngOnInit() {
          
        // this.contactSelected = this.contactService.getContact(3);
        this.contactSelected = new Contact(3, 'https://s25.postimg.org/kqg2kw7en/allen.jpg', 'Woody', 'Allen', '790 Grand St', '11211', 'New York', '(555) 569 - 2453', 'allen@gmail.com', false);
    }

}