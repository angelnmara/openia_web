import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespuestaopeniaComponent } from './respuestaopenia.component';

describe('RespuestaopeniaComponent', () => {
  let component: RespuestaopeniaComponent;
  let fixture: ComponentFixture<RespuestaopeniaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RespuestaopeniaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RespuestaopeniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
