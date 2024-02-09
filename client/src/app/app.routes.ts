import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component'; 
import { ProfileComponent } from './components/pages/profile/profile.component';
import { LoginComponent } from './components/pages/login/login.component';
import { ViewComponent } from './components/pages/view/view.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'view', component: ViewComponent},
    {path: 'login', component: LoginComponent},
    {path: 'profile', component: ProfileComponent},
];
