import { UserService } from './../../services/user.service';
import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-adminheader',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private auth:AuthService, private userService:UserService) { 

    auth.user$.subscribe(user=>{
      if(user){
        userService.save(user);
      }
    }); 

  }

  ngOnInit() {
  }

  login(){
    this.auth.login(); 
  }

  logout(){
    this.auth.logout();
  }
}
