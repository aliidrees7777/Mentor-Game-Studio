import { AppUser } from './../../models/appuser';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usermanagement',
  templateUrl: './usermanagement.component.html',
  styleUrls: ['./usermanagement.component.css']
})
export class UsermanagementComponent implements OnInit {

  users: AppUser[];

  constructor(private userService: UserService) { }

  ngOnInit() {

    this.userService.getuser().subscribe( items=> {
      console.log(items);
      this.users=[];
    items.forEach(element=>{
  
      this.users.push( element as AppUser );;

    });
  });
  }

  
  isAdmin(item: AppUser){
    this.userService.isAdmin(item);
  }


}
