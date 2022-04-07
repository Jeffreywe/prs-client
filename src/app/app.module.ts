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
import { VendorListComponent } from './main/vendor/vendor-list/vendor-list.component';
import { VendorCreateComponent } from './main/vendor/vendor-create/vendor-create.component';
import { VendorEditComponent } from './main/vendor/vendor-edit/vendor-edit.component';
import { VendorDetailComponent } from './main/vendor/vendor-detail/vendor-detail.component';
import { VendorSearchPipe } from './main/vendor/vendor-search.pipe';
import { ProductListComponent } from './main/product/product-list/product-list.component';
import { ProductCreateComponent } from './main/product/product-create/product-create.component';
import { ProductEditComponent } from './main/product/product-edit/product-edit.component';
import { ProductDetailComponent } from './main/product/product-detail/product-detail.component';
import { ProductSearchPipe } from './main/product/product-search.pipe';
import { RequestListComponent } from './main/request/request-list/request-list.component';
import { RequestCreateComponent } from './main/request/request-create/request-create.component';
import { RequestEditComponent } from './main/request/request-edit/request-edit.component';
import { RequestDetailComponent } from './main/request/request-detail/request-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    E404Component,
    MenuComponent,
    BoolDisplayPipe,

    UserListComponent,
    UserDetailComponent,
    UserCreateComponent,
    UserEditComponent,
    UserSearchPipe,
    UserLoginComponent,

    VendorListComponent,
    VendorCreateComponent,
    VendorEditComponent,
    VendorDetailComponent,
    VendorSearchPipe,

    ProductListComponent,
    ProductCreateComponent,
    ProductEditComponent,
    ProductDetailComponent,
    ProductSearchPipe,
    
    RequestListComponent,
    RequestCreateComponent,
    RequestEditComponent,
    RequestDetailComponent,
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
