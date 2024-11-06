import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokedexGen4Component } from './pokedex-gen4.component';

describe('PokedexGen4Component', () => {
  let component: PokedexGen4Component;
  let fixture: ComponentFixture<PokedexGen4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokedexGen4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokedexGen4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
