//order: 1

// 24/ New Contact component. Basically we have moved the class code we had in AppComponent
// Import OnInit from @angular/core 
import { Component, OnInit } from '@angular/core';
// Import Contact class 
import { Contact } from "./shared/contact";


@Component({
    selector: 'app-contact',
    templateUrl: 'src/contact.component.html',
    styleUrls: ['src/contact.component.css']
})


// Add OnInit lifeCycle hook. This launch the ngOnInit function when the component starts
export class ContactComponent implements OnInit {
    // Public type Contact var
    contactSelected: Contact;

    ngOnInit() {
        // Initialize contactSelected var using Contact class
        this.contactSelected = new Contact(0, 'https://s25.postimg.org/tvthbvh4v/unknown.jpg', 'Mario', 'González', '200 Newbury St.', '02116', 'Boston', '5551234567', 'mariog@gmail.com', true);

    }

}