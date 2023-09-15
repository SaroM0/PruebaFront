import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// Se importan modulos
import { StarshipModule } from './starship/starship.module';
import { HttpClientModule } from '@angular/common/http';
import { PeopleModule } from './people/people.module';

@NgModule({
  // se declara el componente principal de la aplicacion
  declarations: [
    AppComponent
  ],
  // Se importan modulos necesarios para la aplicacion
  imports: [
    BrowserModule,
    AppRoutingModule,
    StarshipModule,
    HttpClientModule,
    PeopleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
