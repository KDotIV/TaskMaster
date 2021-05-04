import { Routes } from '@angular/router';
import { TaskMasterComponent } from './app/sections/section-taskmaster/section-taskmaster.component';

export const appRoutes: Routes = [
    { path: 'taskmaster', component: TaskMasterComponent},

    { path: '', redirectTo: '/taskmaster', pathMatch: 'full'}
];