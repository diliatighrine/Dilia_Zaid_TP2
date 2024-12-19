import { Component } from '@angular/core';
import { ContactService } from '../services/contact.service';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

@Component({
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  selector: 'app-gestion',
  templateUrl: './gestion.component.html'
})
export class GestionComponent {
  lastContact: any;
  constructor(private contactService: ContactService) {
    this.lastContact = this.contactService.getLastContact();
  }
}
