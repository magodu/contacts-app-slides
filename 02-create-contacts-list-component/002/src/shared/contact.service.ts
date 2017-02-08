//order: 1

// Create a service

// Import Injectable
import { Injectable } from '@angular/core';
// Import Contact class
import { Contact } from "./contact";


// Services metadata 
@Injectable()

export class ContactService {
    // 11/ This var have the hardcoded data we had in ContactList component. 
    // 10/ Now it's harcoded here and we are going to request this info from components
    private contacts: Contact[] = [
        new Contact(0, 'https://s25.postimg.org/a4w78w133/cook.jpg', 'Tim', 'Cook', '1 Apple Bvd', '95014', 'Cupertino', '5556660987', 'tcook@icloud.com', true),
        new Contact(1, 'https://s25.postimg.org/rsj247hbz/zuckerberg.jpg', 'Mark', 'Zuckerberg', '1 Twin Peaks Blvd', '94131', 'San Francisco', '5551233456', 'mzuckerberg@facebook.com', false),
        new Contact(2, 'https://s25.postimg.org/sn0jt4iv3/musk.jpg', 'Elon', 'Musk', '10833 Vicenza Way', '90077', 'Bel-Air', '5556668347', 'emusk@tesla.com', false),
        new Contact(3, 'https://s25.postimg.org/kqg2kw7en/allen.jpg', 'Woody', 'Allen', '790 Grand St', '11211', 'New York', '5555692453', 'allenw@yahoo.com', true),
        new Contact(4, 'https://s25.postimg.org/9lw5wqfzz/scarlett.jpg', 'Scarlett', 'Johansson', '14 Rue de Trévise', '75009', 'Paris', '5553214444', 'scarlett_johansson@gmail.com', true),
        new Contact(5, 'https://s25.postimg.org/fljx0e0sf/portman.jpg', 'Natalie', 'Portman', '225 5th Ave', '10010', 'New York', '5553889879', 'portmann@gmail.com', false),
        new Contact(6, 'https://s25.postimg.org/57imnrz3z/ive.jpg', 'Jony', 'Ive', '1 Twin Peaks Blvd', '94135', 'San Francisco', '5559285649', 'jive@icloud.com', false),
        new Contact(7, 'https://s25.postimg.org/ch993ljzz/streep.jpg', 'Meryl', 'Streep', '12 Brinkerhoff St', '07304', 'New Jersey', '5559798465', 'meryl.streep@gmail.com', false)
    ];

    // Constructor. Empty for the moment
    constructor() { }

    // 3/ getContacts function. To return all contacts to ContactList component
    getContacts() {
        return this.contacts;
    }

    // 3/ getContact function. To return a contact to Contact component
    getContact(id: number) {
        return this.contacts[id];
    }

}