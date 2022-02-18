import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanlecontroleComponent } from './panlecontrole.component';

describe('PanlecontroleComponent', () => {
  let component: PanlecontroleComponent;
  let fixture: ComponentFixture<PanlecontroleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanlecontroleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanlecontroleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
