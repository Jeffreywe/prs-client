import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';
import { E404Component } from './core/e404/e404.component';
import { MenuComponent } from './menu/menu.component';
import { UserListComponent } from './main/user/user-list/user-list.component';
import { UserDetailComponent } from './main/user/user-detail/user-detail.component';
import { UserCreateComponent } from './main/user/user-create/user-create.component';
import { UserEditComponent } from './main/user/user-edit/user-edit.component';
import { UserSearchPipe } from './main/user/user-search.pipe';
import { BoolDisplayPipe } from './bool-display.pipe';
import { UserLoginComponent } from './main/user/user-login/user-login.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    E404Component,
    MenuComponent,
    UserListComponent,
    UserDetailComponent,
    UserCreateComponent,
    UserEditComponent,
    UserSearchPipe,
    BoolDisplayPipe,
    UserLoginComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
