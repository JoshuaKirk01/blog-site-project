import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TrendingComponent } from './trending/trending.component';
import { ProfileComponent } from './profile/profile.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'trending', component: TrendingComponent
  },
  {
    path: 'profile', component: ProfileComponent
  },
  {
    path: 'sign-in', component: SignInComponent
  },
  {
    path: '', redirectTo: '/home', pathMatch: 'full' 
  },
  {
    path: '**', component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
