import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private lastContact: any = null;

  setLastContact(data: any) {
    this.lastContact = data;
  }

  getLastContact(): any {
    return this.lastContact;
  }
}
