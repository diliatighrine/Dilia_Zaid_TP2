import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService } from '../services/contact.service';
import {CommonModule} from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  selector: 'app-contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private contactService: ContactService) {
    this.contactForm = this.fb.group({
      prenom: ['', Validators.required],
      nom: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(18), Validators.max(120)]],
      hideEmail: [false],
      email: ['', [Validators.required, Validators.email]],
      commentaire: ['', Validators.required]
    });
  }

  onHideEmailChange() {
    const emailControl = this.contactForm.get('email');
    if (this.contactForm.get('hideEmail')?.value) {
      // Retirer la validation du champ email s'il est caché
      emailControl?.clearValidators();
      emailControl?.updateValueAndValidity();
    } else {
      emailControl?.setValidators([Validators.required, Validators.email]);
      emailControl?.updateValueAndValidity();
    }
  }

  envoyer() {
    if (this.contactForm.valid) {
      alert("Le formulaire est valide");
      this.contactService.setLastContact(this.contactForm.value);
      this.router.navigate(['/accueil']);
    }
  }
}
