import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScreenLeadsComponent } from './screen-leads/screen-leads.component';
import { LoginComponent } from './login/login.component';
import { ScreenAdminComponent } from './screen-admin/screen-admin.component';
import { ScreenMyProfileComponent } from './screen-my-profile/screen-my-profile.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ScreenLeadsComponent,
    LoginComponent,
    ScreenAdminComponent,
    ScreenMyProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
