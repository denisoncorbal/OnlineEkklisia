import { TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { FooterComponent } from './base-ui/footer/footer.component';
import { HeaderComponent } from './base-ui/header/header.component';
import { SideAndMainComponent } from './base-ui/side-and-main/side-and-main.component';

describe('AppComponent', () => {

  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule, MatToolbarModule, MatIconModule, MatButtonModule, MatSidenavModule, BrowserAnimationsModule],
    declarations: [AppComponent, HeaderComponent, FooterComponent, SideAndMainComponent]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Online Ekklisia'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Online Ekklisia');
  });

  it('shoud toogle menu from HeaderComponent', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const fixtureHeader = TestBed.createComponent(HeaderComponent);
    const headerComponent = fixtureHeader.componentInstance;
    expect(app['showMenu']).toBeFalsy()
    headerComponent.emitter.subscribe(() => {
      app.sendToggleMenuFromHeader();
    });
    headerComponent.emitToggleMenuFromHeader();
    expect(app['showMenu']).toBeTruthy()
  })

  it('shoud toogle menu from Link on SideAndMainComponent', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const fixtureHeader = TestBed.createComponent(SideAndMainComponent);
    const headerComponent = fixtureHeader.componentInstance;
    expect(app['showMenu']).toBeFalsy()
    headerComponent.emitter.subscribe(() => {
      app.sendToggleMenuFromLink();
    });
    headerComponent.emitToggleMenuFromLink();
    expect(app['showMenu']).toBeTruthy()
  })
});
