//order: 1

import { Injectable } from '@angular/core';

// Import BehaviorSubject
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Http, Response } from "@angular/http";
import 'rxjs/Rx';

import { Contact } from "./contact";


@Injectable()
export class ContactService {
    
    // 3/ Declare var of BehaviorSubject class.
    // Behavior Subject is a type of subject, a subject is a special type of observable,
    // so you can subscribe to messages like any other observable
    // More info about subjects: https://netbasal.com/understanding-subjects-in-rxjs-55102a190f3
    
    // It will send data of Contact type
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
        return this.contacts[id];
    }
    
    // 3/ This function communicates two sibling components 
    pushData() {
        this.pushedDataEvent.next(this.contacts);
    }

} 