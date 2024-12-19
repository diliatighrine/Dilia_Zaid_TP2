import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule],

  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent { }
