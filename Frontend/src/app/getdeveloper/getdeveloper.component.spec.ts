import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetdeveloperComponent } from './getdeveloper.component';

describe('GetdeveloperComponent', () => {
  let component: GetdeveloperComponent;
  let fixture: ComponentFixture<GetdeveloperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetdeveloperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetdeveloperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
