//order: 2

// Import OnInit from @angular/core
import { Component, OnInit } from '@angular/core';
// Import Contact class
import { Contact } from "./shared/contact";

@Component({
    selector: 'my-app',
    templateUrl: 'src/app.component.html',
    styleUrls: ['src/app.component.css']
})


// Add OnInit lifeCycle hook. This launch the ngOnInit function when the component starts
export class AppComponent implements OnInit {
    // Public type Contact var
    contactSelected: Contact;

    ngOnInit() {
        // Initialize contactSelected var using Contact class
        this.contactSelected = new Contact(0, 'https://s25.postimg.org/tvthbvh4v/unknown.jpg', 'Mario', 'González', '200 Newbury St.', '02116', 'Boston', '5551234567', 'mariog@gmail.com', true);

    }

}