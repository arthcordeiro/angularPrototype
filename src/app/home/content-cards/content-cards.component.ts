import { CursoDetalheService } from './../../curso-detalhe.service';
import { Component, OnInit } from '@angular/core';
import { Cursos } from './curso/cursos.model';

@Component({
  selector: 'app-content-cards',
  templateUrl: './content-cards.component.html',
  styleUrls: ['./content-cards.component.css']
})
export class ContentCardsComponent implements OnInit {

  curso: Cursos[];

  constructor(private cursoDetalhe: CursoDetalheService) { }

  ngOnInit() {
    this.cursoDetalhe.getCursoDetalhe()
      .subscribe( curso => {
        this.curso = curso["data"],
        this.course(curso),
        console.log(this.curso)
      });
  }
  

   course (course) {
     this.curso = course["data"];
     for (let i = 0; i < this.curso.length; i++) {
       this.curso[i].id = i;
     }
     console.log(this.curso[0]);
   }

}
