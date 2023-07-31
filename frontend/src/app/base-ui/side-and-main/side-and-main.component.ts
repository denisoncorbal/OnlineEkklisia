import { AfterViewInit, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-side-and-main',
  templateUrl: './side-and-main.component.html',
  styleUrls: ['./side-and-main.component.sass']
})
export class SideAndMainComponent implements AfterViewInit, OnChanges {

  @Input() showMenu = false;
  @ViewChild('navMenu') navMenu!: MatSidenav;
  @Output() emitter: EventEmitter<void> = new EventEmitter<void>();

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

  emitToggleMenuFromLink() {
    this.emitter.emit();
  }

  toggleMenu() {
    if (this.navMenu) {
      switch (this.showMenu) {
        case true: {
          this.navMenu.open();
          break;
        }
        case false: {
          this.navMenu.close();
          break;
        }
      }
    }
  }
}
