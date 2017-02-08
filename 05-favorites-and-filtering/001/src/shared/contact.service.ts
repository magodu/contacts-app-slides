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
        var index =  _.findIndex(this.contacts, function(contact) { 
            return contact.id == id; 
        });

        this.contacts[index] = contact;
    }
    
    pushData() {
        this.pushedData.emit(this.contacts);
    }

}