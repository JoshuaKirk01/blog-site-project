import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MembershipComponent } from './membership/membership.component';
import { SupportComponent } from './support/support.component';
import { BlogComponent } from './blog/blog.component';
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent, pathMatch: 'full'
  },
  {
    path: 'membership', component: MembershipComponent, pathMatch: 'full'
  },
  {
    path: 'support', component: SupportComponent, pathMatch: 'full'
  },
  {
    path: 'blog', component: BlogComponent, pathMatch: 'full'
  },
  {
    path: 'sign-in', component: SignInComponent, pathMatch: 'full'
  },
  {
    path: '', redirectTo: '/home', pathMatch: 'full' 
  },
  {
    path: '**', component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
