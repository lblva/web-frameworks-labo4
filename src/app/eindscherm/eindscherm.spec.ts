import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Eindscherm } from './eindscherm';

describe('Eindscherm', () => {
  let component: Eindscherm;
  let fixture: ComponentFixture<Eindscherm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Eindscherm],
    }).compileComponents();

    fixture = TestBed.createComponent(Eindscherm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
