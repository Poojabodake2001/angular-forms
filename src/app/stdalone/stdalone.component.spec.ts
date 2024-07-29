import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdaloneComponent } from './stdalone.component';

describe('StdaloneComponent', () => {
  let component: StdaloneComponent;
  let fixture: ComponentFixture<StdaloneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ StdaloneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StdaloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
