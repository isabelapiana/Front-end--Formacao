import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarEpensamentoComponent } from './criar-pensamento.component';

describe('CriarEpensamentoComponent', () => {
  let component: CriarEpensamentoComponent;
  let fixture: ComponentFixture<CriarEpensamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarEpensamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriarEpensamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
