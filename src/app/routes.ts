import { Routes } from '@angular/router';
import { UsermanagementComponent } from './admin/usermanagement/usermanagement.component';
import { HomeComponent } from './customer/home/home.component';
import { ProjectmanagementComponent } from './admin/projectmanagement/projectmanagement.component';


export const routes: Routes = [
    // { path: '**', component } // Unknown Route

    { path: 'admin', component: ProjectmanagementComponent },
    { path: 'admin/usermanagement', component: UsermanagementComponent },
    { path: '', component: HomeComponent },
    
    
];
