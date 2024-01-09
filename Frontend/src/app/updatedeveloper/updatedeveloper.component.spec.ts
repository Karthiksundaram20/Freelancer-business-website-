import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatedeveloperComponent } from './updatedeveloper.component';

describe('UpdatedeveloperComponent', () => {
  let component: UpdatedeveloperComponent;
  let fixture: ComponentFixture<UpdatedeveloperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatedeveloperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatedeveloperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
