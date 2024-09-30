import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HeaderCabeceraComponent } from './header-cabecera/header-cabecera.component';
import { HeaderContenidoComponent } from './header-contenido/header-contenido.component';
import { SpecificPredictionsComponent } from './specific-predictions/specific-predictions.component';
const routes: Routes = [
  { path: '', redirectTo: 'app-root', pathMatch: 'full' },
  { path: 'header', component: HeaderComponent, pathMatch: 'full' },
  { path: 'header-cabecera', component: HeaderCabeceraComponent, pathMatch: 'full' },
  { path: 'header-contenido', component: HeaderContenidoComponent, pathMatch: 'full' },
  { path: 'specific-predictions', component: SpecificPredictionsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

