import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'; // Import important
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routes';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ListeComponent } from './liste/liste.component';
import { ContactComponent } from './contact/contact.component';
import { GestionComponent } from './gestion/gestion.component';
import { ContactService } from './services/contact.service';

@NgModule({
  declarations: [
    AppComponent,

    HomeComponent
  ],
  imports: [
    HeaderComponent,
    FooterComponent,
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule,
    ListeComponent,
    ContactComponent,
    GestionComponent
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
