import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {

  @Output() emitter: EventEmitter<void> = new EventEmitter<void>();

  emitToggleMenuFromHeader() {
    this.emitter.emit();
  }
}
