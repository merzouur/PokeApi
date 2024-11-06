import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokedexGen1Component } from './pokedex-gen1.component';

describe('PokedexGen1Component', () => {
  let component: PokedexGen1Component;
  let fixture: ComponentFixture<PokedexGen1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokedexGen1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokedexGen1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
