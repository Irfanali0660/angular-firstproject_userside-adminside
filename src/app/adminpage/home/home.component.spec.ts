import { ComponentFixture, TestBed } from '@angular/core/testing';

import { adminHomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: adminHomeComponent;
  let fixture: ComponentFixture<adminHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ adminHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(adminHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
