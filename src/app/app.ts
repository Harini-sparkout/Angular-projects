import { CommonModule } from '@angular/common';
import { Component,OnInit,OnChanges, SimpleChanges,Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Session } from './session/session';
import { Event } from "./event/event";
import { Hooks } from './hooks/hooks';


@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule, Session, Event,Hooks],
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

    data='hello from parent';
      previousData: string='';
     inputValue:string ='';
  changeData() {
    if(this.inputValue ==='') 
    this.previousData=this.data;
   this.data = this.inputValue;
   this.inputValue='';
}
   ngOnInit(){
    this.previousData= this.data;

    console.log('component loaded');
   }  
 
 
}
