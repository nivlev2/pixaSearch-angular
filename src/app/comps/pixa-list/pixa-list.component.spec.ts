import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PixaListComponent } from './pixa-list.component';

describe('PixaListComponent', () => {
  let component: PixaListComponent;
  let fixture: ComponentFixture<PixaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PixaListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PixaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
