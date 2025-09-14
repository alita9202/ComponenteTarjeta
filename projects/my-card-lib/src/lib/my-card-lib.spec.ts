import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCardLib } from './my-card-lib';

describe('MyCardLib', () => {
  let component: MyCardLib;
  let fixture: ComponentFixture<MyCardLib>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyCardLib]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyCardLib);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
