//order: 4

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Http, Response } from "@angular/http";
import 'rxjs/Rx';

import { Contact } from "./contact";


@Injectable()
export class ContactService {
    
    pushedDataEvent = new BehaviorSubject<Contact[]>([]);
    pushedDataEv$ = this.pushedDataEvent.asObservable();

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
        // 5/ Find object by id. We was using the id as index, but this is not a good practice if ids changes to other thing
        var emptyContact = new Contact(0, '', '', '', '', '', '', '', '', false);
       
        return _.find(this.contacts, function(contact) { 
            return contact.id == id;      // Notice that we are using the == operator. Avoid typing.
        }) || emptyContact;               // Return empty contact if id doesn't match
    }
    

    getNewId() {
        return this.contacts.length;
    }

    addContact(contact: Contact) {
        contact.id = this.getNewId();
        this.contacts.push(contact);
    }

    editContact(id: number, contact: Contact) {

        this.contacts[id] = contact;
    }
    
    pushData() {
        this.pushedDataEvent.next(this.contacts);
    }

}