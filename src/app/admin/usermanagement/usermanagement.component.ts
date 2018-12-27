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
  editState: boolean = false;
  itemToEdit: AppUser;

  constructor(private userService: UserService) { }

  ngOnInit() {

    this.userService.getuser().subscribe( items=> {
      this.users=[];
    items.forEach(element=>{
  
      this.users.push( element as AppUser );;

    });
  });
  }

  /* changeType(user, event) {
    // console.log(user); // Get the user
    // console.log(event.target.checked); // check if
    this.userService.changeType(user, event.target.checked);
    // document.getElementById('onoffswitch').checked;
  } */

  /* deleteItem(event, item ){
    this.userService.deleteItem(item);
  } */




  clearState(){
    this.editState=false;
    this.itemToEdit=null;
  }

  deleteItem(event, item : AppUser){
    this.clearState();
    this.userService.deleteItem(item);
  }
 
  editItem(event, item : AppUser){
    this.editState=true;
    this.itemToEdit=item;
  }

  updateItem(item: AppUser){
    this.userService.updatesItem(item);
    this.clearState();
  }

}
