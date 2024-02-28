import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ComentarioService } from '../services/comentario.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-comentario-crear',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './comentario-crear.component.html',
  styleUrl: './comentario-crear.component.css',
})
export default class ComentarioCrearComponent {
  private formBuilder = inject(FormBuilder);
  private comentarioService = inject(ComentarioService);
  private router = inject(Router);

  form = this.formBuilder.group({
    email: ['', [Validators.required]],
    fk_region: ['', [Validators.required]],
    comentario: ['', [Validators.required]],
  });

  create() {
    const comentario = this.form.value;

    this.comentarioService.create(comentario).subscribe(() => {
      this.finalizarCreate();
    });
  }

  finalizarCreate(){
    this.router.navigate(['/']);

    swal.fire({
      title: 'Comentario Registrado',
      text: 'Su comentario ha sido registrado',
      icon: 'success',
      confirmButtonText: 'OK',
      timer: 2500,
      timerProgressBar: true
    })
  }
}
