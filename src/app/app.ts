import { CommonModule } from '@angular/common';
import { Component,OnInit,OnChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Session } from './session/session';
import { Event } from "./event/event";


@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule, Session, Event],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  email :string='';
  emailMessage='';
  password='';
  retrievedEmail: string | null = '';
    localstorage(){
           if(this.email===''||this.password===''){
            return;

           }
           localStorage.setItem('email',this.email);
          localStorage.setItem('password',this.password);

           alert('username and password saved');
           this.email='';
           this.password='';
    }
    getEmail() {
    this.retrievedEmail = localStorage.getItem('email');

    if(this.retrievedEmail) {
      alert('Retrieved Email: ' + this.retrievedEmail);
    } else {
      alert('No email found in localStorage');
    }
  }
   ngOnInit(){
    console.log('component loaded');
   }  
  

onEmailChange() {
  this.emailMessage = 'Email value changed!'+ this.email;
}

 
}
