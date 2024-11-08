import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokedexGen5Component } from './pokedex-gen5.component';

describe('PokedexGen5Component', () => {
  let component: PokedexGen5Component;
  let fixture: ComponentFixture<PokedexGen5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokedexGen5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokedexGen5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
