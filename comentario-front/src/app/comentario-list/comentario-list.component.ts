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

  regiones = [
    {id:0, name: ""},
    {id:1, name: "TARAPACA"},
    {id:2, name: "ANTOFAGASTA"},
    {id:3, name: "ATACAMA"},
    {id:4, name: "COQUIMBO"},
    {id:5, name: "VALPARAISO"},
    {id:6, name: "LIBERTADOR B. OHIGGINS"},
    {id:7, name: "MAULE"},
    {id:8, name: "BIOBIO"},
    {id:9, name: "ARAUCANIA"},
    {id:10, name: "LOS LAGOS"},
    {id:11, name: "AYSEN"},
    {id:12, name: "MAGALLANES"},
    {id:13, name: "METROPOLITANA"},
    {id:14, name: "LOS RIOS"},
    {id:15, name: "ATACAMA"},
    {id:16, name: "ÑUBLE"}
  ]

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
