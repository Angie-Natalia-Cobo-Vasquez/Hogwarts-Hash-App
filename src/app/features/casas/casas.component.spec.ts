import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CasasComponent } from './casas.component';
import { CasasModule } from './casas.module';

describe('CasasComponent', () => {
  let component: CasasComponent;
  let fixture: ComponentFixture<CasasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CasasModule],
    }).compileComponents();

    fixture = TestBed.createComponent(CasasComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load 4 items', () => {
    expect(component.items.length).toBe(4);
  });
});
