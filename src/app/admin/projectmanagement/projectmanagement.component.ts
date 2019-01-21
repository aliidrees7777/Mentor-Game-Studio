import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { ProjectService } from './../../services/project.service';
import { Component, OnInit } from '@angular/core';
import { AddProject, DisplayProject } from '../../models/appuser';
import { AngularFireUploadTask } from 'angularfire2/storage';
import { Observable } from 'rxjs';
import { AngularFireStorage } from 'angularfire2/storage';
import { tap, finalize } from 'rxjs/operators';

@Component({
  selector: 'app-projectmanagement',
  templateUrl: './projectmanagement.component.html',
  styleUrls: ['./projectmanagement.component.css']
})
export class ProjectmanagementComponent implements OnInit {

  task: AngularFireUploadTask;
  snapshot: Observable<any>;
  paths: any;
  projectCollection: AngularFirestoreCollection;
  // Download URL
  downloadURL: Observable<string>;
  uploadPercent: Observable < number > ;


  project: AddProject={
    name:'',
    description:'',
    url1: '',
    url2: '',
    url3: '',
  
  }

  projects: DisplayProject[];

  editState: boolean = false;
  itemToEdit: AddProject;

  constructor(public addProjectService: ProjectService, private db: AngularFirestore, private storage: AngularFireStorage) {

   }

  ngOnInit() {
    this.addProjectService.getProject().subscribe( items=> {
      console.log(items);
      this.projects=[];
    items.forEach(element=>{
  
      this.projects.push( element as DisplayProject );

    });
   });

  }


  deleteItem(event, item : AddProject){
    this.addProjectService.deleteItem(item);
  }
  

  updateItem(item: AddProject){
    this.addProjectService.updateItem(item);
  }

  editItem(event, item : AddProject){
    this.editState=true;
    this.itemToEdit=item;
  }

  
  startUpload(event: FileList) {

    for(var i=0; i<event.length; i++){
      if(i==0){
        // The File object
    const file = event.item(i)
    const path = `test/${new Date().getTime()}_${file.name}`;
    const fileRef = this.storage.ref(path);
    const customMetadata = { app: 'My AngularFire-powered PWA!' };
    this.task = this.storage.upload(path, file, { customMetadata })
    this.uploadPercent = this.task.percentageChanges();
    this.task.snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe(url => {
          console.log(url); // <-- do what ever you want with the url..
          this.paths=url;
          console.log('this is paths: '+ this.paths);
          this.project.url1=this.paths; 
          
        });
      })
    ).subscribe();

      }

      if(i==1){
        // The File object
    const file = event.item(i)
    const path = `test/${new Date().getTime()}_${file.name}`;
    const fileRef = this.storage.ref(path);
    const customMetadata = { app: 'My AngularFire-powered PWA!' };
    this.task = this.storage.upload(path, file, { customMetadata });
    this.uploadPercent = this.task.percentageChanges();
    this.task.snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe(url => {
          console.log(url); // <-- do what ever you want with the url..
          this.paths=url;
          console.log('this is paths: '+ this.paths);
          this.project.url2=this.paths; 
          
        });
      })
    ).subscribe();

      }

      if(i==2){
        // The File object
    const file = event.item(i)
    const path = `test/${new Date().getTime()}_${file.name}`;
    const fileRef = this.storage.ref(path);
    const customMetadata = { app: 'My AngularFire-powered PWA!' };
    this.task = this.storage.upload(path, file, { customMetadata });
    this.uploadPercent = this.task.percentageChanges();
    this.task.snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe(url => {
          console.log(url); // <-- do what ever you want with the url..
          this.paths=url;
          console.log('this is paths: '+ this.paths);
          this.project.url3=this.paths; 
          
        });
      })
    ).subscribe();

      }


    

    }
    
  }


  onSubmit(){
    this.addProjectService.addProject(this.project);
    this.project.name='';
    this.project.description='';
    this.project.url1='';
    this.project.url2='';
    this.project.url3='';    
  }
}
