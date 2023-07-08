import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [
        MatToolbarModule,
        MatIconModule
      ]
    });
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create header component', () => {
    expect(component).toBeTruthy();
  });

  it('should render header', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('header')).toBeTruthy();
  })

  it('should emit toggleMenu', () => {
    let showMenuMock = false;
    component.emitter.subscribe((showMenu) => {
      if (!showMenuMock) {
        expect(showMenu).toBeTruthy();
      } else {
        expect(showMenu).toBeFalsy();
      }
      showMenuMock = !showMenuMock;
    })
    for (let i = 0; i < 5; i++) {
      component.emitToggleMenu();
    }
  })
});
