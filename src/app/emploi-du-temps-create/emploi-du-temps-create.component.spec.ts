import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploiDuTempsCreateComponent } from './emploi-du-temps-create.component';

describe('EmploiDuTempsCreateComponent', () => {
  let component: EmploiDuTempsCreateComponent;
  let fixture: ComponentFixture<EmploiDuTempsCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmploiDuTempsCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmploiDuTempsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
