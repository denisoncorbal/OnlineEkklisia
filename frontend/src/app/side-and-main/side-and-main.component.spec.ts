import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideAndMainComponent } from './side-and-main.component';

describe('SideAndMainComponent', () => {
  let component: SideAndMainComponent;
  let fixture: ComponentFixture<SideAndMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SideAndMainComponent]
    });
    fixture = TestBed.createComponent(SideAndMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
