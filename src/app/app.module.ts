import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RepoComponent } from './repo/repo.component';
import { FindFormComponent } from './find-form/find-form.component';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { ErrorComponent } from './error/error.component';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpClientModule } from '@ngx-progressbar/http-client';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RepoComponent,
    FindFormComponent,
    UserComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgProgressModule.forRoot(),
    NgProgressHttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
