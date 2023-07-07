import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {
  constructor() { }

  @Output() emitter: EventEmitter<boolean> = new EventEmitter<boolean>();

  private showMenu = false;

  emitToggleMenu() {
    this.showMenu = !this.showMenu;
    this.emitter.emit(this.showMenu);
  }
}
