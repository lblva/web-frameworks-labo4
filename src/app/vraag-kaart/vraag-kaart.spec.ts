import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VraagKaart } from './vraag-kaart';

describe('VraagKaart', () => {
  let component: VraagKaart;
  let fixture: ComponentFixture<VraagKaart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VraagKaart],
    }).compileComponents();

    fixture = TestBed.createComponent(VraagKaart);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
