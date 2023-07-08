import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TrendingComponent } from './trending/trending.component';
import { FeedComponent } from './feed/feed.component';
import { ProfileComponent } from './profile/profile.component';
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [
  {
    component: HomeComponent, path: ''
  },
  {
    component: TrendingComponent, path: 'trending'
  },
  {
    component: FeedComponent, path: 'feed'
  },
  {
    component: ProfileComponent, path: 'profile'
  },
  {
    component: SignInComponent, path: 'sign-in'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
