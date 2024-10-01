import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ClarityModule } from '@clr/angular';
import { HeaderCabeceraComponent } from './header-cabecera/header-cabecera.component';
import { HeaderContenidoComponent } from './header-contenido/header-contenido.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpecificPredictionsComponent } from './specific-predictions/specific-predictions.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    HeaderCabeceraComponent,
    HeaderContenidoComponent,
    SpecificPredictionsComponent,
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    FormsModule,
    CommonModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
