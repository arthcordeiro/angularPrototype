import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { NotfoundComponent } from './notfound/notfound.component';

const CURSOS_ROUTE: Routes = [
    {path: 'curso/:id', component: CursoDetalheComponent}
];

@NgModule({
  imports: [RouterModule.forChild(CURSOS_ROUTE)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
