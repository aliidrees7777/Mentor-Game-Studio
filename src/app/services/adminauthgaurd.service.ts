import { AppUser } from './../models/appuser';
import { UserService } from './user.service';
import { AuthService } from './auth.service';
import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { switchMap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminauthgaurdService{

  constructor(private auth: AuthService, private userService: UserService) { }

  /* canActivate(){
    return this.auth.user$.pipe(
      switchMap(user=> this.userService.get(user.uid))
      map(AppUser)
    )
      /* map(user=>{
        this.userService.get(user.uid);
      }))
      .subscribe(x=> console.log(x)); */
    //return true;
//  }
}
