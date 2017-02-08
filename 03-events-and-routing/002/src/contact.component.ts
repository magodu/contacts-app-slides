// Contact component needs to catch the id param passed in the url  
import { Component, OnInit } from '@angular/core';
// 2/ New imports
import { Subscription } from "rxjs/Rx";
import { ActivatedRoute, Router } from "@angular/router";

import { Contact } from "./shared/contact";
import { ContactService } from "./shared/contact.service";
import { USPhonePipe } from "./shared/us-phone.pipe";

@Component({
    selector: 'app-contact',
    templateUrl: 'src/contact.component.html',
    styleUrls: ['src/contact.component.css']
})

 
export class ContactComponent implements OnInit {
    // 2/ Declare two new vars
    private subscription: Subscription;
    private contactIndex: number;
    contactSelected: Contact;
    
    // Add Router and ActivatedRoute to constructor
    constructor(private router: Router, private route: ActivatedRoute, private contactService: ContactService) {
        // 9/ Subscription to get the param from url
        this.subscription = this.route.params.subscribe(
            (params: Object) => {
                // It returns an object with all params
                this.contactIndex = params['id'];

                // Get selected contact from service          
                this.contactSelected = this.contactService.getContact(this.contactIndex);
            }
        );
      
    }

    ngOnInit() { 
        console.log('this.contactIndex', this.contactIndex);
        console.log('this.contactSelected', this.contactSelected);
    }

}