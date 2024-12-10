import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
    <app-footer></app-footer>
  `
})
export class AppComponent {
  get title(): "exo2-prenom1-prenom2" {
    return this._title;
  }

  set title(value: "exo2-prenom1-prenom2") {
    this._title = value;
  }

  private _title: 'exo2-prenom1-prenom2' = "exo2-prenom1-prenom2";
}
