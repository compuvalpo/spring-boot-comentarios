import { Component, OnInit, inject } from '@angular/core';
import { ComentarioService } from '../services/comentario.service';
import { DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Comentario } from '../interfaces/comentario.Interface';

@Component({
  selector: 'app-comentario-list',
  standalone: true,
  imports: [DatePipe, RouterModule],
  templateUrl: './comentario-list.component.html',
  styleUrl: './comentario-list.component.css'
})
export default class ComentarioListComponent implements OnInit {
  private comentarioService = inject(ComentarioService);
  comentarios: Comentario[] = [];

  ngOnInit(): void {
      this.comentarioService.list().subscribe(comentarios => {
      this.comentarios = comentarios;
      });

  }

}
