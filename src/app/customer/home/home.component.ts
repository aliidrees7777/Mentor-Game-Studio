import { DisplayProject, AddProject } from './../../models/appuser';
import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  projects: DisplayProject[];  
  editState: boolean = false;
  itemToEdit: AddProject;

  constructor(public addProjectService: ProjectService) { }

  ngOnInit() {

    this.addProjectService.getProject().subscribe( items=> {
      
      this.projects=[];
    items.forEach(element=>{
  
      this.projects.push( element as DisplayProject );
    });
    });
  }

  editItem(event, item : AddProject){
    this.editState=true;
    this.itemToEdit=item;
  }

}
