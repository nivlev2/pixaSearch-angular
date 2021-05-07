import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPixaComponent } from './app-pixa.component';

describe('AppPixaComponent', () => {
  let component: AppPixaComponent;
  let fixture: ComponentFixture<AppPixaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppPixaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppPixaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
