import { Component, OnInit, inject } from '@angular/core';
import { ComentarioService } from '../services/comentario.service';
import { DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Comentario } from '../interfaces/comentario.Interface';
import swal from 'sweetalert2';

@Component({
  selector: 'app-comentario-list',
  standalone: true,
  imports: [DatePipe, RouterModule],
  templateUrl: './comentario-list.component.html',
  styleUrl: './comentario-list.component.css',
})

export default class ComentarioListComponent implements OnInit {
  private comentarioService = inject(ComentarioService);
  comentarios: Comentario[] = [];

  recargar() {
    this.comentarioService.list().subscribe((comentarios) => {
      this.comentarios = comentarios;
    });
  }

  ngOnInit(): void {
    this.recargar();
  }

  deleteComentario(comentario: Comentario) {
    this.comentarioService.delete(comentario.id).subscribe(() => {
      swal
        .fire({
          title: 'Comentario Eliminado',
          text: 'Su comentario ha sido eliminado',
          icon: 'success',
          confirmButtonText: 'OK',
          timer: 2500,
          timerProgressBar: true,
        })
        .then((result) => {
          this.recargar();
        });
    });
  }
}
