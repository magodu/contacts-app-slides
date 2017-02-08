//order: 2

import { Injectable } from '@angular/core';
import { Contact } from "./contact";
// 2/ Import libraries for http communication
import { Http, Response } from "@angular/http";
import 'rxjs/Rx';


@Injectable()

export class ContactService {
    
    private contacts: Contact[] = [];

    // In real cases, this endpoint will be a server request
    private endpoint: string = 'src/shared/contacts.json';

    // Add Http to constructor
    constructor(private http: Http) { }

    // 13/ This function converts the JSON to our typed array list of Contacts var
    // 12/ If we assign directly the response we get an array list of Object, instead of Contact
    fillData(response: Response): Contact[] {
        let aux: Contact;
        let array: Contact[] = [];
        let data: any[] = response.json();

        for (let key in data) {
            aux = data[key];
            // Due to this, use the constructor to be sure that type are the expected
            array.push(new Contact(aux.id, aux.image, aux.name, aux.surname, aux.address, aux.zipcode, aux.city, aux.phone, aux.email, aux.favorite));
        }

        return array;
    }

    getContacts() {
        // If we only want to pass an Observable to the component
        //return this.http.get(this.endpoint).map((response: Response) => response.json());

        // 6/ In this case we need to store the data in our service
        return this.http.get(this.endpoint)
                .map((response: Response) =>  {

                    this.contacts = this.fillData(response);
                    return this.contacts;
                });
    }

    getContact(id: number) {
        return this.contacts[id];
    }

}