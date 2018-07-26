import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ModelListComponent } from './model/model-list.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PropertyComponent } from './property/property.component';
import { TemplateComponent } from './template/template.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { AuthGuard } from './services/auth.guard';
import { LanguageComponent } from './language/language.component';
import { LanguagesComponent } from './languages/languages.component';
import { UsersComponent } from './users/users.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserSearchComponent } from './user-search/user-search.component';
import { LeftmenuComponent } from './leftmenu/leftmenu.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'model', component: ModelListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'property', component: PropertyComponent },
  { path: 'template', component: TemplateComponent },
  { path: 'language', component: LanguageComponent },
  { path: 'languages', component: LanguagesComponent },
  { path: 'unauthorized', component: UnauthorizedComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'detail/:id', component: UserDetailComponent, canActivate: [AuthGuard] },
  { path: 'users', component: UsersComponent, canActivate: [AuthGuard] },
  { path: 'user', component: UserComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
