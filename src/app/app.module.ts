import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RepoComponent } from './repo/repo.component';
import { FindFormComponent } from './find-form/find-form.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RepoComponent,
    FindFormComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
