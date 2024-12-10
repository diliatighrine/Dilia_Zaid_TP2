import { Component } from '@angular/core';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html'
})
export class GestionComponent {
  lastContact: any;
  constructor(private contactService: ContactService) {
    this.lastContact = this.contactService.getLastContact();
  }
}
