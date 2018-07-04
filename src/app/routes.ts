import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const appRoutes: Routes = [
    {path: 'signin', component: LoginComponent},
    {path: 'signup', component: RegisterComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: '', redirectTo: '/signin', pathMatch: 'full'}
];
