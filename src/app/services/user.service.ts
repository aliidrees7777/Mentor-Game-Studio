import { AppUser } from './../models/appuser';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  userCollection: AngularFirestoreCollection<AppUser>;
  user: Observable<AppUser[]>
  userDoc: AngularFirestoreDocument<AppUser>;


  constructor(public afs:AngularFirestore) {

    this.userCollection=this.afs.collection('users');
    //this.user=this.afs.collection("users").valueChanges();
    /* this.user=this.afs.collection('items').snapshotChanges().pipe(changes=>{
      return changes.map(a=>{
        const data=a.payload.doc.data();
        data.id=a.payload.doc.id;
        return data;
      });
    }); */ 
  }

   save(user: firebase.User){
    this.userCollection.add({
      name: user.displayName,
      email: user.email,
      isAdmin: "false"
    });
  }

  getuser(){
    return this.afs.collection('users').valueChanges();
  }

  deleteItem(item : AppUser){
    this.userDoc=this.afs.doc(`items/${item.id}`);
    this.userDoc.delete();
  }

  
  updatesItem(item : AppUser){
   this.userDoc=this.afs.doc(`items/${item.id}`);
   this.userDoc.update(item);
 }

  /* deleteItem(user: firebase.User ){
    console.log(user.uid);
    this.userDoc=this.afs.doc(`users/${user.uid}`);
    console.log(this.userDoc);
    this.userDoc.delete();
  } */


  /* changeType(user, isAdmin) {
    if (isAdmin) {
      this.x = this.getUser(user).subscribe(item => {
        item.map(i => {
          console.log(i.payload.doc.data(), 'isAdmin');
          const id = i.payload.doc.id;
          user.isAdmin = true;
          this.afs.doc(`users/${id}`).set(user);
          this.x.unsubscribe();
        });
      });
    } else {
      this.x = this.getUser(user).subscribe(item => {
        item.map(i => {
          console.log(i.payload.doc.data(), 'NotIsAdmin');
          const id = i.payload.doc.id;
          user.isAdmin = false;
          this.afs.doc(`users/${id}`).set(user);
          this.x.unsubscribe();
        });
      });
    }
  }

  getUser(user) {
    return this.afs.collection('users', ref => ref.where('uid', '==', user.uid)).snapshotChanges();
  } */





}
