import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpeniaComponent } from './openia.component';

describe('OpeniaComponent', () => {
  let component: OpeniaComponent;
  let fixture: ComponentFixture<OpeniaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpeniaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OpeniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
