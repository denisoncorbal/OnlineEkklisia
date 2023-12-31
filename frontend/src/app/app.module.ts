import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { NgIf } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HeaderComponent } from './base-ui/header/header.component';
import { SideAndMainComponent } from './base-ui/side-and-main/side-and-main.component';
import { FooterComponent } from './base-ui/footer/footer.component';
import { CreateComponent } from './pages/church/create/create.component';
import { provideEnvironmentNgxMask } from 'ngx-mask';
import { HttpClientModule } from '@angular/common/http';
import { ListComponent } from './pages/church/list/list.component';
import { EditComponent } from './pages/church/edit/edit.component';
import { DeleteComponent } from './pages/church/delete/delete.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideAndMainComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    NgIf,
    MatSidenavModule,
    CreateComponent,
    ListComponent,
    HttpClientModule,
    EditComponent,
    DeleteComponent,
  ],
  providers: [provideEnvironmentNgxMask()],
  bootstrap: [AppComponent]
})
export class AppModule {
}

