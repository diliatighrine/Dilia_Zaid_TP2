import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: [`
    .contact-button {
      position: fixed;
      bottom: 10px;
      right: 10px;
    }
  `]
})
export class FooterComponent { }
