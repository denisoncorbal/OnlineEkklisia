import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Online Ekklisia';

  protected showMenu = false;

  sendToggleMenuFromHeader() {
    this.showMenu = !this.showMenu;
  }

  sendToggleMenuFromLink() {
    this.showMenu = !this.showMenu;
  }

}
