import { AddProject } from './../models/appuser';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  projectCollection: AngularFirestoreCollection<AddProject>;
  projects: Observable<AddProject[]>

  constructor(public afs:AngularFirestore) {

    this.projectCollection=this.afs.collection('projects');
    //this.projects=this.afs.collection('projects').valueChanges();
    this.projects=this.afs.collection('projects').snapshotChanges().pipe(map(changes=>{
      return changes.map(a=>{
        const data=a.payload.doc.data() as AddProject;
        data.id=a.payload.doc.id;
        return data;
      });
    }));

   }

  addProject(project: AddProject){
    this.projectCollection.add(project); 
  }

  getProject(){
    return this.projects;    
  }

  
}
