import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PersonajesComponent } from './personajes.component';
import { PersonajesModule } from './personajes.module';

describe('PersonajesComponent', () => {
  let component: PersonajesComponent;
  let fixture: ComponentFixture<PersonajesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonajesModule],
    }).compileComponents();

    fixture = TestBed.createComponent(PersonajesComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load 12 items', () => {
    expect(component.items.length).toBe(12);
  });
});
