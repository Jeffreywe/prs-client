import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './core/about/about.component';
import { E404Component } from './core/e404/e404.component';
import { HomeComponent } from './core/home/home.component';
import { UserCreateComponent } from './main/user/user-create/user-create.component';
import { UserDetailComponent } from './main/user/user-detail/user-detail.component';
import { UserEditComponent } from './main/user/user-edit/user-edit.component';
import { UserListComponent } from './main/user/user-list/user-list.component';
import { UserLoginComponent } from './main/user/user-login/user-login.component';


const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },

  { path: "user/list", component: UserListComponent },
  { path: "user/create", component: UserCreateComponent },
  { path: "user/detail/:id", component: UserDetailComponent },
  { path: "user/edit/:id", component: UserEditComponent },

  { path: "user/login", component: UserLoginComponent },

  { path: "**", component: E404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
