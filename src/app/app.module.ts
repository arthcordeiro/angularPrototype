import { CursosRoutingModule } from './home/content-cards/cursos.routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CursoDetalheService } from './curso-detalhe.service';
import { AppRoutingModule, routing } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuToolbarComponent } from './home/menu-toolbar/menu-toolbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { ContentCardsComponent } from './home/content-cards/content-cards.component';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { CursoComponent } from './home/content-cards/curso/curso.component';
import { CursoDetalheComponent } from './home/content-cards/curso-detalhe/curso-detalhe.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuToolbarComponent,
    ContentCardsComponent,
    CursoComponent,
    CursoDetalheComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    HttpClientModule,
    CursosRoutingModule,
    routing
  ],
  providers: [CursoDetalheService],
  bootstrap: [AppComponent]
})
export class AppModule { }
