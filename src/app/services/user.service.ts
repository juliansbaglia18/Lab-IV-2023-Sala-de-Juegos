import { Injectable, inject } from '@angular/core';
import firebase from 'firebase/compat/app';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import auth from 'firebase/compat/app';
import { onAuthStateChanged } from "firebase/auth";


 @Injectable({
     providedIn: 'root',
  })

 export class UserService {
   //private readonly auth_ = inject(Auth);

   constructor(
     private afauth: AngularFireAuth
     ) { }

   async register(email: string, password: string){
    try {
      return this.afauth.createUserWithEmailAndPassword(email, password)
     } 
     catch (error) {
      console.log("Error en registro:", error);
      return null;
     }
   }

 async login(email: string, password: string ) {
     //return signInWithEmailAndPassword(this.auth, credentials.email, credentials.password);
     try {
      return this.afauth.signInWithEmailAndPassword(email, password)
     } catch (error) {
      console.log("Error en login:", error);
      return null;
     }
   }

 async loginWithGoogle() {
     try {
      return await this.afauth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
     } catch (error) {
      console.log("Error en login con google:", error);
      return null;
     }
   }

   getUserLogged(){
    return this.afauth.authState;

   }

   logOut(){
     console.log("cierro sesion");
     this.afauth.signOut();
   }

 }
