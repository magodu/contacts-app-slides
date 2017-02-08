import { Component, OnInit } from '@angular/core'; 

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
    private subscription: Subscription;
    private contactIndex: number;
    contactSelected: Contact;
    

    constructor(private router: Router, private route: ActivatedRoute, private contactService: ContactService) {

        this.subscription = this.route.params.subscribe(
            (params: Object) => {

                this.contactIndex = params['id'];
                this.contactSelected = this.contactService.getContact(this.contactIndex);
            }
        );
    }

    ngOnInit() { 
        this.contactService.pushedData.subscribe(
            (contacts: Contact[]) => {
                this.contactSelected = this.contactService.getContact(this.contactIndex);
            }
        );
    }

}