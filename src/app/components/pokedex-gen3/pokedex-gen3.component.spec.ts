import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokedexGen3Component } from './pokedex-gen3.component';

describe('PokedexGen3Component', () => {
  let component: PokedexGen3Component;
  let fixture: ComponentFixture<PokedexGen3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokedexGen3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokedexGen3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
