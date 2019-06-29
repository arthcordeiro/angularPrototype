import { Component, OnInit, Input } from '@angular/core';
import { Cursos } from './cursos.model';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {
  @Input() curso: Cursos
  constructor() { }

  ngOnInit() {
  }

}
