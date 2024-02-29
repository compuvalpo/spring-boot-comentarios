import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
  FormGroup,
} from '@angular/forms';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { ComentarioService } from '../services/comentario.service';
import swal from 'sweetalert2';
import { Comentario } from '../interfaces/comentario.Interface';

@Component({
  selector: 'app-comentario-editar',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './comentario-editar.component.html',
  styleUrl: './comentario-editar.component.css',
})
export default class ComentarioEditarComponent implements OnInit {
  private formBuilder = inject(FormBuilder);
  private comentarioService = inject(ComentarioService);
  private router = inject(Router);
  private aRoute = inject(ActivatedRoute);

  form: FormGroup;
  comentario: Comentario;

  ngOnInit(): void {
    const id = this.aRoute.snapshot.paramMap.get('id');

    if (id) {
      this.comentarioService.get(parseInt(id)).subscribe((comentario) => {
        this.comentario = comentario;

        this.form = this.formBuilder.group({
          email: [comentario.email, [Validators.required]],
          fk_region: [comentario.fk_region, [Validators.required]],
          comentario: [comentario.comentario, [Validators.required]],
        });
      });
    } else {
      this.form = this.formBuilder.group({
        email: ['', [Validators.required]],
        fk_region: ['', [Validators.required]],
        comentario: ['', [Validators.required]],
      });
    }
  }

  editar() {
    const comentario = this.form.value;

    this.comentarioService
      .update(this.comentario.id, comentario)
      .subscribe(() => {
        this.finalizarEditar();
      });
  }

  finalizarEditar() {
    swal
      .fire({
        title: 'Comentario Editado',
        text: 'Su comentario ha sido Editado',
        icon: 'success',
        confirmButtonText: 'OK',
        timer: 2500,
        timerProgressBar: true,
      })
      .then((result) => {
        this.router.navigate(['/']);
      });
  }
}
