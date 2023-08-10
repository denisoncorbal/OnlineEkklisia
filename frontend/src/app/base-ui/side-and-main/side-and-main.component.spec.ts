import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleChange } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { SideAndMainComponent } from './side-and-main.component';

describe('SideAndMainComponent', () => {
  let component: SideAndMainComponent;
  let fixture: ComponentFixture<SideAndMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SideAndMainComponent],
      imports: [
        MatSidenavModule,
        BrowserAnimationsModule,
        RouterModule,
        AppRoutingModule
      ]
    });
    fixture = TestBed.createComponent(SideAndMainComponent);
    fixture.detectChanges();
    component = fixture.componentInstance;
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
    component.showMenu = true;
    component.toggleMenu();
    fixture.detectChanges();
    expect(component.navMenu.opened).toBeTruthy();

    component.showMenu = false;
    component.toggleMenu();
    fixture.detectChanges();
    expect(component.navMenu.opened).toBeFalsy();
  })

  it('shoul call toggleMenu when call ngOnChanges only with showMenu', () => {
    const toggleSpy = spyOn(component, 'toggleMenu');
    component.ngOnChanges({ test: new SimpleChange(false, true, false) });
    expect(toggleSpy).toHaveBeenCalledTimes(0);

    component.ngOnChanges({ showMenu: new SimpleChange(false, true, false) });
    expect(toggleSpy).toHaveBeenCalled();
  })
});
