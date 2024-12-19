import { Component } from '@angular/core';
import {RouterModule} from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule],
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
