import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PaginaInfoComponent } from './pagina-info/pagina-info.component';
import { PaginaOperadorComponent } from './pagina-operador/pagina-operador.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'produto/:id',
    component: PaginaOperadorComponent,
  },
  {
    path: 'pagina-info',
    component: PaginaInfoComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
