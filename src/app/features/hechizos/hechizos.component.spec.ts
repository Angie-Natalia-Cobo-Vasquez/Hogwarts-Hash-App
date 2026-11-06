import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HechizosComponent } from './hechizos.component';
import { HechizosModule } from './hechizos.module';

describe('HechizosComponent', () => {
  let component: HechizosComponent;
  let fixture: ComponentFixture<HechizosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HechizosModule],
    }).compileComponents();

    fixture = TestBed.createComponent(HechizosComponent);
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
