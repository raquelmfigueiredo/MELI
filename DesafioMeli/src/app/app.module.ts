import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

import { PaginaVendedorComponent } from './pagina-vendedor/pagina-vendedor.component';
import { PaginaOperadorComponent } from './pagina-operador/pagina-operador.component';
import { PaginaInfoComponent } from './pagina-info/pagina-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    PaginaVendedorComponent,
    PaginaOperadorComponent,
    PaginaInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
