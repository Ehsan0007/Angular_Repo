import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'
import { FormsModule } from '@angular/forms'
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth'


  // Initialize Firebase
  export const firebaseConfig = {
   apiKey: "AIzaSyA_Deqg48qutMfLzB-RtVL7jRWqE0kn5GQ",
    authDomain: "nativeauth-2f153.firebaseapp.com",
    databaseURL: "https://nativeauth-2f153.firebaseio.com",
    projectId: "nativeauth-2f153",
    storageBucket: "nativeauth-2f153.appspot.com",
    messagingSenderId: "544288181838"
  };

import { AppComponent } from './app.component';
import { MembersComponent } from './members/members.component';
import { EmailComponentComponent } from './email-component/email-component.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    MembersComponent,
    EmailComponentComponent,
    SignupComponent
  ],
  imports: [
    FormsModule,
    HttpModule,
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
