import { CursoDetalheService } from './../../../curso-detalhe.service';
import { Component, OnInit } from '@angular/core';
import { Cursos } from '../curso/cursos.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit {

  curso: Cursos;
  id: number;

  constructor(private cursoDetalhe: CursoDetalheService, private route: ActivatedRoute) { 
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.cursoDetalhe.getCursoDetalhe()
    .subscribe(curso => {
      this.curso = curso["data"][this.id],
      console.log(this.curso)
    });
  }

}
