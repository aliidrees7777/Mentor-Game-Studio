import { UserService } from './services/user.service';
import { AuthService } from 'src/app/services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private auth:AuthService, private userService:UserService){

    /* auth.user$.subscribe(user=>{
      if(user){
        userService.save(user);
      }
    }) */

  }
  title = 'mentorgaming';
}
