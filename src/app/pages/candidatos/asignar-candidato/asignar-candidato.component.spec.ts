import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarCandidatoComponent } from './asignar-candidato.component';

describe('AsignarCandidatoComponent', () => {
  let component: AsignarCandidatoComponent;
  let fixture: ComponentFixture<AsignarCandidatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignarCandidatoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignarCandidatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
