import { routes } from './routes';
import { environment } from './../environments/environment.prod';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AdminModule } from './admin/admin.module';
import { DropZoneDirective } from './drop-zone.directive';
import { AppRoutingModule } from './app-routing.module';
import { CustomerModule } from './customer/customer.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFirestoreModule } from 'angularfire2/firestore';

@NgModule({
  declarations: [
    AppComponent,
    DropZoneDirective,
    
  ],
  imports: [

    AngularFireModule.initializeApp(environment.firebase, 'mentorgaming'),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    CustomerModule,
    RouterModule,
    FormsModule,
    AdminModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
