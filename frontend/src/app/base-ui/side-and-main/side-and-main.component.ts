import { AfterViewInit, Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-side-and-main',
  templateUrl: './side-and-main.component.html',
  styleUrls: ['./side-and-main.component.sass']
})
export class SideAndMainComponent implements AfterViewInit, OnChanges {

  @Input() showMenu = false;
  @ViewChild('drawer') drawer!: MatSidenav;

  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      if (propName === "showMenu") {
        this.toggleMenu();
      }
    }
  }

  ngAfterViewInit() {
    this.toggleMenu();
  }

  toggleMenu() {
    if (this.drawer) {
      switch (this.showMenu) {
        case true: {
          this.drawer.open();
          break;
        }
        case false: {
          this.drawer.close();
          break;
        }
      }
    }
  }
}
