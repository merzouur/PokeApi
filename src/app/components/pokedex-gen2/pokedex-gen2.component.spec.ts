import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokedexGen2Component } from './pokedex-gen2.component';

describe('PokedexGen2Component', () => {
  let component: PokedexGen2Component;
  let fixture: ComponentFixture<PokedexGen2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokedexGen2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokedexGen2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
