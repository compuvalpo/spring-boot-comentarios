import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentarioEditarComponent } from './comentario-editar.component';

describe('ComentarioEditarComponent', () => {
  let component: ComentarioEditarComponent;
  let fixture: ComponentFixture<ComentarioEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComentarioEditarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComentarioEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
