import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {ScreenLeadsComponent} from './screen-leads/screen-leads.component'
import { ScreenAdminComponent } from './screen-admin/screen-admin.component';
import { ScreenMyProfileComponent } from './screen-my-profile/screen-my-profile.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'leads', component: ScreenLeadsComponent},
  { path: 'admin', component: ScreenAdminComponent},
  { path: 'my_profile', component: ScreenMyProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
