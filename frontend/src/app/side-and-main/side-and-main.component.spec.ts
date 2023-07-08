import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideAndMainComponent } from './side-and-main.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

describe('SideAndMainComponent', () => {
  let component: SideAndMainComponent;
  let fixture: ComponentFixture<SideAndMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SideAndMainComponent],
      imports: [
        MatSidenavModule,
        BrowserAnimationsModule,
        RouterModule
      ]
    });
    fixture = TestBed.createComponent(SideAndMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create side-and-main component', () => {
    expect(component).toBeTruthy();
  });

  it('should render nav', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('nav')).toBeTruthy();
  })

  it('should render main', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('main')).toBeTruthy();
  })

  it('should open and close menu', () => {
    component.showMenu = false;
    component.toggleMenu();
    fixture.detectChanges();
    const compiledFalse = fixture.nativeElement as HTMLElement;
    expect(compiledFalse.querySelector('mat-sidenav')?.checkVisibility()).toBeFalsy();

    component.showMenu = true;
    component.toggleMenu();
    fixture.detectChanges();
    const compiledTrue = fixture.nativeElement as HTMLElement;
    expect(compiledTrue.querySelector('mat-sidenav')?.checkVisibility()).toBeTruthy();
  })
});
