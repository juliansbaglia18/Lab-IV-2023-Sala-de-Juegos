// import { Auth, authState, createUserWithEmailAndPassword, GoogleAuthProvider, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, User, UserCredential } from '@angular/fire/auth';
// import { inject, Injectable } from '@angular/core';
// import { signInWithRedirect } from '@firebase/auth';
// import { Router } from '@angular/router';

// interface ErrorResponse {
//   code: string;
//   message: string;
// }
// @Injectable({
//   providedIn: 'root',
// })
// export class AuthService {
//   private readonly auth = inject(Auth);
//   private readonly router = inject(Router);
//   private readonly googleProvider = new GoogleAuthProvider();



//   constructor() {
//    //this.signOut();
//   }

//   get userState$() {
//     return authState(this.auth);
//   }

//   async signInGoogle(): Promise<void> {
//     try {
//       await signInWithRedirect(this.auth, this.googleProvider);
//     } catch (error) {
//       console.log('Google login', error);
//     }
//   }

//   async signUp(email: string, password: string): Promise<void> {
//     try {
//       const { user } = await createUserWithEmailAndPassword(
//         this.auth,
//         email,
//         password
//       );
//       await this.sendEmailVerification(user);
//       this.router.navigate(['/user/email-verification']);
//     } catch (error: unknown) {
//       const { code, message } = error as ErrorResponse;
//       console.log('Code ', code);
//       console.log('Message ', message);
//     }
//   }

//     async signIn(email: string, password: string): Promise<void> {
//       try {
//         const { user } = await signInWithEmailAndPassword(this.auth, email, password);
//         this.checkUserIsVerified(user);
//     } catch (error: unknown) {
//       const { code, message } = error as ErrorResponse;
//       console.log('Code ', code);
//       console.log('Message ', message);
//     }
//     }

//   async signOut(): Promise<void> {
//     try {
//       await this.auth.signOut();
//     } catch (error: unknown) {
//       console.log(error);
//     }
//   }

//   async sendEmailVerification(user: User): Promise<void> {
//     try {
//       await sendEmailVerification(user);
//     } catch (error: unknown) {
//       console.log(error);
//     }
//   }
//   async sendPasswordResetEmail(email: string): Promise<void> {
//     try {
//       await sendPasswordResetEmail(this.auth, email);
//     } catch (error: unknown) {
//       console.log(error);
//     }
//   }


//   private checkUserIsVerified(user: User): void {
//     const route = user.emailVerified ? '/user/profile' : '/user/email-verification';
//     this.router.navigate([route]);
//   }
// }




import { Injectable, inject } from '@angular/core';
//import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from '@angular/fire/auth';
import { signOut, Auth, authState, createUserWithEmailAndPassword, GoogleAuthProvider, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, User, UserCredential } from '@angular/fire/auth';
import { signInWithRedirect } from '@firebase/auth';

 // import { AngularFireAuth } from "@angular/fire/compat/auth";
 //import { AngularFireAuth } from '@angular/fire/auth';


 @Injectable({
     providedIn: 'root',
  })

 export class UserService {
   //private readonly auth_ = inject(Auth);

   constructor(
     private auth: Auth,

     //private _auth : AngularFireAuth
     ) { }

   register({email, password}: any){
     return createUserWithEmailAndPassword(this.auth, email, password);
   }

 login(credentials: { email: string; password: string }) {
     return signInWithEmailAndPassword(this.auth, credentials.email, credentials.password);
   }

   logOut(){
     console.log("cierro sesion");
     return signOut(this.auth);
   }

   // getInfoUsuarioLoggeado(){
   //   return this._auth.authState;
   // }
getInfoUsuarioLoggeado(){
   //return authState(this.auth_); 
  }

//  get userState$() {
//   //return authState(this.auth_);
//  }

 }
