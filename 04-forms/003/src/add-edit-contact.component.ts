//order: 3

import { Component, OnInit } from '@angular/core';
import { Contact } from "./shared/contact";
import { Subscription } from "rxjs/Rx";
// Import NgForm to use template-driven forms
import { NgForm } from "@angular/forms";

import { ActivatedRoute, Router } from "@angular/router";
import { ContactService } from "./shared/contact.service";


@Component({
    selector: 'app-add-edit-contact',
    templateUrl: 'src/add-edit-contact.component.html',
    styleUrls: ['src/add-edit-contact.component.css']
})


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
        if (this.mode === 'edit') {
            this.router.navigate(['/detail', this.contactIndex]);
        } else {
            this.router.navigate(['/']);
        }
    }

    // 27/ Submit function. It receives a NgForm object
    onSubmit(form: NgForm) {
        // Note: Take a look to form object in the console to get familiar with it
        console.log('form', form);
        // Store the form values in a var 
        let newContact = form.value;

        // 8/ Edit mode
        if (this.mode === 'edit') {

            newContact.id = this.contact.id;
            // Call editContact service function 
            this.contactService.editContact(this.contactIndex, newContact);
            this.router.navigate(['/detail', this.contactIndex]);


        // 10/ New mode
        } else {

            if (!newContact.image) {          // If we don't type an image we'll put one by default
                newContact.image = 'https://s25.postimg.org/tvthbvh4v/unknown.jpg';
            }
            // Call addContact service function 
            this.contactService.addContact(newContact);
            this.router.navigate(['/']);

        }
    }

}
