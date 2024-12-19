import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'; // Import important
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routes';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListeComponent } from './liste/liste.component';
import { ContactComponent } from './contact/contact.component';
import { GestionComponent } from './gestion/gestion.component';
import { ContactService } from './services/contact.service';

// Import standalone components
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule,
    ListeComponent,
    ContactComponent,
    GestionComponent,
    HeaderComponent, // Add standalone component
    FooterComponent,
    AppComponent,
    // Add standalone component
  ],
  providers: [ContactService],
})
export class AppModule { }
