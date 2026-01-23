import { CommonModule, NgIf } from '@angular/common';
import { Component,OnInit,OnChanges, SimpleChanges,Input, Directive } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Session } from './session/session';
import { Event } from "./event/event";
import { Highlight } from './highlight';
import { Condition } from './condition/condition';
import { Child } from './child/child';
import { Hooks } from './hooks/hooks';
import { CustomPipeNamePipe } from './custom-pipe-name-pipe';
import { User } from './user/user';



@Component({
  selector: 'app-root',
  standalone:true,
  imports: [ CommonModule,FormsModule, Session, Event,Highlight,Condition,Child,Hooks,CustomPipeNamePipe,User],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  email :string='';
 
  password='';
  parentValue = 'Hello';
 tempValue = '';
  finalValue = 'welcome';
 today=new Date();
 amount=2500;
  updateValue() {
    this.finalValue = this.tempValue;

  }
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
  

    console.log('component loaded');
   }  
 
 show = true;

destroyComponent() {
  this.show = false;
}
 isHidden: boolean = true;

 leader="vanmathi";
}
