// 13/ AddEditContactComponent component

import { Component, OnInit } from '@angular/core';
import { Contact } from "./shared/contact";
import { Subscription } from "rxjs/Rx";
import { ActivatedRoute, Router } from "@angular/router";
import { ContactService } from "./shared/contact.service";


@Component({
    selector: 'app-add-edit-contact',
    templateUrl: 'src/add-edit-contact.component.html',
    styleUrls: ['src/add-edit-contact.component.css']
})

// All this code is very similar to other components
// 52/ We only introduce router.url and router.navigate
export class AddEditContactComponent implements OnInit {

    private subscription: Subscription;
    private contactIndex: number;
    private mode: string;
    contact: Contact;
    contacts: Contact[] = [];


    constructor(private router: Router,
        private route: ActivatedRoute,
        private contactService: ContactService) {}


    ngOnInit() {
        // router.url
        var path = this.router.url;
        this.mode = path.indexOf('edit') === -1 ? 'new' : 'edit';

        if (this.mode === 'edit') {
            this.subscription = this.route.params.subscribe(
                (params: any) => {
                    this.contactIndex = params['id'];
                    this.contact = this.contactService.getContact(this.contactIndex); 
                }
            );
        } else {
            this.contact = new Contact(0, '', '', '', '', '', '', '', '', false);
        }
    }


    onCancel() {
        // 5/ router.navigate
        if (this.mode === 'edit') {
            this.router.navigate(['/detail', this.contactIndex]);
        } else {
            this.router.navigate(['/']);
        }
    }

    onSubmit() {

        if (this.mode === 'edit') {

        } else {

        }
    }

}
