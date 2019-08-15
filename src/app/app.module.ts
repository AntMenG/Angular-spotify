import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';
// RUTAS
import { ROUTES } from './app.routes';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
// Pipes
import { NoimagePipe } from './pipes/noimage.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    SearchComponent,
    ArtistaComponent,
    TarjetasComponent,
    LoadingComponent,
    NoimagePipe,
    DomseguroPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, { useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
