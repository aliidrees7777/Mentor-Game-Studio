import { AppUser } from './../models/appuser';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userCollection: AngularFirestoreCollection<AppUser>;
  user: Observable<AppUser[]>
  userDoc: AngularFirestoreDocument<AppUser>;


  constructor(public afs:AngularFirestore) {

    this.userCollection=this.afs.collection('users');
    //this.projects=this.afs.collection('projects').valueChanges();
    this.user=this.afs.collection('users').snapshotChanges().pipe(map(changes=>{
      return changes.map(a=>{
        const data=a.payload.doc.data() as AppUser;
        data.id=a.payload.doc.id;
        return data;
      });
    }));
  }

   save(user: firebase.User){
    this.userCollection.add({
      name: user.displayName,
      email: user.email,
      isAdmin: "false",
//      id: user.uid
    });
  }
  

  getuser(){
    return this.afs.collection('users').valueChanges();
  }

  isAdmin(item : AppUser){
   this.userDoc=this.afs.doc(`users/${item.id}`);
   this.userDoc.update({
     isAdmin:"true"
   });
 }

}
