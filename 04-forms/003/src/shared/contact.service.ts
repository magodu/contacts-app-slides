//order: 4

import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response } from "@angular/http";
import 'rxjs/Rx';

import { Contact } from "./contact";


@Injectable()
export class ContactService {
    
    pushedData = new EventEmitter<Contact[]>();

    private contacts: Contact[] = [];
    private endpoint: string = 'src/shared/contacts.json';

    constructor(private http: Http) { }

    fillData(response: Response): Contact[] {
        let aux: Contact;
        let array: Contact[] = [];
        let data: any[] = response.json();

        for (let key in data) {
            aux = data[key];
            array.push(new Contact(aux.id, aux.image, aux.name, aux.surname, aux.address, aux.zipcode, aux.city, aux.phone, aux.email, aux.favorite));
        }

        return array;
    }

    getContacts() {
        return this.http.get(this.endpoint)
                .map((response: Response) =>  {

                    this.contacts = this.fillData(response);
                    return this.contacts;
                });
    }

    getContact(id: number) {
        return this.contacts[id];
    }
    
    // 17/ Service functions for edit and add contacts
    
    // 3/ Function to generate new ids. New contact id number will be the next position in the array 
    getNewId() {
        return this.contacts.length;
    }

    // 4/ addContact function
    addContact(contact: Contact) {
        contact.id = this.getNewId();
        this.contacts.push(contact);
    }

    // 4/ editContact function. It assigns edited object to its contacts array position
    editContact(id: number, contact: Contact) {

        this.contacts[id] = contact;
    }
    
    pushData() {
        this.pushedData.emit(this.contacts);
    }

}