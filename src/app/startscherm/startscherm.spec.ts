import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Startscherm } from './startscherm';

describe('Startscherm', () => {
  let component: Startscherm;
  let fixture: ComponentFixture<Startscherm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Startscherm],
    }).compileComponents();

    fixture = TestBed.createComponent(Startscherm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
