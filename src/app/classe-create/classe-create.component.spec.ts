import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasseCreateComponent } from './classe-create.component';

describe('ClasseCreateComponent', () => {
  let component: ClasseCreateComponent;
  let fixture: ComponentFixture<ClasseCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClasseCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClasseCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
