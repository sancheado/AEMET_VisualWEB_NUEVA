import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ClarityModule } from '@clr/angular';
import { HeaderCabeceraComponent } from './header-cabecera/header-cabecera.component';
import { HeaderContenidoComponent } from './header-contenido/header-contenido.component';
import { SpecificPredictionsComponent } from './specific-predictions/specific-predictions.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    HeaderCabeceraComponent,
    HeaderContenidoComponent,
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
