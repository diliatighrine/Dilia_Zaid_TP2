import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent {
  films = [
    { title: 'Film 1', img: 'assets/film1.jpg' },
    { title: 'Film 2', img: 'assets/film2.jpg' },
    { title: 'Film 3', img: 'assets/film3.jpg' },
    { title: 'Film 4', img: 'assets/film4.jpg' },
    { title: 'Film 5', img: 'assets/film5.jpg' },
  ];

  listeForm: FormGroup;
  selectedFilm: any = null;

  constructor(private fb: FormBuilder) {
    // On initialise le formulaire avec un champ filmName vide
    this.listeForm = this.fb.group({
      filmName: ['']
    });

    // On écoute les changements de valeur du champ filmName
    this.listeForm.get('filmName')?.valueChanges.subscribe(value => {
      this.selectedFilm = this.films.find(f => f.title === value) || null;
    });
  }
}
