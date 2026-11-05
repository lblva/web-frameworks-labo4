import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Voortgangsbalk } from './voortgangsbalk';

describe('Voortgangsbalk', () => {
  let component: Voortgangsbalk;
  let fixture: ComponentFixture<Voortgangsbalk>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Voortgangsbalk],
    }).compileComponents();

    fixture = TestBed.createComponent(Voortgangsbalk);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
