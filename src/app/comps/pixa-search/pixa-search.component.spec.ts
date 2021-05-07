import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PixaSearchComponent } from './pixa-search.component';

describe('PixaSearchComponent', () => {
  let component: PixaSearchComponent;
  let fixture: ComponentFixture<PixaSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PixaSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PixaSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
