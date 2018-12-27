import { UsermanagementComponent } from './usermanagement/usermanagement.component';

import { AdminhomeComponent } from './adminhome/adminhome.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import { ProjectmanagementComponent } from './projectmanagement/projectmanagement.component';
import { AuthgaurdService } from '../services/authgaurd.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { ProjectService } from '../services/project.service';

@NgModule({
  imports: [
    CommonModule,
    
    FormsModule,


  ],
  declarations: [
    AdminhomeComponent,
    UsermanagementComponent,
    HeaderComponent,
    FooterComponent,
    ProjectmanagementComponent
  ],
  exports : [
    AdminhomeComponent,
    UsermanagementComponent,
    HeaderComponent,
    FooterComponent,
    ProjectmanagementComponent
  ],
  providers:[
    AuthService,
    UserService,
    AuthgaurdService,
    ProjectService

  ]

})
export class AdminModule { }
